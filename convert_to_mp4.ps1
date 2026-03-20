# Script de conversión masiva AVI -> MP4 (Mazinger Z Project)
# Requiere FFmpeg instalado en el sistema

$targetDir = "d:\PROYECTO MAZINGER Z\episodios orginales"

# 1. LOCALIZAR FFmpeg
$ffmpegPath = "ffmpeg" # Por defecto intentar global

if (Test-Path "$PSScriptRoot\bin\ffmpeg.exe") {
    $ffmpegPath = "$PSScriptRoot\bin\ffmpeg.exe"
    Write-Host "Usando FFmpeg local: $ffmpegPath" -ForegroundColor Cyan
}
else {
    try {
        ffmpeg -version | Out-Null
        Write-Host "Usando FFmpeg global del sistema" -ForegroundColor Cyan
    }
    catch {
        Write-Host "Error: No se encuentra ffmpeg.exe en la carpeta /bin ni en el sistema." -ForegroundColor Red
        Write-Host "Por favor, asegúrate de que bin\ffmpeg.exe existe en la carpeta del proyecto."
        pause
        exit
    }
}

# 2. Obtener lista de archivos .avi
$files = Get-ChildItem -Path $targetDir -Filter "*.avi"
$convertedCount = 0

if ($null -eq $files -or $files.Count -eq 0) {
    Write-Host "No se encontraron archivos .avi en: $targetDir" -ForegroundColor Yellow
    pause
    exit
}

Write-Host "Se han encontrado $($files.Count) archivos para convertir.`n" -ForegroundColor Cyan

foreach ($file in $files) {
    $outputFile = Join-Path $targetDir ($file.BaseName + ".mp4")
    
    if (Test-Path $outputFile) {
        Write-Host "Saltando: $($file.Name), el archivo MP4 ya existe." -ForegroundColor Yellow
        continue
    }

    Write-Host "Procesando: $($file.Name)" -ForegroundColor White
    Write-Host "Convirtiendo a MP4 (Alta Calidad CRF 18)..." -ForegroundColor Gray

    # ... (FFmpeg execution remained the same)
    
    $ffmpegParams = @(
        "-i", "`"$($file.FullName)`"",
        "-c:v", "libx264",
        "-crf", "18",
        "-preset", "slow",
        "-c:a", "aac",
        "-b:a", "192k",
        "-pix_fmt", "yuv420p",
        "-y",
        "`"$outputFile`""
    )

    $ffmpegCmd = "$ffmpegPath $ffmpegParams"
    # Usar Start-Process para mejor manejo de errores en algunos entornos, 
    # pero mantenemos Invoke-Expression o el operador & por simplicidad si ya funciona.
    & $ffmpegPath $ffmpegParams

    # 3. Verificar éxito de la conversión
    if ($LASTEXITCODE -eq 0 -and (Test-Path $outputFile)) {
        $newFile = Get-Item $outputFile
        if ($newFile.Length -gt 1000) {
            Write-Host "¡Éxito! Eliminando archivo original .avi..." -ForegroundColor Green
            Remove-Item -Path $file.FullName -Force
            $convertedCount++
        }
        else {
            Write-Host "Advertencia: El archivo resultante parece demasiado pequeño. No se borrará el original." -ForegroundColor Yellow
        }
    }
    else {
        Write-Host "Error: La conversión de $($file.Name) falló." -ForegroundColor Red
    }
    Write-Host "----------------------------------------------------"
}

Write-Host "`n¡Proceso de conversión completado!" -ForegroundColor Cyan
Write-Host "Total de archivos convertidos con éxito: $convertedCount" -ForegroundColor Green
pause
