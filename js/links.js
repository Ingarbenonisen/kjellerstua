
    var sites = [
        'kort1.html',
        'kort2.html',
        'kort3.html',
        'kort4.html',
        "kort5.html",
        "kort6.html",
        "kort7.html",
        "kort8.html",
        "kort9.html",
        "kort10.html",
        "kort11.html",
        "kort12.html",
        "kort13.html",
        "kort14.html",
        "kort15.html",
        "kort16.html",
        "kort17.html",
        "kort18.html",
    ];

    function randomSite() {
        var i = parseInt(Math.random() * sites.length);
        location.href = sites[i];
    }
