const fs = require('fs');
const file = 'c:\\Users\\user\\Downloads\\protfolio\\src\\components\\BalanceNutritionCaseStudy.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. All text-center md:text-left -> text-left
content = content.replace(/text-center md:text-left/g, 'text-left');
content = content.replace(/text-center md:text-right/g, 'text-left');

// Change any stray text-center class that might affect the cards to text-left
content = content.replace(/text-center gap-12 group/g, 'text-left gap-12 group items-start');
content = content.replace(/items-center text-center gap-12/g, 'items-start text-left gap-12');
content = content.replace(/items-center text-center gap-8/g, 'items-start text-left gap-8');
content = content.replace(/text-center flex flex-col items-center/g, 'text-left flex flex-col items-start');
// generic text-center to left inside sections
content = content.replace(/text-center md:text-left/g, 'text-left');

// 2. Section headings: 
// The user wants ALL section headings (which are h3 tags after a h2)
// to have text-4xl md:text-6xl or similar, matching the image.
content = content.replace(/<h3 className=\"[^\"]*font-bold[^\"]*\">/g, '<h3 className=\"text-4xl md:text-6xl font-bold tracking-tight leading-tight\">');

// 3. Card headings and subheadings: Medium and consistent
// Card headings are usually `<h4 className=\"... text-white\">`
content = content.replace(/<h4 className=\"[^\"]*\">/g, '<h4 className=\"text-xl md:text-2xl font-bold text-white tracking-tight relative z-10\">');

// 4. Card Paragraphs (subheadings inside cards). They are typically p tags with smaller fonts.
content = content.replace(/<p className=\"text-(sm|xs|\[13px\]|\[14px\]) text-white\/[0-9]+[^\"]*\">/g, '<p className=\"text-[15px] md:text-base text-white/50 leading-relaxed font-light relative z-10\">');

fs.writeFileSync(file, content);
console.log('Update applied');
