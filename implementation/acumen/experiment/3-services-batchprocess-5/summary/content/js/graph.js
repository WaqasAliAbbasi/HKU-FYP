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
        data: {"result": {"minY": 5841.0, "minX": 0.0, "maxY": 120008.0, "series": [{"data": [[0.0, 5841.0], [0.1, 5841.0], [0.2, 5841.0], [0.3, 5841.0], [0.4, 5841.0], [0.5, 5841.0], [0.6, 5841.0], [0.7, 6750.0], [0.8, 6750.0], [0.9, 6750.0], [1.0, 6750.0], [1.1, 6750.0], [1.2, 6750.0], [1.3, 6750.0], [1.4, 6758.0], [1.5, 6758.0], [1.6, 6758.0], [1.7, 6758.0], [1.8, 6758.0], [1.9, 6758.0], [2.0, 6758.0], [2.1, 6913.0], [2.2, 6913.0], [2.3, 6913.0], [2.4, 6913.0], [2.5, 6913.0], [2.6, 6913.0], [2.7, 6913.0], [2.8, 7169.0], [2.9, 7169.0], [3.0, 7169.0], [3.1, 7169.0], [3.2, 7169.0], [3.3, 7169.0], [3.4, 7169.0], [3.5, 7271.0], [3.6, 7271.0], [3.7, 7271.0], [3.8, 7271.0], [3.9, 7271.0], [4.0, 7271.0], [4.1, 7271.0], [4.2, 8090.0], [4.3, 8090.0], [4.4, 8090.0], [4.5, 8090.0], [4.6, 8090.0], [4.7, 8090.0], [4.8, 8090.0], [4.9, 8908.0], [5.0, 8908.0], [5.1, 8908.0], [5.2, 8908.0], [5.3, 8908.0], [5.4, 8908.0], [5.5, 8908.0], [5.6, 8916.0], [5.7, 8916.0], [5.8, 8916.0], [5.9, 8916.0], [6.0, 8916.0], [6.1, 8916.0], [6.2, 8916.0], [6.3, 9008.0], [6.4, 9008.0], [6.5, 9008.0], [6.6, 9008.0], [6.7, 9008.0], [6.8, 9008.0], [6.9, 9008.0], [7.0, 9009.0], [7.1, 9009.0], [7.2, 9009.0], [7.3, 9009.0], [7.4, 9009.0], [7.5, 9009.0], [7.6, 9009.0], [7.7, 9423.0], [7.8, 9423.0], [7.9, 9423.0], [8.0, 9423.0], [8.1, 9423.0], [8.2, 9423.0], [8.3, 9423.0], [8.4, 9423.0], [8.5, 9423.0], [8.6, 9423.0], [8.7, 9423.0], [8.8, 9423.0], [8.9, 9423.0], [9.0, 9423.0], [9.1, 9515.0], [9.2, 9515.0], [9.3, 9515.0], [9.4, 9515.0], [9.5, 9515.0], [9.6, 9515.0], [9.7, 9515.0], [9.8, 9618.0], [9.9, 9618.0], [10.0, 9618.0], [10.1, 9618.0], [10.2, 9618.0], [10.3, 9618.0], [10.4, 9618.0], [10.5, 9659.0], [10.6, 9659.0], [10.7, 9659.0], [10.8, 9659.0], [10.9, 9659.0], [11.0, 9659.0], [11.1, 9659.0], [11.2, 9682.0], [11.3, 9682.0], [11.4, 9682.0], [11.5, 9682.0], [11.6, 9682.0], [11.7, 9682.0], [11.8, 9682.0], [11.9, 9692.0], [12.0, 9692.0], [12.1, 9692.0], [12.2, 9692.0], [12.3, 9692.0], [12.4, 9692.0], [12.5, 9692.0], [12.6, 9727.0], [12.7, 9727.0], [12.8, 9727.0], [12.9, 9727.0], [13.0, 9727.0], [13.1, 9727.0], [13.2, 9727.0], [13.3, 9735.0], [13.4, 9735.0], [13.5, 9735.0], [13.6, 9735.0], [13.7, 9735.0], [13.8, 9735.0], [13.9, 9735.0], [14.0, 9742.0], [14.1, 9742.0], [14.2, 9742.0], [14.3, 9742.0], [14.4, 9742.0], [14.5, 9742.0], [14.6, 9742.0], [14.7, 9811.0], [14.8, 9811.0], [14.9, 9811.0], [15.0, 9811.0], [15.1, 9811.0], [15.2, 9811.0], [15.3, 9811.0], [15.4, 9884.0], [15.5, 9884.0], [15.6, 9884.0], [15.7, 9884.0], [15.8, 9884.0], [15.9, 9884.0], [16.0, 9884.0], [16.1, 9884.0], [16.2, 9884.0], [16.3, 9884.0], [16.4, 9884.0], [16.5, 9884.0], [16.6, 9884.0], [16.7, 9884.0], [16.8, 10251.0], [16.9, 10251.0], [17.0, 10251.0], [17.1, 10251.0], [17.2, 10251.0], [17.3, 10251.0], [17.4, 10251.0], [17.5, 10748.0], [17.6, 10748.0], [17.7, 10748.0], [17.8, 10748.0], [17.9, 10748.0], [18.0, 10748.0], [18.1, 10748.0], [18.2, 10749.0], [18.3, 10749.0], [18.4, 10749.0], [18.5, 10749.0], [18.6, 10749.0], [18.7, 10749.0], [18.8, 10749.0], [18.9, 11421.0], [19.0, 11421.0], [19.1, 11421.0], [19.2, 11421.0], [19.3, 11421.0], [19.4, 11421.0], [19.5, 11421.0], [19.6, 11670.0], [19.7, 11670.0], [19.8, 11670.0], [19.9, 11670.0], [20.0, 11670.0], [20.1, 11670.0], [20.2, 11670.0], [20.3, 11670.0], [20.4, 11670.0], [20.5, 11670.0], [20.6, 11670.0], [20.7, 11670.0], [20.8, 11670.0], [20.9, 11670.0], [21.0, 11761.0], [21.1, 11761.0], [21.2, 11761.0], [21.3, 11761.0], [21.4, 11761.0], [21.5, 11761.0], [21.6, 11761.0], [21.7, 11761.0], [21.8, 11761.0], [21.9, 11761.0], [22.0, 11761.0], [22.1, 11761.0], [22.2, 11761.0], [22.3, 11761.0], [22.4, 12094.0], [22.5, 12094.0], [22.6, 12094.0], [22.7, 12094.0], [22.8, 12094.0], [22.9, 12094.0], [23.0, 12094.0], [23.1, 12180.0], [23.2, 12180.0], [23.3, 12180.0], [23.4, 12180.0], [23.5, 12180.0], [23.6, 12180.0], [23.7, 12180.0], [23.8, 12183.0], [23.9, 12183.0], [24.0, 12183.0], [24.1, 12183.0], [24.2, 12183.0], [24.3, 12183.0], [24.4, 12183.0], [24.5, 12184.0], [24.6, 12184.0], [24.7, 12184.0], [24.8, 12184.0], [24.9, 12184.0], [25.0, 12184.0], [25.1, 12184.0], [25.2, 12185.0], [25.3, 12185.0], [25.4, 12185.0], [25.5, 12185.0], [25.6, 12185.0], [25.7, 12185.0], [25.8, 12185.0], [25.9, 12185.0], [26.0, 12185.0], [26.1, 12185.0], [26.2, 12185.0], [26.3, 12185.0], [26.4, 12185.0], [26.5, 12185.0], [26.6, 12186.0], [26.7, 12186.0], [26.8, 12186.0], [26.9, 12186.0], [27.0, 12186.0], [27.1, 12186.0], [27.2, 12186.0], [27.3, 12186.0], [27.4, 12186.0], [27.5, 12186.0], [27.6, 12186.0], [27.7, 12186.0], [27.8, 12186.0], [27.9, 12186.0], [28.0, 12186.0], [28.1, 12186.0], [28.2, 12186.0], [28.3, 12186.0], [28.4, 12186.0], [28.5, 12186.0], [28.6, 12186.0], [28.7, 12389.0], [28.8, 12389.0], [28.9, 12389.0], [29.0, 12389.0], [29.1, 12389.0], [29.2, 12389.0], [29.3, 12389.0], [29.4, 12390.0], [29.5, 12390.0], [29.6, 12390.0], [29.7, 12390.0], [29.8, 12390.0], [29.9, 12390.0], [30.0, 12390.0], [30.1, 12391.0], [30.2, 12391.0], [30.3, 12391.0], [30.4, 12391.0], [30.5, 12391.0], [30.6, 12391.0], [30.7, 12391.0], [30.8, 12392.0], [30.9, 12392.0], [31.0, 12392.0], [31.1, 12392.0], [31.2, 12392.0], [31.3, 12392.0], [31.4, 12392.0], [31.5, 12440.0], [31.6, 12440.0], [31.7, 12440.0], [31.8, 12440.0], [31.9, 12440.0], [32.0, 12440.0], [32.1, 12440.0], [32.2, 12440.0], [32.3, 12440.0], [32.4, 12440.0], [32.5, 12440.0], [32.6, 12440.0], [32.7, 12440.0], [32.8, 12440.0], [32.9, 12492.0], [33.0, 12492.0], [33.1, 12492.0], [33.2, 12492.0], [33.3, 12492.0], [33.4, 12492.0], [33.5, 12492.0], [33.6, 12494.0], [33.7, 12494.0], [33.8, 12494.0], [33.9, 12494.0], [34.0, 12494.0], [34.1, 12494.0], [34.2, 12494.0], [34.3, 12494.0], [34.4, 12494.0], [34.5, 12494.0], [34.6, 12494.0], [34.7, 12494.0], [34.8, 12494.0], [34.9, 12494.0], [35.0, 12494.0], [35.1, 12494.0], [35.2, 12494.0], [35.3, 12494.0], [35.4, 12494.0], [35.5, 12494.0], [35.6, 12494.0], [35.7, 12495.0], [35.8, 12495.0], [35.9, 12495.0], [36.0, 12495.0], [36.1, 12495.0], [36.2, 12495.0], [36.3, 12495.0], [36.4, 12495.0], [36.5, 12495.0], [36.6, 12495.0], [36.7, 12495.0], [36.8, 12495.0], [36.9, 12495.0], [37.0, 12495.0], [37.1, 12495.0], [37.2, 12495.0], [37.3, 12495.0], [37.4, 12495.0], [37.5, 12495.0], [37.6, 12495.0], [37.7, 12495.0], [37.8, 12495.0], [37.9, 12495.0], [38.0, 12495.0], [38.1, 12495.0], [38.2, 12495.0], [38.3, 12495.0], [38.4, 12495.0], [38.5, 12589.0], [38.6, 12589.0], [38.7, 12589.0], [38.8, 12589.0], [38.9, 12589.0], [39.0, 12589.0], [39.1, 12589.0], [39.2, 12589.0], [39.3, 12589.0], [39.4, 12589.0], [39.5, 12589.0], [39.6, 12589.0], [39.7, 12589.0], [39.8, 12589.0], [39.9, 12589.0], [40.0, 12589.0], [40.1, 12589.0], [40.2, 12589.0], [40.3, 12589.0], [40.4, 12589.0], [40.5, 12589.0], [40.6, 12589.0], [40.7, 12589.0], [40.8, 12589.0], [40.9, 12589.0], [41.0, 12589.0], [41.1, 12589.0], [41.2, 12589.0], [41.3, 12594.0], [41.4, 12594.0], [41.5, 12594.0], [41.6, 12594.0], [41.7, 12594.0], [41.8, 12594.0], [41.9, 12594.0], [42.0, 12595.0], [42.1, 12595.0], [42.2, 12595.0], [42.3, 12595.0], [42.4, 12595.0], [42.5, 12595.0], [42.6, 12595.0], [42.7, 12595.0], [42.8, 12595.0], [42.9, 12595.0], [43.0, 12595.0], [43.1, 12595.0], [43.2, 12595.0], [43.3, 12595.0], [43.4, 12595.0], [43.5, 12595.0], [43.6, 12595.0], [43.7, 12595.0], [43.8, 12595.0], [43.9, 12595.0], [44.0, 12595.0], [44.1, 12596.0], [44.2, 12596.0], [44.3, 12596.0], [44.4, 12596.0], [44.5, 12596.0], [44.6, 12596.0], [44.7, 12596.0], [44.8, 12596.0], [44.9, 12596.0], [45.0, 12596.0], [45.1, 12596.0], [45.2, 12596.0], [45.3, 12596.0], [45.4, 12596.0], [45.5, 12596.0], [45.6, 12596.0], [45.7, 12596.0], [45.8, 12596.0], [45.9, 12596.0], [46.0, 12596.0], [46.1, 12596.0], [46.2, 12597.0], [46.3, 12597.0], [46.4, 12597.0], [46.5, 12597.0], [46.6, 12597.0], [46.7, 12597.0], [46.8, 12597.0], [46.9, 12695.0], [47.0, 12695.0], [47.1, 12695.0], [47.2, 12695.0], [47.3, 12695.0], [47.4, 12695.0], [47.5, 12695.0], [47.6, 12696.0], [47.7, 12696.0], [47.8, 12696.0], [47.9, 12696.0], [48.0, 12696.0], [48.1, 12696.0], [48.2, 12696.0], [48.3, 12697.0], [48.4, 12697.0], [48.5, 12697.0], [48.6, 12697.0], [48.7, 12697.0], [48.8, 12697.0], [48.9, 12697.0], [49.0, 12697.0], [49.1, 12697.0], [49.2, 12697.0], [49.3, 12697.0], [49.4, 12697.0], [49.5, 12697.0], [49.6, 12697.0], [49.7, 12698.0], [49.8, 12698.0], [49.9, 12698.0], [50.0, 12698.0], [50.1, 12698.0], [50.2, 12698.0], [50.3, 12698.0], [50.4, 12698.0], [50.5, 12698.0], [50.6, 12698.0], [50.7, 12698.0], [50.8, 12698.0], [50.9, 12698.0], [51.0, 12698.0], [51.1, 12699.0], [51.2, 12699.0], [51.3, 12699.0], [51.4, 12699.0], [51.5, 12699.0], [51.6, 12699.0], [51.7, 12699.0], [51.8, 12855.0], [51.9, 12855.0], [52.0, 12855.0], [52.1, 12855.0], [52.2, 12855.0], [52.3, 12855.0], [52.4, 12855.0], [52.5, 13010.0], [52.6, 13010.0], [52.7, 13010.0], [52.8, 13010.0], [52.9, 13010.0], [53.0, 13010.0], [53.1, 13010.0], [53.2, 13010.0], [53.3, 13010.0], [53.4, 13010.0], [53.5, 13010.0], [53.6, 13010.0], [53.7, 13010.0], [53.8, 13010.0], [53.9, 13022.0], [54.0, 13022.0], [54.1, 13022.0], [54.2, 13022.0], [54.3, 13022.0], [54.4, 13022.0], [54.5, 13022.0], [54.6, 13023.0], [54.7, 13023.0], [54.8, 13023.0], [54.9, 13023.0], [55.0, 13023.0], [55.1, 13023.0], [55.2, 13023.0], [55.3, 13024.0], [55.4, 13024.0], [55.5, 13024.0], [55.6, 13024.0], [55.7, 13024.0], [55.8, 13024.0], [55.9, 13024.0], [56.0, 13024.0], [56.1, 13024.0], [56.2, 13024.0], [56.3, 13024.0], [56.4, 13024.0], [56.5, 13024.0], [56.6, 13024.0], [56.7, 13454.0], [56.8, 13454.0], [56.9, 13454.0], [57.0, 13454.0], [57.1, 13454.0], [57.2, 13454.0], [57.3, 13454.0], [57.4, 13454.0], [57.5, 13454.0], [57.6, 13454.0], [57.7, 13454.0], [57.8, 13454.0], [57.9, 13454.0], [58.0, 13454.0], [58.1, 13457.0], [58.2, 13457.0], [58.3, 13457.0], [58.4, 13457.0], [58.5, 13457.0], [58.6, 13457.0], [58.7, 13457.0], [58.8, 13458.0], [58.9, 13458.0], [59.0, 13458.0], [59.1, 13458.0], [59.2, 13458.0], [59.3, 13458.0], [59.4, 13458.0], [59.5, 13459.0], [59.6, 13459.0], [59.7, 13459.0], [59.8, 13459.0], [59.9, 13459.0], [60.0, 13459.0], [60.1, 13459.0], [60.2, 13610.0], [60.3, 13610.0], [60.4, 13610.0], [60.5, 13610.0], [60.6, 13610.0], [60.7, 13610.0], [60.8, 13610.0], [60.9, 13697.0], [61.0, 13697.0], [61.1, 13697.0], [61.2, 13697.0], [61.3, 13697.0], [61.4, 13697.0], [61.5, 13697.0], [61.6, 13698.0], [61.7, 13698.0], [61.8, 13698.0], [61.9, 13698.0], [62.0, 13698.0], [62.1, 13698.0], [62.2, 13698.0], [62.3, 13698.0], [62.4, 13698.0], [62.5, 13698.0], [62.6, 13698.0], [62.7, 13698.0], [62.8, 13698.0], [62.9, 13698.0], [63.0, 13699.0], [63.1, 13699.0], [63.2, 13699.0], [63.3, 13699.0], [63.4, 13699.0], [63.5, 13699.0], [63.6, 13699.0], [63.7, 13718.0], [63.8, 13718.0], [63.9, 13718.0], [64.0, 13718.0], [64.1, 13718.0], [64.2, 13718.0], [64.3, 13718.0], [64.4, 13720.0], [64.5, 13720.0], [64.6, 13720.0], [64.7, 13720.0], [64.8, 13720.0], [64.9, 13720.0], [65.0, 13720.0], [65.1, 13720.0], [65.2, 13720.0], [65.3, 13720.0], [65.4, 13720.0], [65.5, 13720.0], [65.6, 13720.0], [65.7, 13720.0], [65.8, 13720.0], [65.9, 13720.0], [66.0, 13720.0], [66.1, 13720.0], [66.2, 13720.0], [66.3, 13720.0], [66.4, 13720.0], [66.5, 13930.0], [66.6, 13930.0], [66.7, 13930.0], [66.8, 13930.0], [66.9, 13930.0], [67.0, 13930.0], [67.1, 13930.0], [67.2, 13947.0], [67.3, 13947.0], [67.4, 13947.0], [67.5, 13947.0], [67.6, 13947.0], [67.7, 13947.0], [67.8, 13947.0], [67.9, 13948.0], [68.0, 13948.0], [68.1, 13948.0], [68.2, 13948.0], [68.3, 13948.0], [68.4, 13948.0], [68.5, 13948.0], [68.6, 13948.0], [68.7, 13948.0], [68.8, 13948.0], [68.9, 13948.0], [69.0, 13948.0], [69.1, 13948.0], [69.2, 13948.0], [69.3, 13949.0], [69.4, 13949.0], [69.5, 13949.0], [69.6, 13949.0], [69.7, 13949.0], [69.8, 13949.0], [69.9, 13949.0], [70.0, 13949.0], [70.1, 13949.0], [70.2, 13949.0], [70.3, 13949.0], [70.4, 13949.0], [70.5, 13949.0], [70.6, 13949.0], [70.7, 14017.0], [70.8, 14017.0], [70.9, 14017.0], [71.0, 14017.0], [71.1, 14017.0], [71.2, 14017.0], [71.3, 14017.0], [71.4, 14077.0], [71.5, 14077.0], [71.6, 14077.0], [71.7, 14077.0], [71.8, 14077.0], [71.9, 14077.0], [72.0, 14077.0], [72.1, 14077.0], [72.2, 14077.0], [72.3, 14077.0], [72.4, 14077.0], [72.5, 14077.0], [72.6, 14077.0], [72.7, 14077.0], [72.8, 14216.0], [72.9, 14216.0], [73.0, 14216.0], [73.1, 14216.0], [73.2, 14216.0], [73.3, 14216.0], [73.4, 14216.0], [73.5, 14218.0], [73.6, 14218.0], [73.7, 14218.0], [73.8, 14218.0], [73.9, 14218.0], [74.0, 14218.0], [74.1, 14218.0], [74.2, 14237.0], [74.3, 14237.0], [74.4, 14237.0], [74.5, 14237.0], [74.6, 14237.0], [74.7, 14237.0], [74.8, 14237.0], [74.9, 14238.0], [75.0, 14238.0], [75.1, 14238.0], [75.2, 14238.0], [75.3, 14238.0], [75.4, 14238.0], [75.5, 14238.0], [75.6, 14238.0], [75.7, 14238.0], [75.8, 14238.0], [75.9, 14238.0], [76.0, 14238.0], [76.1, 14238.0], [76.2, 14238.0], [76.3, 14238.0], [76.4, 14238.0], [76.5, 14238.0], [76.6, 14238.0], [76.7, 14238.0], [76.8, 14238.0], [76.9, 14238.0], [77.0, 14441.0], [77.1, 14441.0], [77.2, 14441.0], [77.3, 14441.0], [77.4, 14441.0], [77.5, 14441.0], [77.6, 14441.0], [77.7, 14846.0], [77.8, 14846.0], [77.9, 14846.0], [78.0, 14846.0], [78.1, 14846.0], [78.2, 14846.0], [78.3, 14846.0], [78.4, 14948.0], [78.5, 14948.0], [78.6, 14948.0], [78.7, 14948.0], [78.8, 14948.0], [78.9, 14948.0], [79.0, 14948.0], [79.1, 15358.0], [79.2, 15358.0], [79.3, 15358.0], [79.4, 15358.0], [79.5, 15358.0], [79.6, 15358.0], [79.7, 15358.0], [79.8, 15358.0], [79.9, 15358.0], [80.0, 15358.0], [80.1, 15358.0], [80.2, 15358.0], [80.3, 15358.0], [80.4, 15358.0], [80.5, 15359.0], [80.6, 15359.0], [80.7, 15359.0], [80.8, 15359.0], [80.9, 15359.0], [81.0, 15359.0], [81.1, 15359.0], [81.2, 15359.0], [81.3, 15359.0], [81.4, 15359.0], [81.5, 15359.0], [81.6, 15359.0], [81.7, 15359.0], [81.8, 15359.0], [81.9, 15453.0], [82.0, 15453.0], [82.1, 15453.0], [82.2, 15453.0], [82.3, 15453.0], [82.4, 15453.0], [82.5, 15453.0], [82.6, 15461.0], [82.7, 15461.0], [82.8, 15461.0], [82.9, 15461.0], [83.0, 15461.0], [83.1, 15461.0], [83.2, 15461.0], [83.3, 15560.0], [83.4, 15560.0], [83.5, 15560.0], [83.6, 15560.0], [83.7, 15560.0], [83.8, 15560.0], [83.9, 15560.0], [84.0, 15660.0], [84.1, 15660.0], [84.2, 15660.0], [84.3, 15660.0], [84.4, 15660.0], [84.5, 15660.0], [84.6, 15660.0], [84.7, 15782.0], [84.8, 15782.0], [84.9, 15782.0], [85.0, 15782.0], [85.1, 15782.0], [85.2, 15782.0], [85.3, 15782.0], [85.4, 15783.0], [85.5, 15783.0], [85.6, 15783.0], [85.7, 15783.0], [85.8, 15783.0], [85.9, 15783.0], [86.0, 15783.0], [86.1, 15787.0], [86.2, 15787.0], [86.3, 15787.0], [86.4, 15787.0], [86.5, 15787.0], [86.6, 15787.0], [86.7, 15787.0], [86.8, 15787.0], [86.9, 15787.0], [87.0, 15787.0], [87.1, 15787.0], [87.2, 15787.0], [87.3, 15787.0], [87.4, 15787.0], [87.5, 15874.0], [87.6, 15874.0], [87.7, 15874.0], [87.8, 15874.0], [87.9, 15874.0], [88.0, 15874.0], [88.1, 15874.0], [88.2, 16048.0], [88.3, 16048.0], [88.4, 16048.0], [88.5, 16048.0], [88.6, 16048.0], [88.7, 16048.0], [88.8, 16048.0], [88.9, 16048.0], [89.0, 16048.0], [89.1, 16048.0], [89.2, 16048.0], [89.3, 16048.0], [89.4, 16048.0], [89.5, 16048.0], [89.6, 16051.0], [89.7, 16051.0], [89.8, 16051.0], [89.9, 16051.0], [90.0, 16051.0], [90.1, 16051.0], [90.2, 16051.0], [90.3, 16051.0], [90.4, 16051.0], [90.5, 16051.0], [90.6, 16051.0], [90.7, 16051.0], [90.8, 16051.0], [90.9, 16051.0], [91.0, 16160.0], [91.1, 16160.0], [91.2, 16160.0], [91.3, 16160.0], [91.4, 16160.0], [91.5, 16160.0], [91.6, 16160.0], [91.7, 16161.0], [91.8, 16161.0], [91.9, 16161.0], [92.0, 16161.0], [92.1, 16161.0], [92.2, 16161.0], [92.3, 16161.0], [92.4, 16163.0], [92.5, 16163.0], [92.6, 16163.0], [92.7, 16163.0], [92.8, 16163.0], [92.9, 16163.0], [93.0, 16163.0], [93.1, 16665.0], [93.2, 16665.0], [93.3, 16665.0], [93.4, 16665.0], [93.5, 16665.0], [93.6, 16665.0], [93.7, 16665.0], [93.8, 16687.0], [93.9, 16687.0], [94.0, 16687.0], [94.1, 16687.0], [94.2, 16687.0], [94.3, 16687.0], [94.4, 16687.0], [94.5, 16687.0], [94.6, 16687.0], [94.7, 16687.0], [94.8, 16687.0], [94.9, 16687.0], [95.0, 16687.0], [95.1, 16687.0], [95.2, 16687.0], [95.3, 16687.0], [95.4, 16687.0], [95.5, 16687.0], [95.6, 16687.0], [95.7, 16687.0], [95.8, 16687.0], [95.9, 16688.0], [96.0, 16688.0], [96.1, 16688.0], [96.2, 16688.0], [96.3, 16688.0], [96.4, 16688.0], [96.5, 16688.0], [96.6, 120005.0], [96.7, 120005.0], [96.8, 120005.0], [96.9, 120005.0], [97.0, 120005.0], [97.1, 120005.0], [97.2, 120005.0], [97.3, 120005.0], [97.4, 120005.0], [97.5, 120005.0], [97.6, 120005.0], [97.7, 120005.0], [97.8, 120005.0], [97.9, 120005.0], [98.0, 120006.0], [98.1, 120006.0], [98.2, 120006.0], [98.3, 120006.0], [98.4, 120006.0], [98.5, 120006.0], [98.6, 120006.0], [98.7, 120006.0], [98.8, 120006.0], [98.9, 120006.0], [99.0, 120006.0], [99.1, 120006.0], [99.2, 120006.0], [99.3, 120006.0], [99.4, 120008.0], [99.5, 120008.0], [99.6, 120008.0], [99.7, 120008.0], [99.8, 120008.0], [99.9, 120008.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 5800.0, "maxY": 12.0, "series": [{"data": [[9000.0, 2.0], [8900.0, 2.0], [9600.0, 4.0], [9700.0, 3.0], [9400.0, 2.0], [9500.0, 1.0], [9800.0, 3.0], [10200.0, 1.0], [10700.0, 2.0], [11700.0, 2.0], [11600.0, 2.0], [11400.0, 1.0], [12000.0, 1.0], [12100.0, 8.0], [12400.0, 10.0], [12500.0, 12.0], [12600.0, 7.0], [12300.0, 4.0], [12800.0, 1.0], [13000.0, 6.0], [13600.0, 5.0], [13400.0, 5.0], [13700.0, 4.0], [14000.0, 3.0], [13900.0, 6.0], [14200.0, 6.0], [14400.0, 1.0], [14800.0, 1.0], [15300.0, 4.0], [14900.0, 1.0], [15700.0, 4.0], [15800.0, 1.0], [15600.0, 1.0], [15400.0, 2.0], [15500.0, 1.0], [16000.0, 4.0], [16100.0, 3.0], [16600.0, 5.0], [5800.0, 1.0], [6900.0, 1.0], [6700.0, 2.0], [7100.0, 1.0], [7200.0, 1.0], [120000.0, 5.0], [8000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 120000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 5.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 138.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 138.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 5.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.58913066E12, "maxY": 16.0, "series": [{"data": [[1.58913084E12, 14.710526315789474], [1.58913066E12, 1.5], [1.58913078E12, 16.0], [1.5891309E12, 3.4], [1.58913072E12, 10.125]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5891309E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 9847.5, "minX": 1.0, "maxY": 120005.0, "series": [{"data": [[1.0, 9847.5], [2.0, 46454.16666666667], [4.0, 37820.125], [8.0, 11552.90909090909], [16.0, 13196.12380952381], [10.0, 12595.0], [5.0, 120005.0], [12.0, 12698.5], [14.0, 12697.5], [7.0, 12595.0], [15.0, 12695.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[13.496503496503497, 16504.35664335664]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 16.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.58913066E12, "maxY": 67373.28333333334, "series": [{"data": [[1.58913084E12, 197.6], [1.58913066E12, 20.8], [1.58913078E12, 332.8], [1.5891309E12, 171.41666666666666], [1.58913072E12, 166.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58913084E12, 40001.96666666667], [1.58913066E12, 4211.233333333334], [1.58913078E12, 67373.28333333334], [1.5891309E12, 0.0], [1.58913072E12, 33686.36666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5891309E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 9774.0, "minX": 1.58913066E12, "maxY": 120006.0, "series": [{"data": [[1.58913084E12, 12623.894736842105], [1.58913066E12, 9774.0], [1.58913078E12, 13679.734374999998], [1.5891309E12, 120006.0], [1.58913072E12, 11430.8125]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5891309E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.58913066E12, "maxY": 13679.71875, "series": [{"data": [[1.58913084E12, 12623.868421052632], [1.58913066E12, 9773.5], [1.58913078E12, 13679.71875], [1.5891309E12, 0.0], [1.58913072E12, 11430.8125]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5891309E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.4, "minX": 1.58913066E12, "maxY": 10.0, "series": [{"data": [[1.58913084E12, 2.5789473684210535], [1.58913066E12, 10.0], [1.58913078E12, 1.9687500000000004], [1.5891309E12, 1.4], [1.58913072E12, 1.84375]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5891309E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5841.0, "minX": 1.58913066E12, "maxY": 16688.0, "series": [{"data": [[1.58913084E12, 15560.0], [1.58913066E12, 9884.0], [1.58913078E12, 16688.0], [1.58913072E12, 14077.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58913084E12, 6758.0], [1.58913066E12, 9659.0], [1.58913078E12, 5841.0], [1.58913072E12, 6913.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58913084E12, 14998.5], [1.58913066E12, 9884.0], [1.58913078E12, 16162.0], [1.58913072E12, 13719.099999999999]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58913084E12, 15560.0], [1.58913066E12, 9884.0], [1.58913078E12, 16688.0], [1.58913072E12, 14077.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58913084E12, 15465.949999999999], [1.58913066E12, 9884.0], [1.58913078E12, 16687.0], [1.58913072E12, 14077.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58913084E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 9738.5, "minX": 1.0, "maxY": 120006.0, "series": [{"data": [[1.0, 12094.0], [2.0, 9738.5], [4.0, 16687.0], [5.0, 12698.0], [6.0, 13458.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 120005.0], [4.0, 120006.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 16687.0, "series": [{"data": [[1.0, 12094.0], [2.0, 9738.5], [4.0, 16687.0], [5.0, 12698.0], [6.0, 13458.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 0.0], [4.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.58913066E12, "maxY": 1.0666666666666667, "series": [{"data": [[1.58913084E12, 0.45], [1.58913066E12, 0.1], [1.58913078E12, 1.0666666666666667], [1.58913072E12, 0.7666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58913084E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.58913066E12, "maxY": 1.0666666666666667, "series": [{"data": [[1.58913084E12, 0.6333333333333333], [1.58913066E12, 0.06666666666666667], [1.58913078E12, 1.0666666666666667], [1.58913072E12, 0.5333333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.5891309E12, 0.08333333333333333]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5891309E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.58913066E12, "maxY": 1.0666666666666667, "series": [{"data": [[1.58913084E12, 0.6333333333333333], [1.58913066E12, 0.06666666666666667], [1.58913078E12, 1.0666666666666667], [1.58913072E12, 0.5333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.5891309E12, 0.08333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5891309E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.58913066E12, "maxY": 1.0666666666666667, "series": [{"data": [[1.58913084E12, 0.6333333333333333], [1.58913066E12, 0.06666666666666667], [1.58913078E12, 1.0666666666666667], [1.58913072E12, 0.5333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.5891309E12, 0.08333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5891309E12, "title": "Total Transactions Per Second"}},
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

