const loadScript = (src, callback) =>
    {
        let sc = document.createElement("script");
        sc.src = src;
        sc.onload = callback("shruti", fn);
        document.head.append(sc)
    } 