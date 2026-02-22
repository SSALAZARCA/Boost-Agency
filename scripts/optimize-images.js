/**
 * Script para optimizar y convertir imágenes del slider a WebP
 * Uso: node scripts/optimize-images.js
 */
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const SLIDER_DIR = path.join(__dirname, '../public/slider');
const QUALITY = 80; // 80% de calidad WebP - excelente balance tamaño/calidad
const MAX_WIDTH = 1920; // Máximo ancho para pantallas Full HD

async function optimizeImages() {
    const files = fs.readdirSync(SLIDER_DIR).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

    if (files.length === 0) {
        console.log('No se encontraron imágenes para optimizar.');
        return;
    }

    console.log(`\n🖼️  Optimizando ${files.length} imagen(es)...\n`);

    for (const file of files) {
        const inputPath = path.join(SLIDER_DIR, file);
        const baseName = path.parse(file).name;
        const outputPath = path.join(SLIDER_DIR, `${baseName}.webp`);

        const originalSize = (fs.statSync(inputPath).size / 1024).toFixed(0);

        await sharp(inputPath)
            .resize({ width: MAX_WIDTH, withoutEnlargement: true })
            .webp({ quality: QUALITY })
            .toFile(outputPath);

        const newSize = (fs.statSync(outputPath).size / 1024).toFixed(0);
        const savings = (((originalSize - newSize) / originalSize) * 100).toFixed(0);

        console.log(`  ✅ ${file} → ${baseName}.webp`);
        console.log(`     ${originalSize} KB → ${newSize} KB (${savings}% más ligera)\n`);
    }

    console.log('🚀 ¡Optimización completada! Las imágenes .webp están listas en public/slider/');
}

optimizeImages().catch(console.error);
