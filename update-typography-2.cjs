const fs = require('fs');
const file = 'c:\\Users\\user\\Downloads\\protfolio\\src\\components\\BalanceNutritionCaseStudy.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Section heading: text-4xl (36px) -> text-[31px]
content = content.replace(/text-4xl md:text-6xl/g, 'text-[31px] md:text-6xl');

// 2. Section subheading (often text-xl changing to text-base on mobile, md:text-xl)
// To do this carefully without breaking md: classes, we replace `text-xl ` with `text-base md:text-xl ` ONLY for p tags that are subheadings.
// Subheadings are usually: `<p className="text-xl text-white/60...` or `<p className="text-xl text-white/50...` or `<p className="text-lg md:text-2xl...`
content = content.replace(/<p className=\"text-xl ([^\"]*)\">/g, '<p className=\"text-base md:text-xl $1\">');

// 3. Card headings: text-[22px] md:text-3xl -> text-lg md:text-3xl
content = content.replace(/text-\[22px\] md:text-3xl/g, 'text-lg md:text-3xl');

// 4. Card subheadings: text-base md:text-lg -> text-[14px] md:text-lg
content = content.replace(/text-base md:text-lg/g, 'text-[14px] md:text-lg');

fs.writeFileSync(file, content);
console.log('Update applied');
