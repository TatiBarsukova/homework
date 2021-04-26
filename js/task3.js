
const style = [
    { id: 1, fontFamily: 'font-family: Arial, sans-serif;', },
    { id: 2, fontSize: 'font-size:25px;', },
    { id: 3, color: 'color:#7B68EE;', },
    { id: 4, textAlign: 'text-align:center;', },
    { id: 5, fontStyle: 'font-style:normal;', },
    { id: 6, textDecoration: 'text-decoration: #8A2BE2 underline dotted;', },
]

function textStyle() {
    let fontFam = style.find(item => item.id == 1);
    let fontSiz = style.find(item => item.id == 2);
    let color = style.find(item => item.id == 3);
    let textAlign = style.find(item => item.id == 4);
    let fontSty = style.find(item => item.id == 5);
    let textDec = style.find(item => item.id == 6);

    document.write('<p style="' + textDec.textDecoration + ' ' + fontFam.fontFamily + ' ' + fontSty.fontStyle + ' ' + color.color + ' ' + textAlign.textAlign + ' ' + fontSiz.fontSize + ' ">' + 'Жизнь слишком коротка, чтобы тратить её на диеты, жадных мужчин и плохое настроение. (© Фаина Раневская)  </p>');

}
textStyle();