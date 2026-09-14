$outDir = "public\collage"
if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir
}

for ($i = 1; $i -le 25; $i++) {
    $url = "https://picsum.photos/seed/pic$i/400/400"
    $outFile = "$outDir\image$i.jpg"
    Invoke-WebRequest -Uri $url -OutFile $outFile
    Write-Host "Downloaded $outFile"
}
