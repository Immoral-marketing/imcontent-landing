#!/bin/bash

# Script to add style={{ position: 'relative' }} to all motion elements with whileInView

files=(
  "src/app/components/AIBanner.tsx"
  "src/app/components/Contact.tsx"
  "src/app/components/ContactFormHome.tsx"
  "src/app/components/FinalCTA.tsx"
  "src/app/components/ForWho.tsx"
  "src/app/components/Hero.tsx"
  "src/app/components/HowWeDoIt.tsx"
  "src/app/components/Services.tsx"
  "src/app/pages/AboutUsPage.tsx"
  "src/app/pages/ContactPage.tsx"
  "src/app/pages/ServicesPage.tsx"
)

for file in "${files[@]}"; do
  echo "Processing $file..."
done
