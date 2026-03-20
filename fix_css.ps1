
$path = "d:\PROYECTO MAZINGER Z\index.css"
$content = [System.IO.File]::ReadAllText($path)

# Remove all control characters except tab, LF, and CR
$clean = [System.Text.RegularExpressions.Regex]::Replace($content, "[\x00-\x08\x0B\x0C\x0E-\x1F]", "")

# Also specifically find and fix any lone CRs that aren't followed by LF
$clean = $clean -replace "\r(?!\n)", "`r`n"

[System.IO.File]::WriteAllText($path, $clean, [System.Text.Encoding]::UTF8)
Write-Output "File cleaned and normalized."
