/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 6985.0, "minX": 0.0, "maxY": 120008.0, "series": [{"data": [[0.0, 6985.0], [0.1, 6985.0], [0.2, 6985.0], [0.3, 6985.0], [0.4, 6985.0], [0.5, 6985.0], [0.6, 6985.0], [0.7, 6987.0], [0.8, 6987.0], [0.9, 6987.0], [1.0, 6987.0], [1.1, 6987.0], [1.2, 6987.0], [1.3, 7291.0], [1.4, 7291.0], [1.5, 7291.0], [1.6, 7291.0], [1.7, 7291.0], [1.8, 7291.0], [1.9, 7312.0], [2.0, 7312.0], [2.1, 7312.0], [2.2, 7312.0], [2.3, 7312.0], [2.4, 7312.0], [2.5, 7348.0], [2.6, 7348.0], [2.7, 7348.0], [2.8, 7348.0], [2.9, 7348.0], [3.0, 7348.0], [3.1, 7384.0], [3.2, 7384.0], [3.3, 7384.0], [3.4, 7384.0], [3.5, 7384.0], [3.6, 7384.0], [3.7, 7396.0], [3.8, 7396.0], [3.9, 7396.0], [4.0, 7396.0], [4.1, 7396.0], [4.2, 7396.0], [4.3, 7404.0], [4.4, 7404.0], [4.5, 7404.0], [4.6, 7404.0], [4.7, 7404.0], [4.8, 7404.0], [4.9, 7410.0], [5.0, 7410.0], [5.1, 7410.0], [5.2, 7410.0], [5.3, 7410.0], [5.4, 7410.0], [5.5, 7414.0], [5.6, 7414.0], [5.7, 7414.0], [5.8, 7414.0], [5.9, 7414.0], [6.0, 7414.0], [6.1, 7419.0], [6.2, 7419.0], [6.3, 7419.0], [6.4, 7419.0], [6.5, 7419.0], [6.6, 7419.0], [6.7, 7419.0], [6.8, 7496.0], [6.9, 7496.0], [7.0, 7496.0], [7.1, 7496.0], [7.2, 7496.0], [7.3, 7496.0], [7.4, 7513.0], [7.5, 7513.0], [7.6, 7513.0], [7.7, 7513.0], [7.8, 7513.0], [7.9, 7513.0], [8.0, 7579.0], [8.1, 7579.0], [8.2, 7579.0], [8.3, 7579.0], [8.4, 7579.0], [8.5, 7579.0], [8.6, 7606.0], [8.7, 7606.0], [8.8, 7606.0], [8.9, 7606.0], [9.0, 7606.0], [9.1, 7606.0], [9.2, 7613.0], [9.3, 7613.0], [9.4, 7613.0], [9.5, 7613.0], [9.6, 7613.0], [9.7, 7613.0], [9.8, 7614.0], [9.9, 7614.0], [10.0, 7614.0], [10.1, 7614.0], [10.2, 7614.0], [10.3, 7614.0], [10.4, 7674.0], [10.5, 7674.0], [10.6, 7674.0], [10.7, 7674.0], [10.8, 7674.0], [10.9, 7674.0], [11.0, 7676.0], [11.1, 7676.0], [11.2, 7676.0], [11.3, 7676.0], [11.4, 7676.0], [11.5, 7676.0], [11.6, 8204.0], [11.7, 8204.0], [11.8, 8204.0], [11.9, 8204.0], [12.0, 8204.0], [12.1, 8204.0], [12.2, 8204.0], [12.3, 8204.0], [12.4, 8204.0], [12.5, 8204.0], [12.6, 8204.0], [12.7, 8204.0], [12.8, 8204.0], [12.9, 9053.0], [13.0, 9053.0], [13.1, 9053.0], [13.2, 9053.0], [13.3, 9053.0], [13.4, 9053.0], [13.5, 9053.0], [13.6, 9053.0], [13.7, 9053.0], [13.8, 9053.0], [13.9, 9053.0], [14.0, 9053.0], [14.1, 9760.0], [14.2, 9760.0], [14.3, 9760.0], [14.4, 9760.0], [14.5, 9760.0], [14.6, 9760.0], [14.7, 9760.0], [14.8, 9760.0], [14.9, 9760.0], [15.0, 9760.0], [15.1, 9760.0], [15.2, 9760.0], [15.3, 9930.0], [15.4, 9930.0], [15.5, 9930.0], [15.6, 9930.0], [15.7, 9930.0], [15.8, 9930.0], [15.9, 9930.0], [16.0, 9930.0], [16.1, 9930.0], [16.2, 9930.0], [16.3, 9930.0], [16.4, 9930.0], [16.5, 11758.0], [16.6, 11758.0], [16.7, 11758.0], [16.8, 11758.0], [16.9, 11758.0], [17.0, 11758.0], [17.1, 11758.0], [17.2, 11758.0], [17.3, 11758.0], [17.4, 11758.0], [17.5, 11758.0], [17.6, 11758.0], [17.7, 12146.0], [17.8, 12146.0], [17.9, 12146.0], [18.0, 12146.0], [18.1, 12146.0], [18.2, 12146.0], [18.3, 12148.0], [18.4, 12148.0], [18.5, 12148.0], [18.6, 12148.0], [18.7, 12148.0], [18.8, 12148.0], [18.9, 12148.0], [19.0, 12154.0], [19.1, 12154.0], [19.2, 12154.0], [19.3, 12154.0], [19.4, 12154.0], [19.5, 12154.0], [19.6, 12155.0], [19.7, 12155.0], [19.8, 12155.0], [19.9, 12155.0], [20.0, 12155.0], [20.1, 12155.0], [20.2, 12155.0], [20.3, 12155.0], [20.4, 12155.0], [20.5, 12155.0], [20.6, 12155.0], [20.7, 12155.0], [20.8, 12155.0], [20.9, 12155.0], [21.0, 12155.0], [21.1, 12155.0], [21.2, 12155.0], [21.3, 12155.0], [21.4, 12192.0], [21.5, 12192.0], [21.6, 12192.0], [21.7, 12192.0], [21.8, 12192.0], [21.9, 12192.0], [22.0, 12192.0], [22.1, 12192.0], [22.2, 12192.0], [22.3, 12192.0], [22.4, 12192.0], [22.5, 12192.0], [22.6, 12281.0], [22.7, 12281.0], [22.8, 12281.0], [22.9, 12281.0], [23.0, 12281.0], [23.1, 12281.0], [23.2, 12282.0], [23.3, 12282.0], [23.4, 12282.0], [23.5, 12282.0], [23.6, 12282.0], [23.7, 12282.0], [23.8, 12283.0], [23.9, 12283.0], [24.0, 12283.0], [24.1, 12283.0], [24.2, 12283.0], [24.3, 12283.0], [24.4, 12284.0], [24.5, 12284.0], [24.6, 12284.0], [24.7, 12284.0], [24.8, 12284.0], [24.9, 12284.0], [25.0, 12284.0], [25.1, 12284.0], [25.2, 12284.0], [25.3, 12284.0], [25.4, 12284.0], [25.5, 12284.0], [25.6, 12284.0], [25.7, 12437.0], [25.8, 12437.0], [25.9, 12437.0], [26.0, 12437.0], [26.1, 12437.0], [26.2, 12437.0], [26.3, 12438.0], [26.4, 12438.0], [26.5, 12438.0], [26.6, 12438.0], [26.7, 12438.0], [26.8, 12438.0], [26.9, 12438.0], [27.0, 12438.0], [27.1, 12438.0], [27.2, 12438.0], [27.3, 12438.0], [27.4, 12438.0], [27.5, 12438.0], [27.6, 12438.0], [27.7, 12438.0], [27.8, 12438.0], [27.9, 12438.0], [28.0, 12438.0], [28.1, 12438.0], [28.2, 12438.0], [28.3, 12438.0], [28.4, 12438.0], [28.5, 12438.0], [28.6, 12438.0], [28.7, 12498.0], [28.8, 12498.0], [28.9, 12498.0], [29.0, 12498.0], [29.1, 12498.0], [29.2, 12498.0], [29.3, 12499.0], [29.4, 12499.0], [29.5, 12499.0], [29.6, 12499.0], [29.7, 12499.0], [29.8, 12499.0], [29.9, 12910.0], [30.0, 12910.0], [30.1, 12910.0], [30.2, 12910.0], [30.3, 12910.0], [30.4, 12910.0], [30.5, 14030.0], [30.6, 14030.0], [30.7, 14030.0], [30.8, 14030.0], [30.9, 14030.0], [31.0, 14030.0], [31.1, 14031.0], [31.2, 14031.0], [31.3, 14031.0], [31.4, 14031.0], [31.5, 14031.0], [31.6, 14031.0], [31.7, 14031.0], [31.8, 15336.0], [31.9, 15336.0], [32.0, 15336.0], [32.1, 15336.0], [32.2, 15336.0], [32.3, 15336.0], [32.4, 15337.0], [32.5, 15337.0], [32.6, 15337.0], [32.7, 15337.0], [32.8, 15337.0], [32.9, 15337.0], [33.0, 15339.0], [33.1, 15339.0], [33.2, 15339.0], [33.3, 15339.0], [33.4, 15339.0], [33.5, 15339.0], [33.6, 15340.0], [33.7, 15340.0], [33.8, 15340.0], [33.9, 15340.0], [34.0, 15340.0], [34.1, 15340.0], [34.2, 15343.0], [34.3, 15343.0], [34.4, 15343.0], [34.5, 15343.0], [34.6, 15343.0], [34.7, 15343.0], [34.8, 15535.0], [34.9, 15535.0], [35.0, 15535.0], [35.1, 15535.0], [35.2, 15535.0], [35.3, 15535.0], [35.4, 15536.0], [35.5, 15536.0], [35.6, 15536.0], [35.7, 15536.0], [35.8, 15536.0], [35.9, 15536.0], [36.0, 15536.0], [36.1, 15536.0], [36.2, 15536.0], [36.3, 15536.0], [36.4, 15536.0], [36.5, 15536.0], [36.6, 15538.0], [36.7, 15538.0], [36.8, 15538.0], [36.9, 15538.0], [37.0, 15538.0], [37.1, 15538.0], [37.2, 15538.0], [37.3, 15538.0], [37.4, 15538.0], [37.5, 15538.0], [37.6, 15538.0], [37.7, 15538.0], [37.8, 15538.0], [37.9, 16822.0], [38.0, 16822.0], [38.1, 16822.0], [38.2, 16822.0], [38.3, 16822.0], [38.4, 16822.0], [38.5, 16825.0], [38.6, 16825.0], [38.7, 16825.0], [38.8, 16825.0], [38.9, 16825.0], [39.0, 16825.0], [39.1, 16826.0], [39.2, 16826.0], [39.3, 16826.0], [39.4, 16826.0], [39.5, 16826.0], [39.6, 16826.0], [39.7, 16826.0], [39.8, 16826.0], [39.9, 16826.0], [40.0, 16826.0], [40.1, 16826.0], [40.2, 16826.0], [40.3, 16827.0], [40.4, 16827.0], [40.5, 16827.0], [40.6, 16827.0], [40.7, 16827.0], [40.8, 16827.0], [40.9, 18454.0], [41.0, 18454.0], [41.1, 18454.0], [41.2, 18454.0], [41.3, 18454.0], [41.4, 18454.0], [41.5, 18454.0], [41.6, 18454.0], [41.7, 18454.0], [41.8, 18454.0], [41.9, 18454.0], [42.0, 18454.0], [42.1, 18454.0], [42.2, 18454.0], [42.3, 18454.0], [42.4, 18454.0], [42.5, 18454.0], [42.6, 18454.0], [42.7, 18555.0], [42.8, 18555.0], [42.9, 18555.0], [43.0, 18555.0], [43.1, 18555.0], [43.2, 18555.0], [43.3, 18555.0], [43.4, 18555.0], [43.5, 18555.0], [43.6, 18555.0], [43.7, 18555.0], [43.8, 18555.0], [43.9, 18555.0], [44.0, 18563.0], [44.1, 18563.0], [44.2, 18563.0], [44.3, 18563.0], [44.4, 18563.0], [44.5, 18563.0], [44.6, 18571.0], [44.7, 18571.0], [44.8, 18571.0], [44.9, 18571.0], [45.0, 18571.0], [45.1, 18571.0], [45.2, 18575.0], [45.3, 18575.0], [45.4, 18575.0], [45.5, 18575.0], [45.6, 18575.0], [45.7, 18575.0], [45.8, 21465.0], [45.9, 21465.0], [46.0, 21465.0], [46.1, 21465.0], [46.2, 21465.0], [46.3, 21465.0], [46.4, 21666.0], [46.5, 21666.0], [46.6, 21666.0], [46.7, 21666.0], [46.8, 21666.0], [46.9, 21666.0], [47.0, 21666.0], [47.1, 21666.0], [47.2, 21666.0], [47.3, 21666.0], [47.4, 21666.0], [47.5, 21666.0], [47.6, 21668.0], [47.7, 21668.0], [47.8, 21668.0], [47.9, 21668.0], [48.0, 21668.0], [48.1, 21668.0], [48.2, 21672.0], [48.3, 21672.0], [48.4, 21672.0], [48.5, 21672.0], [48.6, 21672.0], [48.7, 21672.0], [48.8, 21701.0], [48.9, 21701.0], [49.0, 21701.0], [49.1, 21701.0], [49.2, 21701.0], [49.3, 21701.0], [49.4, 21702.0], [49.5, 21702.0], [49.6, 21702.0], [49.7, 21702.0], [49.8, 21702.0], [49.9, 21702.0], [50.0, 21702.0], [50.1, 21702.0], [50.2, 21702.0], [50.3, 21702.0], [50.4, 21702.0], [50.5, 21702.0], [50.6, 21702.0], [50.7, 21702.0], [50.8, 21702.0], [50.9, 21702.0], [51.0, 21702.0], [51.1, 21702.0], [51.2, 21702.0], [51.3, 21711.0], [51.4, 21711.0], [51.5, 21711.0], [51.6, 21711.0], [51.7, 21711.0], [51.8, 21711.0], [51.9, 21712.0], [52.0, 21712.0], [52.1, 21712.0], [52.2, 21712.0], [52.3, 21712.0], [52.4, 21712.0], [52.5, 21718.0], [52.6, 21718.0], [52.7, 21718.0], [52.8, 21718.0], [52.9, 21718.0], [53.0, 21718.0], [53.1, 21720.0], [53.2, 21720.0], [53.3, 21720.0], [53.4, 21720.0], [53.5, 21720.0], [53.6, 21720.0], [53.7, 21814.0], [53.8, 21814.0], [53.9, 21814.0], [54.0, 21814.0], [54.1, 21814.0], [54.2, 21814.0], [54.3, 21815.0], [54.4, 21815.0], [54.5, 21815.0], [54.6, 21815.0], [54.7, 21815.0], [54.8, 21815.0], [54.9, 21815.0], [55.0, 21815.0], [55.1, 21815.0], [55.2, 21815.0], [55.3, 21815.0], [55.4, 21815.0], [55.5, 21816.0], [55.6, 21816.0], [55.7, 21816.0], [55.8, 21816.0], [55.9, 21816.0], [56.0, 21816.0], [56.1, 22442.0], [56.2, 22442.0], [56.3, 22442.0], [56.4, 22442.0], [56.5, 22442.0], [56.6, 22442.0], [56.7, 22442.0], [56.8, 23210.0], [56.9, 23210.0], [57.0, 23210.0], [57.1, 23210.0], [57.2, 23210.0], [57.3, 23210.0], [57.4, 23214.0], [57.5, 23214.0], [57.6, 23214.0], [57.7, 23214.0], [57.8, 23214.0], [57.9, 23214.0], [58.0, 23214.0], [58.1, 23214.0], [58.2, 23214.0], [58.3, 23214.0], [58.4, 23214.0], [58.5, 23214.0], [58.6, 23214.0], [58.7, 23214.0], [58.8, 23214.0], [58.9, 23214.0], [59.0, 23214.0], [59.1, 23214.0], [59.2, 23254.0], [59.3, 23254.0], [59.4, 23254.0], [59.5, 23254.0], [59.6, 23254.0], [59.7, 23254.0], [59.8, 23255.0], [59.9, 23255.0], [60.0, 23255.0], [60.1, 23255.0], [60.2, 23255.0], [60.3, 23255.0], [60.4, 23255.0], [60.5, 23255.0], [60.6, 23255.0], [60.7, 23255.0], [60.8, 23255.0], [60.9, 23255.0], [61.0, 23304.0], [61.1, 23304.0], [61.2, 23304.0], [61.3, 23304.0], [61.4, 23304.0], [61.5, 23304.0], [61.6, 23449.0], [61.7, 23449.0], [61.8, 23449.0], [61.9, 23449.0], [62.0, 23449.0], [62.1, 23449.0], [62.2, 24168.0], [62.3, 24168.0], [62.4, 24168.0], [62.5, 24168.0], [62.6, 24168.0], [62.7, 24168.0], [62.8, 24168.0], [62.9, 26052.0], [63.0, 26052.0], [63.1, 26052.0], [63.2, 26052.0], [63.3, 26052.0], [63.4, 26052.0], [63.5, 27862.0], [63.6, 27862.0], [63.7, 27862.0], [63.8, 27862.0], [63.9, 27862.0], [64.0, 27862.0], [64.1, 27862.0], [64.2, 27862.0], [64.3, 27862.0], [64.4, 27862.0], [64.5, 27862.0], [64.6, 27862.0], [64.7, 27863.0], [64.8, 27863.0], [64.9, 27863.0], [65.0, 27863.0], [65.1, 27863.0], [65.2, 27863.0], [65.3, 27866.0], [65.4, 27866.0], [65.5, 27866.0], [65.6, 27866.0], [65.7, 27866.0], [65.8, 27866.0], [65.9, 29187.0], [66.0, 29187.0], [66.1, 29187.0], [66.2, 29187.0], [66.3, 29187.0], [66.4, 29187.0], [66.5, 29287.0], [66.6, 29287.0], [66.7, 29287.0], [66.8, 29287.0], [66.9, 29287.0], [67.0, 29287.0], [67.1, 29527.0], [67.2, 29527.0], [67.3, 29527.0], [67.4, 29527.0], [67.5, 29527.0], [67.6, 29527.0], [67.7, 29528.0], [67.8, 29528.0], [67.9, 29528.0], [68.0, 29528.0], [68.1, 29528.0], [68.2, 29528.0], [68.3, 29529.0], [68.4, 29529.0], [68.5, 29529.0], [68.6, 29529.0], [68.7, 29529.0], [68.8, 29529.0], [68.9, 29529.0], [69.0, 29529.0], [69.1, 29529.0], [69.2, 29529.0], [69.3, 29529.0], [69.4, 29529.0], [69.5, 29529.0], [69.6, 29533.0], [69.7, 29533.0], [69.8, 29533.0], [69.9, 29533.0], [70.0, 29533.0], [70.1, 29533.0], [70.2, 30979.0], [70.3, 30979.0], [70.4, 30979.0], [70.5, 30979.0], [70.6, 30979.0], [70.7, 30979.0], [70.8, 30983.0], [70.9, 30983.0], [71.0, 30983.0], [71.1, 30983.0], [71.2, 30983.0], [71.3, 30983.0], [71.4, 30984.0], [71.5, 30984.0], [71.6, 30984.0], [71.7, 30984.0], [71.8, 30984.0], [71.9, 30984.0], [72.0, 30984.0], [72.1, 30984.0], [72.2, 30984.0], [72.3, 30984.0], [72.4, 30984.0], [72.5, 30984.0], [72.6, 30985.0], [72.7, 30985.0], [72.8, 30985.0], [72.9, 30985.0], [73.0, 30985.0], [73.1, 30985.0], [73.2, 38782.0], [73.3, 38782.0], [73.4, 38782.0], [73.5, 38782.0], [73.6, 38782.0], [73.7, 38782.0], [73.8, 38783.0], [73.9, 38783.0], [74.0, 38783.0], [74.1, 38783.0], [74.2, 38783.0], [74.3, 38783.0], [74.4, 38784.0], [74.5, 38784.0], [74.6, 38784.0], [74.7, 38784.0], [74.8, 38784.0], [74.9, 38784.0], [75.0, 38786.0], [75.1, 38786.0], [75.2, 38786.0], [75.3, 38786.0], [75.4, 38786.0], [75.5, 38786.0], [75.6, 38786.0], [75.7, 38796.0], [75.8, 38796.0], [75.9, 38796.0], [76.0, 38796.0], [76.1, 38796.0], [76.2, 38796.0], [76.3, 41021.0], [76.4, 41021.0], [76.5, 41021.0], [76.6, 41021.0], [76.7, 41021.0], [76.8, 41021.0], [76.9, 41021.0], [77.0, 41021.0], [77.1, 41021.0], [77.2, 41021.0], [77.3, 41021.0], [77.4, 41021.0], [77.5, 41023.0], [77.6, 41023.0], [77.7, 41023.0], [77.8, 41023.0], [77.9, 41023.0], [78.0, 41023.0], [78.1, 41023.0], [78.2, 41023.0], [78.3, 41023.0], [78.4, 41023.0], [78.5, 41023.0], [78.6, 41023.0], [78.7, 41027.0], [78.8, 41027.0], [78.9, 41027.0], [79.0, 41027.0], [79.1, 41027.0], [79.2, 41027.0], [79.3, 41775.0], [79.4, 41775.0], [79.5, 41775.0], [79.6, 41775.0], [79.7, 41775.0], [79.8, 41775.0], [79.9, 41780.0], [80.0, 41780.0], [80.1, 41780.0], [80.2, 41780.0], [80.3, 41780.0], [80.4, 41780.0], [80.5, 41780.0], [80.6, 41780.0], [80.7, 41780.0], [80.8, 41780.0], [80.9, 41780.0], [81.0, 41780.0], [81.1, 42470.0], [81.2, 42470.0], [81.3, 42470.0], [81.4, 42470.0], [81.5, 42470.0], [81.6, 42470.0], [81.7, 42470.0], [81.8, 42471.0], [81.9, 42471.0], [82.0, 42471.0], [82.1, 42471.0], [82.2, 42471.0], [82.3, 42471.0], [82.4, 42473.0], [82.5, 42473.0], [82.6, 42473.0], [82.7, 42473.0], [82.8, 42473.0], [82.9, 42473.0], [83.0, 42476.0], [83.1, 42476.0], [83.2, 42476.0], [83.3, 42476.0], [83.4, 42476.0], [83.5, 42476.0], [83.6, 42477.0], [83.7, 42477.0], [83.8, 42477.0], [83.9, 42477.0], [84.0, 42477.0], [84.1, 42477.0], [84.2, 43034.0], [84.3, 43034.0], [84.4, 43034.0], [84.5, 43034.0], [84.6, 43034.0], [84.7, 43034.0], [84.8, 43035.0], [84.9, 43035.0], [85.0, 43035.0], [85.1, 43035.0], [85.2, 43035.0], [85.3, 43035.0], [85.4, 43287.0], [85.5, 43287.0], [85.6, 43287.0], [85.7, 43287.0], [85.8, 43287.0], [85.9, 43287.0], [86.0, 43287.0], [86.1, 43287.0], [86.2, 43287.0], [86.3, 43287.0], [86.4, 43287.0], [86.5, 43287.0], [86.6, 43484.0], [86.7, 43484.0], [86.8, 43484.0], [86.9, 43484.0], [87.0, 43484.0], [87.1, 43484.0], [87.2, 43485.0], [87.3, 43485.0], [87.4, 43485.0], [87.5, 43485.0], [87.6, 43485.0], [87.7, 43485.0], [87.8, 43485.0], [87.9, 43967.0], [88.0, 43967.0], [88.1, 43967.0], [88.2, 43967.0], [88.3, 43967.0], [88.4, 43967.0], [88.5, 43967.0], [88.6, 43967.0], [88.7, 43967.0], [88.8, 43967.0], [88.9, 43967.0], [89.0, 43967.0], [89.1, 44131.0], [89.2, 44131.0], [89.3, 44131.0], [89.4, 44131.0], [89.5, 44131.0], [89.6, 44131.0], [89.7, 44133.0], [89.8, 44133.0], [89.9, 44133.0], [90.0, 44133.0], [90.1, 44133.0], [90.2, 44133.0], [90.3, 45010.0], [90.4, 45010.0], [90.5, 45010.0], [90.6, 45010.0], [90.7, 45010.0], [90.8, 45010.0], [90.9, 45013.0], [91.0, 45013.0], [91.1, 45013.0], [91.2, 45013.0], [91.3, 45013.0], [91.4, 45013.0], [91.5, 45013.0], [91.6, 45013.0], [91.7, 45013.0], [91.8, 45013.0], [91.9, 45013.0], [92.0, 45013.0], [92.1, 45716.0], [92.2, 45716.0], [92.3, 45716.0], [92.4, 45716.0], [92.5, 45716.0], [92.6, 45716.0], [92.7, 45717.0], [92.8, 45717.0], [92.9, 45717.0], [93.0, 45717.0], [93.1, 45717.0], [93.2, 45717.0], [93.3, 45718.0], [93.4, 45718.0], [93.5, 45718.0], [93.6, 45718.0], [93.7, 45718.0], [93.8, 45718.0], [93.9, 45718.0], [94.0, 45767.0], [94.1, 45767.0], [94.2, 45767.0], [94.3, 45767.0], [94.4, 45767.0], [94.5, 45767.0], [94.6, 45767.0], [94.7, 45767.0], [94.8, 45767.0], [94.9, 45767.0], [95.0, 45767.0], [95.1, 45767.0], [95.2, 45768.0], [95.3, 45768.0], [95.4, 45768.0], [95.5, 45768.0], [95.6, 45768.0], [95.7, 45768.0], [95.8, 49514.0], [95.9, 49514.0], [96.0, 49514.0], [96.1, 49514.0], [96.2, 49514.0], [96.3, 49514.0], [96.4, 49514.0], [96.5, 49514.0], [96.6, 49514.0], [96.7, 49514.0], [96.8, 49514.0], [96.9, 49514.0], [97.0, 49518.0], [97.1, 49518.0], [97.2, 49518.0], [97.3, 49518.0], [97.4, 49518.0], [97.5, 49518.0], [97.6, 50503.0], [97.7, 50503.0], [97.8, 50503.0], [97.9, 50503.0], [98.0, 50503.0], [98.1, 50503.0], [98.2, 50885.0], [98.3, 50885.0], [98.4, 50885.0], [98.5, 50885.0], [98.6, 50885.0], [98.7, 50885.0], [98.8, 50892.0], [98.9, 50892.0], [99.0, 50892.0], [99.1, 50892.0], [99.2, 50892.0], [99.3, 50892.0], [99.4, 120008.0], [99.5, 120008.0], [99.6, 120008.0], [99.7, 120008.0], [99.8, 120008.0], [99.9, 120008.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 6900.0, "maxY": 8.0, "series": [{"data": [[6900.0, 2.0], [7300.0, 4.0], [7200.0, 1.0], [7400.0, 5.0], [7500.0, 2.0], [7600.0, 5.0], [8200.0, 2.0], [9000.0, 2.0], [9700.0, 2.0], [9900.0, 2.0], [11700.0, 2.0], [12100.0, 8.0], [12200.0, 5.0], [12400.0, 7.0], [12900.0, 1.0], [14000.0, 2.0], [15300.0, 5.0], [15500.0, 5.0], [16800.0, 5.0], [18400.0, 3.0], [18500.0, 5.0], [21400.0, 1.0], [22400.0, 1.0], [21700.0, 8.0], [21600.0, 4.0], [21800.0, 4.0], [23200.0, 7.0], [23300.0, 1.0], [23400.0, 1.0], [24100.0, 1.0], [26000.0, 1.0], [27800.0, 4.0], [29100.0, 1.0], [29200.0, 1.0], [29500.0, 5.0], [30900.0, 5.0], [38700.0, 5.0], [41000.0, 5.0], [42400.0, 5.0], [43000.0, 2.0], [41700.0, 3.0], [43400.0, 2.0], [43900.0, 2.0], [45000.0, 3.0], [43200.0, 2.0], [44100.0, 2.0], [45700.0, 6.0], [49500.0, 3.0], [50500.0, 1.0], [50800.0, 2.0], [120000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 120000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 163.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 163.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.58917104E12, "maxY": 38.06756756756757, "series": [{"data": [[1.58917116E12, 33.93939393939394], [1.58917104E12, 1.0], [1.58917122E12, 38.06756756756757], [1.5891711E12, 4.652173913043479]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917122E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 7301.5, "minX": 1.0, "maxY": 120008.0, "series": [{"data": [[2.0, 7424.6], [32.0, 17886.666666666668], [34.0, 42476.5], [36.0, 41021.0], [39.0, 41024.333333333336], [44.0, 38786.2], [49.0, 30983.0], [3.0, 44133.0], [51.0, 29531.0], [54.0, 29528.0], [59.0, 28148.0], [4.0, 8422.6], [64.0, 22676.1], [5.0, 45358.25], [8.0, 10318.666666666666], [10.0, 45422.4], [13.0, 45524.0], [14.0, 120008.0], [1.0, 7301.5], [16.0, 11600.947368421053], [19.0, 44322.0], [24.0, 45017.0], [26.0, 43484.0], [27.0, 43485.0], [28.0, 49514.0], [29.0, 49516.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[31.493902439024396, 24625.298780487807]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 64.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 5.2, "minX": 1.58917104E12, "maxY": 76847.58333333333, "series": [{"data": [[1.58917116E12, 343.2], [1.58917104E12, 5.2], [1.58917122E12, 413.8833333333333], [1.5891711E12, 119.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58917116E12, 69477.35], [1.58917104E12, 1052.7833333333333], [1.58917122E12, 76847.58333333333], [1.5891711E12, 24211.916666666668]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917122E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 7312.0, "minX": 1.58917104E12, "maxY": 37606.22972972972, "series": [{"data": [[1.58917116E12, 15789.318181818184], [1.58917104E12, 7312.0], [1.58917122E12, 37606.22972972972], [1.5891711E12, 8968.739130434784]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58917122E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 7309.0, "minX": 1.58917104E12, "maxY": 35984.47297297297, "series": [{"data": [[1.58917116E12, 15789.16666666667], [1.58917104E12, 7309.0], [1.58917122E12, 35984.47297297297], [1.5891711E12, 8968.695652173912]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58917122E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 1.8260869565217392, "minX": 1.58917104E12, "maxY": 36.0, "series": [{"data": [[1.58917116E12, 3.484848484848485], [1.58917104E12, 36.0], [1.58917122E12, 4.000000000000001], [1.5891711E12, 1.8260869565217392]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58917122E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 6985.0, "minX": 1.58917104E12, "maxY": 50892.0, "series": [{"data": [[1.58917116E12, 26052.0], [1.58917104E12, 7312.0], [1.58917122E12, 50892.0], [1.5891711E12, 12910.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58917116E12, 6985.0], [1.58917104E12, 7312.0], [1.58917122E12, 21666.0], [1.5891711E12, 7291.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58917116E12, 23214.0], [1.58917104E12, 7312.0], [1.58917122E12, 45767.6], [1.5891711E12, 12498.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58917116E12, 26052.0], [1.58917104E12, 7312.0], [1.58917122E12, 50892.0], [1.5891711E12, 12910.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58917116E12, 23255.0], [1.58917104E12, 7312.0], [1.58917122E12, 49813.5], [1.5891711E12, 12827.8]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917122E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 7404.0, "minX": 1.0, "maxY": 120008.0, "series": [{"data": [[1.0, 7404.0], [2.0, 9717.0], [8.0, 43034.5], [5.0, 23255.0], [10.0, 12218.0], [3.0, 14192.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 120008.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 43034.5, "series": [{"data": [[1.0, 7404.0], [2.0, 9716.5], [8.0, 43034.5], [5.0, 23255.0], [10.0, 12218.0], [3.0, 14192.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.58917104E12, "maxY": 2.033333333333333, "series": [{"data": [[1.58917116E12, 2.033333333333333], [1.58917104E12, 0.03333333333333333], [1.58917122E12, 0.16666666666666666], [1.5891711E12, 0.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917122E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.58917104E12, "maxY": 1.2166666666666666, "series": [{"data": [[1.58917116E12, 1.1], [1.58917104E12, 0.016666666666666666], [1.58917122E12, 1.2166666666666666], [1.5891711E12, 0.38333333333333336]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.58917122E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917122E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.58917104E12, "maxY": 1.2166666666666666, "series": [{"data": [[1.58917116E12, 1.1], [1.58917104E12, 0.016666666666666666], [1.58917122E12, 1.2166666666666666], [1.5891711E12, 0.38333333333333336]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.58917122E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58917122E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.58917104E12, "maxY": 1.2166666666666666, "series": [{"data": [[1.58917116E12, 1.1], [1.58917104E12, 0.016666666666666666], [1.58917122E12, 1.2166666666666666], [1.5891711E12, 0.38333333333333336]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.58917122E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58917122E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

