
epcc.footer_text = "&copy; Mahmood Amintoosi, Ferdowsi University of Mashahd, CC-BY";
cpptheme = new Theme(
    (str => str.substring(0, str.lastIndexOf("/")))(document.currentScript.src),
    '$BASEURL/style.css',
    {
	thumb: function () {
	    return '.thumb[\n.thumbtxt[\n' + this +'\n]\n]';
	}
    });
