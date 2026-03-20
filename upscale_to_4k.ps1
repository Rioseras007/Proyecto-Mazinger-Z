# Script de Reescalado a 4K para Mazinger Z
# Requisitos: FFmpeg instalado y disponible en el PATH

$inputFolder = "episodios orginales"
$outputFolder = "espisodios 4k"
# 1. LOCALIZAR FFmpeg
$ffmpegPath = "ffmpeg" 

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
        pause
        exit
    }
}

if (-not (Test-Path $outputFolder)) {
    New-Item -ItemType Directory -Path $outputFolder
}

$files = Get-ChildItem -Path $inputFolder -Filter "*.mp4"
$upscaledCount = 0

foreach ($file in $files) {
    $outputFile = Join-Path $outputFolder $file.Name
    
    if (Test-Path $outputFile) {
        Write-Host "Saltando $($file.Name), ya existe en la carpeta 4K." -ForegroundColor Yellow
        continue
    }

    Write-Host "Reescalando $($file.Name) a 4K..." -ForegroundColor Cyan
    
    # Comando FFmpeg:
    # -i: entrada
    # -vf "scale=3840:2160:flags=lanczos" : Reescalado a 4K usando Lanczos
    # -c:v libx265 : Códec H.265
    # -crf 20 : Calidad alta
    # -preset medium : Balance velocidad/calidad
    # -c:a copy : Mantiene el audio original
    
    & $ffmpegPath -i "`"$($file.FullName)`"" -vf "scale=3840:2160:flags=lanczos" -c:v libx265 -crf 20 -preset medium -c:a copy "`"$outputFile`""

    if ($LASTEXITCODE -eq 0) {
        Write-Host "¡Éxito! $($file.Name) reescalado." -ForegroundColor Green
        $upscaledCount++
    }
    else {
        Write-Host "Error al reescalar $($file.Name)" -ForegroundColor Red
    }
}

Write-Host "`n¡Proceso de reescalado completado!" -ForegroundColor Cyan
Write-Host "Total de archivos procesados: $upscaledCount" -ForegroundColor Green
pause
