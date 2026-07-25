function analyze(){

let age=document.getElementById("age").value;

let asset=document.getElementById("asset").value;

let result=

"家庭财富AI分析结果：\n\n"+

"年龄："+age+"岁\n"+

"金融资产："+asset+"美元\n\n"+

"建议：\n"+

"1. 建立资产配置模型\n"+

"2. 保留安全现金流\n"+

"3. 优化长期投资组合\n"+

"4. 关注税务效率";

document.getElementById("output").innerText=result;

}
