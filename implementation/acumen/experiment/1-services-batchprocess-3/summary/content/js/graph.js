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
        data: {"result": {"minY": 7564.0, "minX": 0.0, "maxY": 38898.0, "series": [{"data": [[0.0, 7564.0], [0.1, 7564.0], [0.2, 7564.0], [0.3, 7564.0], [0.4, 7564.0], [0.5, 7564.0], [0.6, 7564.0], [0.7, 7564.0], [0.8, 7564.0], [0.9, 7564.0], [1.0, 7564.0], [1.1, 7564.0], [1.2, 7564.0], [1.3, 7564.0], [1.4, 7564.0], [1.5, 7564.0], [1.6, 7564.0], [1.7, 7564.0], [1.8, 7564.0], [1.9, 7564.0], [2.0, 7564.0], [2.1, 7564.0], [2.2, 7564.0], [2.3, 7564.0], [2.4, 8297.0], [2.5, 8297.0], [2.6, 8297.0], [2.7, 8297.0], [2.8, 8297.0], [2.9, 8297.0], [3.0, 8297.0], [3.1, 8297.0], [3.2, 8297.0], [3.3, 8297.0], [3.4, 8297.0], [3.5, 8297.0], [3.6, 8916.0], [3.7, 8916.0], [3.8, 8916.0], [3.9, 8916.0], [4.0, 8916.0], [4.1, 8916.0], [4.2, 8916.0], [4.3, 8916.0], [4.4, 8916.0], [4.5, 8916.0], [4.6, 8916.0], [4.7, 8916.0], [4.8, 8916.0], [4.9, 8916.0], [5.0, 8916.0], [5.1, 8916.0], [5.2, 8916.0], [5.3, 8916.0], [5.4, 8916.0], [5.5, 8916.0], [5.6, 8916.0], [5.7, 8916.0], [5.8, 8916.0], [5.9, 8916.0], [6.0, 8917.0], [6.1, 8917.0], [6.2, 8917.0], [6.3, 8917.0], [6.4, 8917.0], [6.5, 8917.0], [6.6, 8917.0], [6.7, 8917.0], [6.8, 8917.0], [6.9, 8917.0], [7.0, 8917.0], [7.1, 8917.0], [7.2, 9434.0], [7.3, 9434.0], [7.4, 9434.0], [7.5, 9434.0], [7.6, 9434.0], [7.7, 9434.0], [7.8, 9434.0], [7.9, 9434.0], [8.0, 9434.0], [8.1, 9434.0], [8.2, 9434.0], [8.3, 9434.0], [8.4, 9623.0], [8.5, 9623.0], [8.6, 9623.0], [8.7, 9623.0], [8.8, 9623.0], [8.9, 9623.0], [9.0, 9623.0], [9.1, 9623.0], [9.2, 9623.0], [9.3, 9623.0], [9.4, 9623.0], [9.5, 9623.0], [9.6, 9625.0], [9.7, 9625.0], [9.8, 9625.0], [9.9, 9625.0], [10.0, 9625.0], [10.1, 9625.0], [10.2, 9625.0], [10.3, 9625.0], [10.4, 9625.0], [10.5, 9625.0], [10.6, 9625.0], [10.7, 9625.0], [10.8, 9639.0], [10.9, 9639.0], [11.0, 9639.0], [11.1, 9639.0], [11.2, 9639.0], [11.3, 9639.0], [11.4, 9639.0], [11.5, 9639.0], [11.6, 9639.0], [11.7, 9639.0], [11.8, 9639.0], [11.9, 9639.0], [12.0, 10019.0], [12.1, 10019.0], [12.2, 10019.0], [12.3, 10019.0], [12.4, 10019.0], [12.5, 10019.0], [12.6, 10019.0], [12.7, 10019.0], [12.8, 10019.0], [12.9, 10019.0], [13.0, 10019.0], [13.1, 10020.0], [13.2, 10020.0], [13.3, 10020.0], [13.4, 10020.0], [13.5, 10020.0], [13.6, 10020.0], [13.7, 10020.0], [13.8, 10020.0], [13.9, 10020.0], [14.0, 10020.0], [14.1, 10020.0], [14.2, 10020.0], [14.3, 10022.0], [14.4, 10022.0], [14.5, 10022.0], [14.6, 10022.0], [14.7, 10022.0], [14.8, 10022.0], [14.9, 10022.0], [15.0, 10022.0], [15.1, 10022.0], [15.2, 10022.0], [15.3, 10022.0], [15.4, 10022.0], [15.5, 10034.0], [15.6, 10034.0], [15.7, 10034.0], [15.8, 10034.0], [15.9, 10034.0], [16.0, 10034.0], [16.1, 10034.0], [16.2, 10034.0], [16.3, 10034.0], [16.4, 10034.0], [16.5, 10034.0], [16.6, 10034.0], [16.7, 10648.0], [16.8, 10648.0], [16.9, 10648.0], [17.0, 10648.0], [17.1, 10648.0], [17.2, 10648.0], [17.3, 10648.0], [17.4, 10648.0], [17.5, 10648.0], [17.6, 10648.0], [17.7, 10648.0], [17.8, 10648.0], [17.9, 11174.0], [18.0, 11174.0], [18.1, 11174.0], [18.2, 11174.0], [18.3, 11174.0], [18.4, 11174.0], [18.5, 11174.0], [18.6, 11174.0], [18.7, 11174.0], [18.8, 11174.0], [18.9, 11174.0], [19.0, 11174.0], [19.1, 11775.0], [19.2, 11775.0], [19.3, 11775.0], [19.4, 11775.0], [19.5, 11775.0], [19.6, 11775.0], [19.7, 11775.0], [19.8, 11775.0], [19.9, 11775.0], [20.0, 11775.0], [20.1, 11775.0], [20.2, 11775.0], [20.3, 12594.0], [20.4, 12594.0], [20.5, 12594.0], [20.6, 12594.0], [20.7, 12594.0], [20.8, 12594.0], [20.9, 12594.0], [21.0, 12594.0], [21.1, 12594.0], [21.2, 12594.0], [21.3, 12594.0], [21.4, 12594.0], [21.5, 12596.0], [21.6, 12596.0], [21.7, 12596.0], [21.8, 12596.0], [21.9, 12596.0], [22.0, 12596.0], [22.1, 12596.0], [22.2, 12596.0], [22.3, 12596.0], [22.4, 12596.0], [22.5, 12596.0], [22.6, 12596.0], [22.7, 13004.0], [22.8, 13004.0], [22.9, 13004.0], [23.0, 13004.0], [23.1, 13004.0], [23.2, 13004.0], [23.3, 13004.0], [23.4, 13004.0], [23.5, 13004.0], [23.6, 13004.0], [23.7, 13004.0], [23.8, 13004.0], [23.9, 13154.0], [24.0, 13154.0], [24.1, 13154.0], [24.2, 13154.0], [24.3, 13154.0], [24.4, 13154.0], [24.5, 13154.0], [24.6, 13154.0], [24.7, 13154.0], [24.8, 13154.0], [24.9, 13154.0], [25.0, 13155.0], [25.1, 13155.0], [25.2, 13155.0], [25.3, 13155.0], [25.4, 13155.0], [25.5, 13155.0], [25.6, 13155.0], [25.7, 13155.0], [25.8, 13155.0], [25.9, 13155.0], [26.0, 13155.0], [26.1, 13155.0], [26.2, 13156.0], [26.3, 13156.0], [26.4, 13156.0], [26.5, 13156.0], [26.6, 13156.0], [26.7, 13156.0], [26.8, 13156.0], [26.9, 13156.0], [27.0, 13156.0], [27.1, 13156.0], [27.2, 13156.0], [27.3, 13156.0], [27.4, 16690.0], [27.5, 16690.0], [27.6, 16690.0], [27.7, 16690.0], [27.8, 16690.0], [27.9, 16690.0], [28.0, 16690.0], [28.1, 16690.0], [28.2, 16690.0], [28.3, 16690.0], [28.4, 16690.0], [28.5, 16690.0], [28.6, 18554.0], [28.7, 18554.0], [28.8, 18554.0], [28.9, 18554.0], [29.0, 18554.0], [29.1, 18554.0], [29.2, 18554.0], [29.3, 18554.0], [29.4, 18554.0], [29.5, 18554.0], [29.6, 18554.0], [29.7, 18554.0], [29.8, 18944.0], [29.9, 18944.0], [30.0, 18944.0], [30.1, 18944.0], [30.2, 18944.0], [30.3, 18944.0], [30.4, 18944.0], [30.5, 18944.0], [30.6, 18944.0], [30.7, 18944.0], [30.8, 18944.0], [30.9, 18944.0], [31.0, 18944.0], [31.1, 18944.0], [31.2, 18944.0], [31.3, 18944.0], [31.4, 18944.0], [31.5, 18944.0], [31.6, 18944.0], [31.7, 18944.0], [31.8, 18944.0], [31.9, 18944.0], [32.0, 18944.0], [32.1, 18944.0], [32.2, 19047.0], [32.3, 19047.0], [32.4, 19047.0], [32.5, 19047.0], [32.6, 19047.0], [32.7, 19047.0], [32.8, 19047.0], [32.9, 19047.0], [33.0, 19047.0], [33.1, 19047.0], [33.2, 19047.0], [33.3, 19047.0], [33.4, 19047.0], [33.5, 19047.0], [33.6, 19047.0], [33.7, 19047.0], [33.8, 19047.0], [33.9, 19047.0], [34.0, 19047.0], [34.1, 19047.0], [34.2, 19047.0], [34.3, 19047.0], [34.4, 19047.0], [34.5, 19047.0], [34.6, 19251.0], [34.7, 19251.0], [34.8, 19251.0], [34.9, 19251.0], [35.0, 19251.0], [35.1, 19251.0], [35.2, 19251.0], [35.3, 19251.0], [35.4, 19251.0], [35.5, 19251.0], [35.6, 19251.0], [35.7, 19251.0], [35.8, 19251.0], [35.9, 19251.0], [36.0, 19251.0], [36.1, 19251.0], [36.2, 19251.0], [36.3, 19251.0], [36.4, 19251.0], [36.5, 19251.0], [36.6, 19251.0], [36.7, 19251.0], [36.8, 19251.0], [36.9, 19251.0], [37.0, 19503.0], [37.1, 19503.0], [37.2, 19503.0], [37.3, 19503.0], [37.4, 19503.0], [37.5, 19503.0], [37.6, 19503.0], [37.7, 19503.0], [37.8, 19503.0], [37.9, 19503.0], [38.0, 19503.0], [38.1, 25005.0], [38.2, 25005.0], [38.3, 25005.0], [38.4, 25005.0], [38.5, 25005.0], [38.6, 25005.0], [38.7, 25005.0], [38.8, 25005.0], [38.9, 25005.0], [39.0, 25005.0], [39.1, 25005.0], [39.2, 25005.0], [39.3, 25006.0], [39.4, 25006.0], [39.5, 25006.0], [39.6, 25006.0], [39.7, 25006.0], [39.8, 25006.0], [39.9, 25006.0], [40.0, 25006.0], [40.1, 25006.0], [40.2, 25006.0], [40.3, 25006.0], [40.4, 25006.0], [40.5, 25006.0], [40.6, 25006.0], [40.7, 25006.0], [40.8, 25006.0], [40.9, 25006.0], [41.0, 25006.0], [41.1, 25006.0], [41.2, 25006.0], [41.3, 25006.0], [41.4, 25006.0], [41.5, 25006.0], [41.6, 25006.0], [41.7, 31250.0], [41.8, 31250.0], [41.9, 31250.0], [42.0, 31250.0], [42.1, 31250.0], [42.2, 31250.0], [42.3, 31250.0], [42.4, 31250.0], [42.5, 31250.0], [42.6, 31250.0], [42.7, 31250.0], [42.8, 31250.0], [42.9, 31252.0], [43.0, 31252.0], [43.1, 31252.0], [43.2, 31252.0], [43.3, 31252.0], [43.4, 31252.0], [43.5, 31252.0], [43.6, 31252.0], [43.7, 31252.0], [43.8, 31252.0], [43.9, 31252.0], [44.0, 31252.0], [44.1, 31254.0], [44.2, 31254.0], [44.3, 31254.0], [44.4, 31254.0], [44.5, 31254.0], [44.6, 31254.0], [44.7, 31254.0], [44.8, 31254.0], [44.9, 31254.0], [45.0, 31254.0], [45.1, 31254.0], [45.2, 31254.0], [45.3, 31709.0], [45.4, 31709.0], [45.5, 31709.0], [45.6, 31709.0], [45.7, 31709.0], [45.8, 31709.0], [45.9, 31709.0], [46.0, 31709.0], [46.1, 31709.0], [46.2, 31709.0], [46.3, 31709.0], [46.4, 31709.0], [46.5, 31710.0], [46.6, 31710.0], [46.7, 31710.0], [46.8, 31710.0], [46.9, 31710.0], [47.0, 31710.0], [47.1, 31710.0], [47.2, 31710.0], [47.3, 31710.0], [47.4, 31710.0], [47.5, 31710.0], [47.6, 31710.0], [47.7, 31818.0], [47.8, 31818.0], [47.9, 31818.0], [48.0, 31818.0], [48.1, 31818.0], [48.2, 31818.0], [48.3, 31818.0], [48.4, 31818.0], [48.5, 31818.0], [48.6, 31818.0], [48.7, 31818.0], [48.8, 31818.0], [48.9, 31818.0], [49.0, 31818.0], [49.1, 31818.0], [49.2, 31818.0], [49.3, 31818.0], [49.4, 31818.0], [49.5, 31818.0], [49.6, 31818.0], [49.7, 31818.0], [49.8, 31818.0], [49.9, 31818.0], [50.0, 31818.0], [50.1, 31818.0], [50.2, 31818.0], [50.3, 31818.0], [50.4, 31818.0], [50.5, 31818.0], [50.6, 31818.0], [50.7, 31818.0], [50.8, 31818.0], [50.9, 31818.0], [51.0, 31818.0], [51.1, 31818.0], [51.2, 31819.0], [51.3, 31819.0], [51.4, 31819.0], [51.5, 31819.0], [51.6, 31819.0], [51.7, 31819.0], [51.8, 31819.0], [51.9, 31819.0], [52.0, 31819.0], [52.1, 31819.0], [52.2, 31819.0], [52.3, 31819.0], [52.4, 31847.0], [52.5, 31847.0], [52.6, 31847.0], [52.7, 31847.0], [52.8, 31847.0], [52.9, 31847.0], [53.0, 31847.0], [53.1, 31847.0], [53.2, 31847.0], [53.3, 31847.0], [53.4, 31847.0], [53.5, 31847.0], [53.6, 31847.0], [53.7, 31847.0], [53.8, 31847.0], [53.9, 31847.0], [54.0, 31847.0], [54.1, 31847.0], [54.2, 31847.0], [54.3, 31847.0], [54.4, 31847.0], [54.5, 31847.0], [54.6, 31847.0], [54.7, 31847.0], [54.8, 31923.0], [54.9, 31923.0], [55.0, 31923.0], [55.1, 31923.0], [55.2, 31923.0], [55.3, 31923.0], [55.4, 31923.0], [55.5, 31923.0], [55.6, 31923.0], [55.7, 31923.0], [55.8, 31923.0], [55.9, 31923.0], [56.0, 31924.0], [56.1, 31924.0], [56.2, 31924.0], [56.3, 31924.0], [56.4, 31924.0], [56.5, 31924.0], [56.6, 31924.0], [56.7, 31924.0], [56.8, 31924.0], [56.9, 31924.0], [57.0, 31924.0], [57.1, 31924.0], [57.2, 31947.0], [57.3, 31947.0], [57.4, 31947.0], [57.5, 31947.0], [57.6, 31947.0], [57.7, 31947.0], [57.8, 31947.0], [57.9, 31947.0], [58.0, 31947.0], [58.1, 31947.0], [58.2, 31947.0], [58.3, 31947.0], [58.4, 31949.0], [58.5, 31949.0], [58.6, 31949.0], [58.7, 31949.0], [58.8, 31949.0], [58.9, 31949.0], [59.0, 31949.0], [59.1, 31949.0], [59.2, 31949.0], [59.3, 31949.0], [59.4, 31949.0], [59.5, 31949.0], [59.6, 31949.0], [59.7, 31949.0], [59.8, 31949.0], [59.9, 31949.0], [60.0, 31949.0], [60.1, 31949.0], [60.2, 31949.0], [60.3, 31949.0], [60.4, 31949.0], [60.5, 31949.0], [60.6, 31949.0], [60.7, 31949.0], [60.8, 31950.0], [60.9, 31950.0], [61.0, 31950.0], [61.1, 31950.0], [61.2, 31950.0], [61.3, 31950.0], [61.4, 31950.0], [61.5, 31950.0], [61.6, 31950.0], [61.7, 31950.0], [61.8, 31950.0], [61.9, 31950.0], [62.0, 32049.0], [62.1, 32049.0], [62.2, 32049.0], [62.3, 32049.0], [62.4, 32049.0], [62.5, 32049.0], [62.6, 32049.0], [62.7, 32049.0], [62.8, 32049.0], [62.9, 32049.0], [63.0, 32049.0], [63.1, 32049.0], [63.2, 32049.0], [63.3, 32049.0], [63.4, 32049.0], [63.5, 32049.0], [63.6, 32049.0], [63.7, 32049.0], [63.8, 32049.0], [63.9, 32049.0], [64.0, 32049.0], [64.1, 32049.0], [64.2, 32049.0], [64.3, 32053.0], [64.4, 32053.0], [64.5, 32053.0], [64.6, 32053.0], [64.7, 32053.0], [64.8, 32053.0], [64.9, 32053.0], [65.0, 32053.0], [65.1, 32053.0], [65.2, 32053.0], [65.3, 32053.0], [65.4, 32053.0], [65.5, 32053.0], [65.6, 32053.0], [65.7, 32053.0], [65.8, 32053.0], [65.9, 32053.0], [66.0, 32053.0], [66.1, 32053.0], [66.2, 32053.0], [66.3, 32053.0], [66.4, 32053.0], [66.5, 32053.0], [66.6, 32053.0], [66.7, 32153.0], [66.8, 32153.0], [66.9, 32153.0], [67.0, 32153.0], [67.1, 32153.0], [67.2, 32153.0], [67.3, 32153.0], [67.4, 32153.0], [67.5, 32153.0], [67.6, 32153.0], [67.7, 32153.0], [67.8, 32153.0], [67.9, 32154.0], [68.0, 32154.0], [68.1, 32154.0], [68.2, 32154.0], [68.3, 32154.0], [68.4, 32154.0], [68.5, 32154.0], [68.6, 32154.0], [68.7, 32154.0], [68.8, 32154.0], [68.9, 32154.0], [69.0, 32154.0], [69.1, 32154.0], [69.2, 32154.0], [69.3, 32154.0], [69.4, 32154.0], [69.5, 32154.0], [69.6, 32154.0], [69.7, 32154.0], [69.8, 32154.0], [69.9, 32154.0], [70.0, 32154.0], [70.1, 32154.0], [70.2, 32154.0], [70.3, 32155.0], [70.4, 32155.0], [70.5, 32155.0], [70.6, 32155.0], [70.7, 32155.0], [70.8, 32155.0], [70.9, 32155.0], [71.0, 32155.0], [71.1, 32155.0], [71.2, 32155.0], [71.3, 32155.0], [71.4, 32155.0], [71.5, 32213.0], [71.6, 32213.0], [71.7, 32213.0], [71.8, 32213.0], [71.9, 32213.0], [72.0, 32213.0], [72.1, 32213.0], [72.2, 32213.0], [72.3, 32213.0], [72.4, 32213.0], [72.5, 32213.0], [72.6, 32213.0], [72.7, 32213.0], [72.8, 32213.0], [72.9, 32213.0], [73.0, 32213.0], [73.1, 32213.0], [73.2, 32213.0], [73.3, 32213.0], [73.4, 32213.0], [73.5, 32213.0], [73.6, 32213.0], [73.7, 32213.0], [73.8, 32213.0], [73.9, 32255.0], [74.0, 32255.0], [74.1, 32255.0], [74.2, 32255.0], [74.3, 32255.0], [74.4, 32255.0], [74.5, 32255.0], [74.6, 32255.0], [74.7, 32255.0], [74.8, 32255.0], [74.9, 32255.0], [75.0, 32255.0], [75.1, 32255.0], [75.2, 32255.0], [75.3, 32255.0], [75.4, 32255.0], [75.5, 32255.0], [75.6, 32255.0], [75.7, 32255.0], [75.8, 32255.0], [75.9, 32255.0], [76.0, 32255.0], [76.1, 32255.0], [76.2, 32487.0], [76.3, 32487.0], [76.4, 32487.0], [76.5, 32487.0], [76.6, 32487.0], [76.7, 32487.0], [76.8, 32487.0], [76.9, 32487.0], [77.0, 32487.0], [77.1, 32487.0], [77.2, 32487.0], [77.3, 32487.0], [77.4, 32487.0], [77.5, 32487.0], [77.6, 32487.0], [77.7, 32487.0], [77.8, 32487.0], [77.9, 32487.0], [78.0, 32487.0], [78.1, 32487.0], [78.2, 32487.0], [78.3, 32487.0], [78.4, 32487.0], [78.5, 32487.0], [78.6, 32596.0], [78.7, 32596.0], [78.8, 32596.0], [78.9, 32596.0], [79.0, 32596.0], [79.1, 32596.0], [79.2, 32596.0], [79.3, 32596.0], [79.4, 32596.0], [79.5, 32596.0], [79.6, 32596.0], [79.7, 32596.0], [79.8, 32597.0], [79.9, 32597.0], [80.0, 32597.0], [80.1, 32597.0], [80.2, 32597.0], [80.3, 32597.0], [80.4, 32597.0], [80.5, 32597.0], [80.6, 32597.0], [80.7, 32597.0], [80.8, 32597.0], [80.9, 32597.0], [81.0, 37375.0], [81.1, 37375.0], [81.2, 37375.0], [81.3, 37375.0], [81.4, 37375.0], [81.5, 37375.0], [81.6, 37375.0], [81.7, 37375.0], [81.8, 37375.0], [81.9, 37375.0], [82.0, 37375.0], [82.1, 37375.0], [82.2, 37698.0], [82.3, 37698.0], [82.4, 37698.0], [82.5, 37698.0], [82.6, 37698.0], [82.7, 37698.0], [82.8, 37698.0], [82.9, 37698.0], [83.0, 37698.0], [83.1, 37698.0], [83.2, 37698.0], [83.3, 37698.0], [83.4, 38065.0], [83.5, 38065.0], [83.6, 38065.0], [83.7, 38065.0], [83.8, 38065.0], [83.9, 38065.0], [84.0, 38065.0], [84.1, 38065.0], [84.2, 38065.0], [84.3, 38065.0], [84.4, 38065.0], [84.5, 38065.0], [84.6, 38161.0], [84.7, 38161.0], [84.8, 38161.0], [84.9, 38161.0], [85.0, 38161.0], [85.1, 38161.0], [85.2, 38161.0], [85.3, 38161.0], [85.4, 38161.0], [85.5, 38161.0], [85.6, 38161.0], [85.7, 38161.0], [85.8, 38169.0], [85.9, 38169.0], [86.0, 38169.0], [86.1, 38169.0], [86.2, 38169.0], [86.3, 38169.0], [86.4, 38169.0], [86.5, 38169.0], [86.6, 38169.0], [86.7, 38169.0], [86.8, 38169.0], [86.9, 38169.0], [87.0, 38197.0], [87.1, 38197.0], [87.2, 38197.0], [87.3, 38197.0], [87.4, 38197.0], [87.5, 38197.0], [87.6, 38197.0], [87.7, 38197.0], [87.8, 38197.0], [87.9, 38197.0], [88.0, 38197.0], [88.1, 38401.0], [88.2, 38401.0], [88.3, 38401.0], [88.4, 38401.0], [88.5, 38401.0], [88.6, 38401.0], [88.7, 38401.0], [88.8, 38401.0], [88.9, 38401.0], [89.0, 38401.0], [89.1, 38401.0], [89.2, 38401.0], [89.3, 38500.0], [89.4, 38500.0], [89.5, 38500.0], [89.6, 38500.0], [89.7, 38500.0], [89.8, 38500.0], [89.9, 38500.0], [90.0, 38500.0], [90.1, 38500.0], [90.2, 38500.0], [90.3, 38500.0], [90.4, 38500.0], [90.5, 38501.0], [90.6, 38501.0], [90.7, 38501.0], [90.8, 38501.0], [90.9, 38501.0], [91.0, 38501.0], [91.1, 38501.0], [91.2, 38501.0], [91.3, 38501.0], [91.4, 38501.0], [91.5, 38501.0], [91.6, 38501.0], [91.7, 38503.0], [91.8, 38503.0], [91.9, 38503.0], [92.0, 38503.0], [92.1, 38503.0], [92.2, 38503.0], [92.3, 38503.0], [92.4, 38503.0], [92.5, 38503.0], [92.6, 38503.0], [92.7, 38503.0], [92.8, 38503.0], [92.9, 38503.0], [93.0, 38503.0], [93.1, 38503.0], [93.2, 38503.0], [93.3, 38503.0], [93.4, 38503.0], [93.5, 38503.0], [93.6, 38503.0], [93.7, 38503.0], [93.8, 38503.0], [93.9, 38503.0], [94.0, 38503.0], [94.1, 38574.0], [94.2, 38574.0], [94.3, 38574.0], [94.4, 38574.0], [94.5, 38574.0], [94.6, 38574.0], [94.7, 38574.0], [94.8, 38574.0], [94.9, 38574.0], [95.0, 38574.0], [95.1, 38574.0], [95.2, 38574.0], [95.3, 38708.0], [95.4, 38708.0], [95.5, 38708.0], [95.6, 38708.0], [95.7, 38708.0], [95.8, 38708.0], [95.9, 38708.0], [96.0, 38708.0], [96.1, 38708.0], [96.2, 38708.0], [96.3, 38708.0], [96.4, 38708.0], [96.5, 38810.0], [96.6, 38810.0], [96.7, 38810.0], [96.8, 38810.0], [96.9, 38810.0], [97.0, 38810.0], [97.1, 38810.0], [97.2, 38810.0], [97.3, 38810.0], [97.4, 38810.0], [97.5, 38810.0], [97.6, 38810.0], [97.7, 38842.0], [97.8, 38842.0], [97.9, 38842.0], [98.0, 38842.0], [98.1, 38842.0], [98.2, 38842.0], [98.3, 38842.0], [98.4, 38842.0], [98.5, 38842.0], [98.6, 38842.0], [98.7, 38842.0], [98.8, 38842.0], [98.9, 38898.0], [99.0, 38898.0], [99.1, 38898.0], [99.2, 38898.0], [99.3, 38898.0], [99.4, 38898.0], [99.5, 38898.0], [99.6, 38898.0], [99.7, 38898.0], [99.8, 38898.0], [99.9, 38898.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 7500.0, "maxY": 6.0, "series": [{"data": [[8200.0, 1.0], [8900.0, 3.0], [9400.0, 1.0], [9600.0, 3.0], [10000.0, 4.0], [10600.0, 1.0], [11100.0, 1.0], [11700.0, 1.0], [12500.0, 2.0], [13100.0, 3.0], [13000.0, 1.0], [16600.0, 1.0], [19200.0, 2.0], [18900.0, 2.0], [19000.0, 2.0], [18500.0, 1.0], [19500.0, 1.0], [25000.0, 3.0], [31200.0, 3.0], [31700.0, 2.0], [31900.0, 6.0], [32100.0, 4.0], [32000.0, 4.0], [31800.0, 6.0], [32200.0, 4.0], [32500.0, 2.0], [32400.0, 2.0], [37600.0, 1.0], [38500.0, 5.0], [38100.0, 3.0], [38000.0, 1.0], [38800.0, 3.0], [38700.0, 1.0], [38400.0, 1.0], [37300.0, 1.0], [7500.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 38800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 84.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 84.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 84.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.9, "minX": 1.58912946E12, "maxY": 16.0, "series": [{"data": [[1.58912958E12, 16.0], [1.58912946E12, 2.9], [1.58912952E12, 11.85714285714286], [1.58912964E12, 10.473684210526315]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58912964E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 10117.75, "minX": 1.0, "maxY": 34070.0, "series": [{"data": [[1.0, 24274.5], [2.0, 10117.75], [4.0, 15678.454545454548], [8.0, 12875.7], [16.0, 30355.52083333333], [10.0, 34032.0], [13.0, 34070.0], [7.0, 34031.666666666664]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.809523809523808, 25639.357142857138]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 16.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 52.0, "minX": 1.58912946E12, "maxY": 29476.383333333335, "series": [{"data": [[1.58912958E12, 140.4], [1.58912946E12, 52.0], [1.58912952E12, 145.6], [1.58912964E12, 98.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58912958E12, 28421.95], [1.58912946E12, 10526.483333333334], [1.58912952E12, 29476.383333333335], [1.58912964E12, 20001.633333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58912964E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 9534.300000000001, "minX": 1.58912946E12, "maxY": 34364.84210526315, "series": [{"data": [[1.58912958E12, 34182.370370370365], [1.58912946E12, 9534.300000000001], [1.58912952E12, 17232.39285714286], [1.58912964E12, 34364.84210526315]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58912964E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 9534.0, "minX": 1.58912946E12, "maxY": 34364.84210526315, "series": [{"data": [[1.58912958E12, 34182.370370370365], [1.58912946E12, 9534.0], [1.58912952E12, 17232.25], [1.58912964E12, 34364.84210526315]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58912964E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.9473684210526314, "minX": 1.58912946E12, "maxY": 4.9, "series": [{"data": [[1.58912958E12, 2.296296296296296], [1.58912946E12, 4.9], [1.58912952E12, 2.6785714285714284], [1.58912964E12, 1.9473684210526314]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58912964E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 7564.0, "minX": 1.58912946E12, "maxY": 38898.0, "series": [{"data": [[1.58912958E12, 38810.0], [1.58912946E12, 11775.0], [1.58912952E12, 31254.0], [1.58912964E12, 38898.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58912958E12, 31709.0], [1.58912946E12, 7564.0], [1.58912952E12, 8916.0], [1.58912964E12, 31818.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58912958E12, 38544.0], [1.58912946E12, 11714.9], [1.58912952E12, 31250.2], [1.58912964E12, 38842.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58912958E12, 38810.0], [1.58912946E12, 11775.0], [1.58912952E12, 31254.0], [1.58912964E12, 38898.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58912958E12, 38769.2], [1.58912946E12, 11775.0], [1.58912952E12, 31253.1], [1.58912964E12, 38898.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58912964E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 10034.0, "minX": 1.0, "maxY": 31847.0, "series": [{"data": [[1.0, 10034.0], [3.0, 31847.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 10034.0, "minX": 1.0, "maxY": 31847.0, "series": [{"data": [[1.0, 10034.0], [3.0, 31847.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.58912946E12, "maxY": 0.6666666666666666, "series": [{"data": [[1.58912958E12, 0.45], [1.58912946E12, 0.23333333333333334], [1.58912952E12, 0.6666666666666666], [1.58912964E12, 0.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58912964E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.58912946E12, "maxY": 0.4666666666666667, "series": [{"data": [[1.58912958E12, 0.45], [1.58912946E12, 0.16666666666666666], [1.58912952E12, 0.4666666666666667], [1.58912964E12, 0.31666666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58912964E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.58912946E12, "maxY": 0.4666666666666667, "series": [{"data": [[1.58912958E12, 0.45], [1.58912946E12, 0.16666666666666666], [1.58912952E12, 0.4666666666666667], [1.58912964E12, 0.31666666666666665]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58912964E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.58912946E12, "maxY": 0.4666666666666667, "series": [{"data": [[1.58912958E12, 0.45], [1.58912946E12, 0.16666666666666666], [1.58912952E12, 0.4666666666666667], [1.58912964E12, 0.31666666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58912964E12, "title": "Total Transactions Per Second"}},
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

