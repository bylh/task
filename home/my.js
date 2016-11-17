    var map = L.map('map').setView([39.9, 116.4], 4);
    map.doubleClickZoom.disable(); //禁止双击缩放

    L.tileLayer('http://map.zhtu.net:8080/r3t-basemap/{z}/{x}/{y}/tile.jpg', {
        // subdomains: ["emap1", "emap2", "emap3"]
        foo: 'bar'
    }).addTo(map);
    /*var marker = L.marker([40, 118],
                {
                            draggable: true,        // 使图标可拖拽
                title: 'Text',           // 添加一个标题
                opacity: 0.5}            // 设置透明度
                )
                .addTo(map)
                .bindPopup("<b>中国</b><br>北京市.")
                .openPopup();*/

    /*var zoomControl = L.control.zoom({

                       position: 'topleft'

             });

             map.addControl(zoomControl);*/ //默认有创建并且显示在左上角
    var scaleControl = L.control.scale({

        position: 'topright'

    });

    map.addControl(scaleControl);

    var circle = L.circle([39.9, 116.4], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 50000
        }).addTo(map)
        .bindPopup("The center of map.");

    /*var polygon = L.polygon([
        [38, 118],
        [40, 122],
        [39, 119]
    ]).addTo(map)
      .bindPopup("I am a polygon.");*/

    var popup = L.popup();
    var lat = 0,
        lng = 0,
        num = 0;

    function onMapClick(e) {
        /*popup
           .setLatLng(e.latlng)
           .setContent("You clicked the map at " + e.latlng.toString())
           .openOn(map);*/

        marker = L.marker(e.latlng, {

                    draggable: false, // 使图标不可拖拽
                    title: '已标记点：' + (num + 1), // 添加一个标题
                    opacity: 0.5
                } // 设置透明度
            )
            .addTo(map)
            .bindPopup("<b>双击</b><br>当前位置：" + e.latlng.toString() + (num + 1))
            .openPopup();

        if (num != 0) //当num不等于0，说明不是第一个点，则连线
            var polygon = L.polygon([
            [lat, lng],
            [e.latlng.lat, e.latlng.lng]
        ]).addTo(map);
			
        lat = e.latlng.lat;
        lng = e.latlng.lng;
        num++;
			
			  if(num % 2 == 0)
        document.getElementById("txt").value += num + ":" + e.latlng.toString() + '\n'; //每两个添加一个回车符
			
			  else
		    document.getElementById("txt").value += num + ":" + e.latlng.toString() + "     "; //添加空格
			  
    }

    map.on('dblclick', onMapClick);
