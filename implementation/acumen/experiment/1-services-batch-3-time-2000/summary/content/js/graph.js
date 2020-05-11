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
        data: {"result": {"minY": 7403.0, "minX": 0.0, "maxY": 120035.0, "series": [{"data": [[0.0, 7403.0], [0.1, 7403.0], [0.2, 7403.0], [0.3, 7403.0], [0.4, 7403.0], [0.5, 7403.0], [0.6, 7403.0], [0.7, 7403.0], [0.8, 7403.0], [0.9, 7455.0], [1.0, 7455.0], [1.1, 7455.0], [1.2, 7455.0], [1.3, 7455.0], [1.4, 7455.0], [1.5, 7455.0], [1.6, 7455.0], [1.7, 7455.0], [1.8, 7472.0], [1.9, 7472.0], [2.0, 7472.0], [2.1, 7472.0], [2.2, 7472.0], [2.3, 7472.0], [2.4, 7472.0], [2.5, 7472.0], [2.6, 7474.0], [2.7, 7474.0], [2.8, 7474.0], [2.9, 7474.0], [3.0, 7474.0], [3.1, 7474.0], [3.2, 7474.0], [3.3, 7474.0], [3.4, 7474.0], [3.5, 7632.0], [3.6, 7632.0], [3.7, 7632.0], [3.8, 7632.0], [3.9, 7632.0], [4.0, 7632.0], [4.1, 7632.0], [4.2, 7632.0], [4.3, 7632.0], [4.4, 7774.0], [4.5, 7774.0], [4.6, 7774.0], [4.7, 7774.0], [4.8, 7774.0], [4.9, 7774.0], [5.0, 7774.0], [5.1, 7774.0], [5.2, 8048.0], [5.3, 8048.0], [5.4, 8048.0], [5.5, 8048.0], [5.6, 8048.0], [5.7, 8048.0], [5.8, 8048.0], [5.9, 8048.0], [6.0, 8048.0], [6.1, 8048.0], [6.2, 8048.0], [6.3, 8048.0], [6.4, 8048.0], [6.5, 8048.0], [6.6, 8048.0], [6.7, 8048.0], [6.8, 8048.0], [6.9, 8193.0], [7.0, 8193.0], [7.1, 8193.0], [7.2, 8193.0], [7.3, 8193.0], [7.4, 8193.0], [7.5, 8193.0], [7.6, 8193.0], [7.7, 8193.0], [7.8, 8301.0], [7.9, 8301.0], [8.0, 8301.0], [8.1, 8301.0], [8.2, 8301.0], [8.3, 8301.0], [8.4, 8301.0], [8.5, 8301.0], [8.6, 8301.0], [8.7, 8931.0], [8.8, 8931.0], [8.9, 8931.0], [9.0, 8931.0], [9.1, 8931.0], [9.2, 8931.0], [9.3, 8931.0], [9.4, 8931.0], [9.5, 8933.0], [9.6, 8933.0], [9.7, 8933.0], [9.8, 8933.0], [9.9, 8933.0], [10.0, 8933.0], [10.1, 8933.0], [10.2, 8933.0], [10.3, 8933.0], [10.4, 8933.0], [10.5, 8933.0], [10.6, 8933.0], [10.7, 8933.0], [10.8, 8933.0], [10.9, 8933.0], [11.0, 8933.0], [11.1, 8933.0], [11.2, 8933.0], [11.3, 8985.0], [11.4, 8985.0], [11.5, 8985.0], [11.6, 8985.0], [11.7, 8985.0], [11.8, 8985.0], [11.9, 8985.0], [12.0, 8985.0], [12.1, 8985.0], [12.2, 8985.0], [12.3, 8985.0], [12.4, 8985.0], [12.5, 8985.0], [12.6, 8985.0], [12.7, 8985.0], [12.8, 8985.0], [12.9, 8985.0], [13.0, 8985.0], [13.1, 8985.0], [13.2, 8985.0], [13.3, 8985.0], [13.4, 8985.0], [13.5, 8985.0], [13.6, 8985.0], [13.7, 8985.0], [13.8, 9008.0], [13.9, 9008.0], [14.0, 9008.0], [14.1, 9008.0], [14.2, 9008.0], [14.3, 9008.0], [14.4, 9008.0], [14.5, 9008.0], [14.6, 9008.0], [14.7, 9114.0], [14.8, 9114.0], [14.9, 9114.0], [15.0, 9114.0], [15.1, 9114.0], [15.2, 9114.0], [15.3, 9114.0], [15.4, 9114.0], [15.5, 9114.0], [15.6, 9424.0], [15.7, 9424.0], [15.8, 9424.0], [15.9, 9424.0], [16.0, 9424.0], [16.1, 9424.0], [16.2, 9424.0], [16.3, 9424.0], [16.4, 12011.0], [16.5, 12011.0], [16.6, 12011.0], [16.7, 12011.0], [16.8, 12011.0], [16.9, 12011.0], [17.0, 12011.0], [17.1, 12011.0], [17.2, 12011.0], [17.3, 12011.0], [17.4, 12011.0], [17.5, 12011.0], [17.6, 12011.0], [17.7, 12011.0], [17.8, 12011.0], [17.9, 12011.0], [18.0, 12011.0], [18.1, 12011.0], [18.2, 12014.0], [18.3, 12014.0], [18.4, 12014.0], [18.5, 12014.0], [18.6, 12014.0], [18.7, 12014.0], [18.8, 12014.0], [18.9, 12014.0], [19.0, 12413.0], [19.1, 12413.0], [19.2, 12413.0], [19.3, 12413.0], [19.4, 12413.0], [19.5, 12413.0], [19.6, 12413.0], [19.7, 12413.0], [19.8, 12413.0], [19.9, 12471.0], [20.0, 12471.0], [20.1, 12471.0], [20.2, 12471.0], [20.3, 12471.0], [20.4, 12471.0], [20.5, 12471.0], [20.6, 12471.0], [20.7, 12491.0], [20.8, 12491.0], [20.9, 12491.0], [21.0, 12491.0], [21.1, 12491.0], [21.2, 12491.0], [21.3, 12491.0], [21.4, 12491.0], [21.5, 12491.0], [21.6, 17000.0], [21.7, 17000.0], [21.8, 17000.0], [21.9, 17000.0], [22.0, 17000.0], [22.1, 17000.0], [22.2, 17000.0], [22.3, 17000.0], [22.4, 17000.0], [22.5, 17083.0], [22.6, 17083.0], [22.7, 17083.0], [22.8, 17083.0], [22.9, 17083.0], [23.0, 17083.0], [23.1, 17083.0], [23.2, 17083.0], [23.3, 18439.0], [23.4, 18439.0], [23.5, 18439.0], [23.6, 18439.0], [23.7, 18439.0], [23.8, 18439.0], [23.9, 18439.0], [24.0, 18439.0], [24.1, 18439.0], [24.2, 18535.0], [24.3, 18535.0], [24.4, 18535.0], [24.5, 18535.0], [24.6, 18535.0], [24.7, 18535.0], [24.8, 18535.0], [24.9, 18535.0], [25.0, 18535.0], [25.1, 18535.0], [25.2, 18535.0], [25.3, 18535.0], [25.4, 18535.0], [25.5, 18535.0], [25.6, 18535.0], [25.7, 18535.0], [25.8, 18535.0], [25.9, 18553.0], [26.0, 18553.0], [26.1, 18553.0], [26.2, 18553.0], [26.3, 18553.0], [26.4, 18553.0], [26.5, 18553.0], [26.6, 18553.0], [26.7, 18553.0], [26.8, 18553.0], [26.9, 18553.0], [27.0, 18553.0], [27.1, 18553.0], [27.2, 18553.0], [27.3, 18553.0], [27.4, 18553.0], [27.5, 18553.0], [27.6, 18838.0], [27.7, 18838.0], [27.8, 18838.0], [27.9, 18838.0], [28.0, 18838.0], [28.1, 18838.0], [28.2, 18838.0], [28.3, 18838.0], [28.4, 18838.0], [28.5, 18841.0], [28.6, 18841.0], [28.7, 18841.0], [28.8, 18841.0], [28.9, 18841.0], [29.0, 18841.0], [29.1, 18841.0], [29.2, 18841.0], [29.3, 18841.0], [29.4, 23244.0], [29.5, 23244.0], [29.6, 23244.0], [29.7, 23244.0], [29.8, 23244.0], [29.9, 23244.0], [30.0, 23244.0], [30.1, 23244.0], [30.2, 23244.0], [30.3, 23244.0], [30.4, 23244.0], [30.5, 23244.0], [30.6, 23244.0], [30.7, 23244.0], [30.8, 23244.0], [30.9, 23244.0], [31.0, 23244.0], [31.1, 23245.0], [31.2, 23245.0], [31.3, 23245.0], [31.4, 23245.0], [31.5, 23245.0], [31.6, 23245.0], [31.7, 23245.0], [31.8, 23245.0], [31.9, 29691.0], [32.0, 29691.0], [32.1, 29691.0], [32.2, 29691.0], [32.3, 29691.0], [32.4, 29691.0], [32.5, 29691.0], [32.6, 29691.0], [32.7, 29691.0], [32.8, 29694.0], [32.9, 29694.0], [33.0, 29694.0], [33.1, 29694.0], [33.2, 29694.0], [33.3, 29694.0], [33.4, 29694.0], [33.5, 29694.0], [33.6, 29694.0], [33.7, 29695.0], [33.8, 29695.0], [33.9, 29695.0], [34.0, 29695.0], [34.1, 29695.0], [34.2, 29695.0], [34.3, 29695.0], [34.4, 29695.0], [34.5, 31332.0], [34.6, 31332.0], [34.7, 31332.0], [34.8, 31332.0], [34.9, 31332.0], [35.0, 31332.0], [35.1, 31332.0], [35.2, 31332.0], [35.3, 31332.0], [35.4, 31333.0], [35.5, 31333.0], [35.6, 31333.0], [35.7, 31333.0], [35.8, 31333.0], [35.9, 31333.0], [36.0, 31333.0], [36.1, 31333.0], [36.2, 31333.0], [36.3, 31336.0], [36.4, 31336.0], [36.5, 31336.0], [36.6, 31336.0], [36.7, 31336.0], [36.8, 31336.0], [36.9, 31336.0], [37.0, 31336.0], [37.1, 31336.0], [37.2, 31336.0], [37.3, 31336.0], [37.4, 31336.0], [37.5, 31336.0], [37.6, 31336.0], [37.7, 31336.0], [37.8, 31336.0], [37.9, 31336.0], [38.0, 31433.0], [38.1, 31433.0], [38.2, 31433.0], [38.3, 31433.0], [38.4, 31433.0], [38.5, 31433.0], [38.6, 31433.0], [38.7, 31433.0], [38.8, 31433.0], [38.9, 31433.0], [39.0, 31433.0], [39.1, 31433.0], [39.2, 31433.0], [39.3, 31433.0], [39.4, 31433.0], [39.5, 31433.0], [39.6, 31433.0], [39.7, 34574.0], [39.8, 34574.0], [39.9, 34574.0], [40.0, 34574.0], [40.1, 34574.0], [40.2, 34574.0], [40.3, 34574.0], [40.4, 34574.0], [40.5, 34574.0], [40.6, 34576.0], [40.7, 34576.0], [40.8, 34576.0], [40.9, 34576.0], [41.0, 34576.0], [41.1, 34576.0], [41.2, 34576.0], [41.3, 34576.0], [41.4, 35833.0], [41.5, 35833.0], [41.6, 35833.0], [41.7, 35833.0], [41.8, 35833.0], [41.9, 35833.0], [42.0, 35833.0], [42.1, 35833.0], [42.2, 35833.0], [42.3, 37475.0], [42.4, 37475.0], [42.5, 37475.0], [42.6, 37475.0], [42.7, 37475.0], [42.8, 37475.0], [42.9, 37475.0], [43.0, 37475.0], [43.1, 37475.0], [43.2, 37579.0], [43.3, 37579.0], [43.4, 37579.0], [43.5, 37579.0], [43.6, 37579.0], [43.7, 37579.0], [43.8, 37579.0], [43.9, 37579.0], [44.0, 37782.0], [44.1, 37782.0], [44.2, 37782.0], [44.3, 37782.0], [44.4, 37782.0], [44.5, 37782.0], [44.6, 37782.0], [44.7, 37782.0], [44.8, 37782.0], [44.9, 40822.0], [45.0, 40822.0], [45.1, 40822.0], [45.2, 40822.0], [45.3, 40822.0], [45.4, 40822.0], [45.5, 40822.0], [45.6, 40822.0], [45.7, 40824.0], [45.8, 40824.0], [45.9, 40824.0], [46.0, 40824.0], [46.1, 40824.0], [46.2, 40824.0], [46.3, 40824.0], [46.4, 40824.0], [46.5, 40824.0], [46.6, 40825.0], [46.7, 40825.0], [46.8, 40825.0], [46.9, 40825.0], [47.0, 40825.0], [47.1, 40825.0], [47.2, 40825.0], [47.3, 40825.0], [47.4, 40825.0], [47.5, 47165.0], [47.6, 47165.0], [47.7, 47165.0], [47.8, 47165.0], [47.9, 47165.0], [48.0, 47165.0], [48.1, 47165.0], [48.2, 47165.0], [48.3, 47165.0], [48.4, 47165.0], [48.5, 47165.0], [48.6, 47165.0], [48.7, 47165.0], [48.8, 47165.0], [48.9, 47165.0], [49.0, 47165.0], [49.1, 47165.0], [49.2, 47169.0], [49.3, 47169.0], [49.4, 47169.0], [49.5, 47169.0], [49.6, 47169.0], [49.7, 47169.0], [49.8, 47169.0], [49.9, 47169.0], [50.0, 53176.0], [50.1, 53176.0], [50.2, 53176.0], [50.3, 53176.0], [50.4, 53176.0], [50.5, 53176.0], [50.6, 53176.0], [50.7, 53176.0], [50.8, 53176.0], [50.9, 53183.0], [51.0, 53183.0], [51.1, 53183.0], [51.2, 53183.0], [51.3, 53183.0], [51.4, 53183.0], [51.5, 53183.0], [51.6, 53183.0], [51.7, 53183.0], [51.8, 53185.0], [51.9, 53185.0], [52.0, 53185.0], [52.1, 53185.0], [52.2, 53185.0], [52.3, 53185.0], [52.4, 53185.0], [52.5, 53185.0], [52.6, 59448.0], [52.7, 59448.0], [52.8, 59448.0], [52.9, 59448.0], [53.0, 59448.0], [53.1, 59448.0], [53.2, 59448.0], [53.3, 59448.0], [53.4, 59448.0], [53.5, 59452.0], [53.6, 59452.0], [53.7, 59452.0], [53.8, 59452.0], [53.9, 59452.0], [54.0, 59452.0], [54.1, 59452.0], [54.2, 59452.0], [54.3, 59452.0], [54.4, 59457.0], [54.5, 59457.0], [54.6, 59457.0], [54.7, 59457.0], [54.8, 59457.0], [54.9, 59457.0], [55.0, 59457.0], [55.1, 59457.0], [55.2, 62464.0], [55.3, 62464.0], [55.4, 62464.0], [55.5, 62464.0], [55.6, 62464.0], [55.7, 62464.0], [55.8, 62464.0], [55.9, 62464.0], [56.0, 62464.0], [56.1, 62568.0], [56.2, 62568.0], [56.3, 62568.0], [56.4, 62568.0], [56.5, 62568.0], [56.6, 62568.0], [56.7, 62568.0], [56.8, 62568.0], [56.9, 62769.0], [57.0, 62769.0], [57.1, 62769.0], [57.2, 62769.0], [57.3, 62769.0], [57.4, 62769.0], [57.5, 62769.0], [57.6, 62769.0], [57.7, 62769.0], [57.8, 64856.0], [57.9, 64856.0], [58.0, 64856.0], [58.1, 64856.0], [58.2, 64856.0], [58.3, 64856.0], [58.4, 64856.0], [58.5, 64856.0], [58.6, 64856.0], [58.7, 65690.0], [58.8, 65690.0], [58.9, 65690.0], [59.0, 65690.0], [59.1, 65690.0], [59.2, 65690.0], [59.3, 65690.0], [59.4, 65690.0], [59.5, 65703.0], [59.6, 65703.0], [59.7, 65703.0], [59.8, 65703.0], [59.9, 65703.0], [60.0, 65703.0], [60.1, 65703.0], [60.2, 65703.0], [60.3, 65703.0], [60.4, 68914.0], [60.5, 68914.0], [60.6, 68914.0], [60.7, 68914.0], [60.8, 68914.0], [60.9, 68914.0], [61.0, 68914.0], [61.1, 68914.0], [61.2, 68914.0], [61.3, 68914.0], [61.4, 68914.0], [61.5, 68914.0], [61.6, 68914.0], [61.7, 68914.0], [61.8, 68914.0], [61.9, 68914.0], [62.0, 68914.0], [62.1, 69015.0], [62.2, 69015.0], [62.3, 69015.0], [62.4, 69015.0], [62.5, 69015.0], [62.6, 69015.0], [62.7, 69015.0], [62.8, 69015.0], [62.9, 69015.0], [63.0, 69016.0], [63.1, 69016.0], [63.2, 69016.0], [63.3, 69016.0], [63.4, 69016.0], [63.5, 69016.0], [63.6, 69016.0], [63.7, 69016.0], [63.8, 69020.0], [63.9, 69020.0], [64.0, 69020.0], [64.1, 69020.0], [64.2, 69020.0], [64.3, 69020.0], [64.4, 69020.0], [64.5, 69020.0], [64.6, 69020.0], [64.7, 69020.0], [64.8, 69020.0], [64.9, 69020.0], [65.0, 69020.0], [65.1, 69020.0], [65.2, 69020.0], [65.3, 69020.0], [65.4, 69020.0], [65.5, 69020.0], [65.6, 71097.0], [65.7, 71097.0], [65.8, 71097.0], [65.9, 71097.0], [66.0, 71097.0], [66.1, 71097.0], [66.2, 71097.0], [66.3, 71097.0], [66.4, 71099.0], [66.5, 71099.0], [66.6, 71099.0], [66.7, 71099.0], [66.8, 71099.0], [66.9, 71099.0], [67.0, 71099.0], [67.1, 71099.0], [67.2, 71099.0], [67.3, 71104.0], [67.4, 71104.0], [67.5, 71104.0], [67.6, 71104.0], [67.7, 71104.0], [67.8, 71104.0], [67.9, 71104.0], [68.0, 71104.0], [68.1, 71104.0], [68.2, 77241.0], [68.3, 77241.0], [68.4, 77241.0], [68.5, 77241.0], [68.6, 77241.0], [68.7, 77241.0], [68.8, 77241.0], [68.9, 77241.0], [69.0, 77241.0], [69.1, 77241.0], [69.2, 77241.0], [69.3, 77241.0], [69.4, 77241.0], [69.5, 77241.0], [69.6, 77241.0], [69.7, 77241.0], [69.8, 77241.0], [69.9, 77250.0], [70.0, 77250.0], [70.1, 77250.0], [70.2, 77250.0], [70.3, 77250.0], [70.4, 77250.0], [70.5, 77250.0], [70.6, 77250.0], [70.7, 83480.0], [70.8, 83480.0], [70.9, 83480.0], [71.0, 83480.0], [71.1, 83480.0], [71.2, 83480.0], [71.3, 83480.0], [71.4, 83480.0], [71.5, 83480.0], [71.6, 83481.0], [71.7, 83481.0], [71.8, 83481.0], [71.9, 83481.0], [72.0, 83481.0], [72.1, 83481.0], [72.2, 83481.0], [72.3, 83481.0], [72.4, 83481.0], [72.5, 83482.0], [72.6, 83482.0], [72.7, 83482.0], [72.8, 83482.0], [72.9, 83482.0], [73.0, 83482.0], [73.1, 83482.0], [73.2, 83482.0], [73.3, 89728.0], [73.4, 89728.0], [73.5, 89728.0], [73.6, 89728.0], [73.7, 89728.0], [73.8, 89728.0], [73.9, 89728.0], [74.0, 89728.0], [74.1, 89728.0], [74.2, 89737.0], [74.3, 89737.0], [74.4, 89737.0], [74.5, 89737.0], [74.6, 89737.0], [74.7, 89737.0], [74.8, 89737.0], [74.9, 89737.0], [75.0, 89738.0], [75.1, 89738.0], [75.2, 89738.0], [75.3, 89738.0], [75.4, 89738.0], [75.5, 89738.0], [75.6, 89738.0], [75.7, 89738.0], [75.8, 89738.0], [75.9, 95871.0], [76.0, 95871.0], [76.1, 95871.0], [76.2, 95871.0], [76.3, 95871.0], [76.4, 95871.0], [76.5, 95871.0], [76.6, 95871.0], [76.7, 95871.0], [76.8, 95871.0], [76.9, 95871.0], [77.0, 95871.0], [77.1, 95871.0], [77.2, 95871.0], [77.3, 95871.0], [77.4, 95871.0], [77.5, 95871.0], [77.6, 95873.0], [77.7, 95873.0], [77.8, 95873.0], [77.9, 95873.0], [78.0, 95873.0], [78.1, 95873.0], [78.2, 95873.0], [78.3, 95873.0], [78.4, 95873.0], [78.5, 102116.0], [78.6, 102116.0], [78.7, 102116.0], [78.8, 102116.0], [78.9, 102116.0], [79.0, 102116.0], [79.1, 102116.0], [79.2, 102116.0], [79.3, 102116.0], [79.4, 102130.0], [79.5, 102130.0], [79.6, 102130.0], [79.7, 102130.0], [79.8, 102130.0], [79.9, 102130.0], [80.0, 102130.0], [80.1, 102130.0], [80.2, 102131.0], [80.3, 102131.0], [80.4, 102131.0], [80.5, 102131.0], [80.6, 102131.0], [80.7, 102131.0], [80.8, 102131.0], [80.9, 102131.0], [81.0, 102131.0], [81.1, 108144.0], [81.2, 108144.0], [81.3, 108144.0], [81.4, 108144.0], [81.5, 108144.0], [81.6, 108144.0], [81.7, 108144.0], [81.8, 108144.0], [81.9, 108150.0], [82.0, 108150.0], [82.1, 108150.0], [82.2, 108150.0], [82.3, 108150.0], [82.4, 108150.0], [82.5, 108150.0], [82.6, 108150.0], [82.7, 108150.0], [82.8, 108153.0], [82.9, 108153.0], [83.0, 108153.0], [83.1, 108153.0], [83.2, 108153.0], [83.3, 108153.0], [83.4, 108153.0], [83.5, 108153.0], [83.6, 108153.0], [83.7, 114308.0], [83.8, 114308.0], [83.9, 114308.0], [84.0, 114308.0], [84.1, 114308.0], [84.2, 114308.0], [84.3, 114308.0], [84.4, 114308.0], [84.5, 114331.0], [84.6, 114331.0], [84.7, 114331.0], [84.8, 114331.0], [84.9, 114331.0], [85.0, 114331.0], [85.1, 114331.0], [85.2, 114331.0], [85.3, 114331.0], [85.4, 114332.0], [85.5, 114332.0], [85.6, 114332.0], [85.7, 114332.0], [85.8, 114332.0], [85.9, 114332.0], [86.0, 114332.0], [86.1, 114332.0], [86.2, 114332.0], [86.3, 120007.0], [86.4, 120007.0], [86.5, 120007.0], [86.6, 120007.0], [86.7, 120007.0], [86.8, 120007.0], [86.9, 120007.0], [87.0, 120007.0], [87.1, 120007.0], [87.2, 120007.0], [87.3, 120007.0], [87.4, 120007.0], [87.5, 120007.0], [87.6, 120007.0], [87.7, 120007.0], [87.8, 120007.0], [87.9, 120007.0], [88.0, 120008.0], [88.1, 120008.0], [88.2, 120008.0], [88.3, 120008.0], [88.4, 120008.0], [88.5, 120008.0], [88.6, 120008.0], [88.7, 120008.0], [88.8, 120008.0], [88.9, 120008.0], [89.0, 120008.0], [89.1, 120008.0], [89.2, 120008.0], [89.3, 120008.0], [89.4, 120008.0], [89.5, 120008.0], [89.6, 120008.0], [89.7, 120008.0], [89.8, 120008.0], [89.9, 120008.0], [90.0, 120008.0], [90.1, 120008.0], [90.2, 120008.0], [90.3, 120008.0], [90.4, 120008.0], [90.5, 120008.0], [90.6, 120008.0], [90.7, 120008.0], [90.8, 120008.0], [90.9, 120008.0], [91.0, 120008.0], [91.1, 120008.0], [91.2, 120008.0], [91.3, 120008.0], [91.4, 120008.0], [91.5, 120008.0], [91.6, 120008.0], [91.7, 120008.0], [91.8, 120008.0], [91.9, 120008.0], [92.0, 120008.0], [92.1, 120008.0], [92.2, 120008.0], [92.3, 120009.0], [92.4, 120009.0], [92.5, 120009.0], [92.6, 120009.0], [92.7, 120009.0], [92.8, 120009.0], [92.9, 120009.0], [93.0, 120009.0], [93.1, 120009.0], [93.2, 120009.0], [93.3, 120009.0], [93.4, 120009.0], [93.5, 120009.0], [93.6, 120009.0], [93.7, 120009.0], [93.8, 120009.0], [93.9, 120009.0], [94.0, 120021.0], [94.1, 120021.0], [94.2, 120021.0], [94.3, 120021.0], [94.4, 120021.0], [94.5, 120021.0], [94.6, 120021.0], [94.7, 120021.0], [94.8, 120021.0], [94.9, 120021.0], [95.0, 120021.0], [95.1, 120021.0], [95.2, 120021.0], [95.3, 120021.0], [95.4, 120021.0], [95.5, 120021.0], [95.6, 120021.0], [95.7, 120022.0], [95.8, 120022.0], [95.9, 120022.0], [96.0, 120022.0], [96.1, 120022.0], [96.2, 120022.0], [96.3, 120022.0], [96.4, 120022.0], [96.5, 120022.0], [96.6, 120024.0], [96.7, 120024.0], [96.8, 120024.0], [96.9, 120024.0], [97.0, 120024.0], [97.1, 120024.0], [97.2, 120024.0], [97.3, 120024.0], [97.4, 120024.0], [97.5, 120025.0], [97.6, 120025.0], [97.7, 120025.0], [97.8, 120025.0], [97.9, 120025.0], [98.0, 120025.0], [98.1, 120025.0], [98.2, 120025.0], [98.3, 120027.0], [98.4, 120027.0], [98.5, 120027.0], [98.6, 120027.0], [98.7, 120027.0], [98.8, 120027.0], [98.9, 120027.0], [99.0, 120027.0], [99.1, 120027.0], [99.2, 120035.0], [99.3, 120035.0], [99.4, 120035.0], [99.5, 120035.0], [99.6, 120035.0], [99.7, 120035.0], [99.8, 120035.0], [99.9, 120035.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 7400.0, "maxY": 16.0, "series": [{"data": [[8300.0, 1.0], [9100.0, 1.0], [8900.0, 6.0], [9000.0, 1.0], [9400.0, 1.0], [12000.0, 3.0], [12400.0, 3.0], [17000.0, 2.0], [18400.0, 1.0], [18500.0, 4.0], [18800.0, 2.0], [23200.0, 3.0], [29600.0, 3.0], [31300.0, 4.0], [31400.0, 2.0], [34500.0, 2.0], [35800.0, 1.0], [37700.0, 1.0], [37400.0, 1.0], [37500.0, 1.0], [40800.0, 3.0], [47100.0, 3.0], [53100.0, 3.0], [59400.0, 3.0], [62400.0, 1.0], [62500.0, 1.0], [62700.0, 1.0], [64800.0, 1.0], [65600.0, 1.0], [65700.0, 1.0], [69000.0, 4.0], [68900.0, 2.0], [71000.0, 2.0], [71100.0, 1.0], [77200.0, 3.0], [83400.0, 3.0], [89700.0, 3.0], [95800.0, 3.0], [102100.0, 3.0], [108100.0, 3.0], [114300.0, 3.0], [7400.0, 4.0], [7600.0, 1.0], [120000.0, 16.0], [7700.0, 1.0], [8100.0, 1.0], [8000.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 120000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 16.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 100.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 16.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.3333333333333333, "minX": 1.5891687E12, "maxY": 47.400000000000006, "series": [{"data": [[1.58916888E12, 47.400000000000006], [1.58916894E12, 16.741935483870964], [1.58916876E12, 6.720000000000001], [1.58916882E12, 42.66666666666666], [1.5891687E12, 1.3333333333333333]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58916894E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 7463.5, "minX": 1.0, "maxY": 120027.0, "series": [{"data": [[2.0, 7716.8], [32.0, 28590.11111111111], [34.0, 83481.0], [37.0, 77244.0], [38.0, 71097.0], [40.0, 71101.5], [43.0, 67629.0], [46.0, 66865.66666666667], [49.0, 66869.33333333333], [3.0, 120008.66666666667], [52.0, 64619.0], [55.0, 59452.333333333336], [58.0, 53181.333333333336], [61.0, 47167.0], [60.0, 47165.0], [4.0, 8722.75], [64.0, 35832.91666666667], [6.0, 120007.33333333333], [8.0, 11983.400000000001], [9.0, 120008.0], [10.0, 120021.0], [11.0, 120024.0], [12.0, 120021.0], [14.0, 120023.5], [15.0, 120027.0], [1.0, 7463.5], [16.0, 27379.4], [19.0, 114323.66666666667], [22.0, 108149.0], [24.0, 102130.5], [25.0, 102116.0], [28.0, 95871.66666666667], [31.0, 89734.33333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[28.146551724137932, 56102.37931034482]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 64.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 15.6, "minX": 1.5891687E12, "maxY": 31578.85, "series": [{"data": [[1.58916888E12, 156.0], [1.58916894E12, 626.5333333333333], [1.58916876E12, 130.0], [1.58916882E12, 140.4], [1.5891687E12, 15.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58916888E12, 31578.85], [1.58916894E12, 15789.45], [1.58916876E12, 26317.783333333333], [1.58916882E12, 28422.25], [1.5891687E12, 3158.7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58916894E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 7467.0, "minX": 1.5891687E12, "maxY": 111318.06451612902, "series": [{"data": [[1.58916888E12, 65760.79999999999], [1.58916894E12, 111318.06451612902], [1.58916876E12, 10811.480000000001], [1.58916882E12, 29314.962962962964], [1.5891687E12, 7467.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58916894E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 7466.0, "minX": 1.5891687E12, "maxY": 65760.79999999999, "series": [{"data": [[1.58916888E12, 65760.79999999999], [1.58916894E12, 49374.61290322581], [1.58916876E12, 10811.480000000001], [1.58916882E12, 29314.888888888887], [1.5891687E12, 7466.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58916894E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.8, "minX": 1.5891687E12, "maxY": 14.666666666666668, "series": [{"data": [[1.58916888E12, 5.8999999999999995], [1.58916894E12, 6.774193548387097], [1.58916876E12, 1.8], [1.58916882E12, 3.037037037037037], [1.5891687E12, 14.666666666666668]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58916894E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 7403.0, "minX": 1.5891687E12, "maxY": 114332.0, "series": [{"data": [[1.58916888E12, 83482.0], [1.58916894E12, 114332.0], [1.58916876E12, 18535.0], [1.58916882E12, 40825.0], [1.5891687E12, 7474.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58916888E12, 47165.0], [1.58916894E12, 89728.0], [1.58916876E12, 7403.0], [1.58916882E12, 12413.0], [1.5891687E12, 7455.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58916888E12, 82857.00000000001], [1.58916894E12, 114331.4], [1.58916876E12, 18477.4], [1.58916882E12, 40822.4], [1.5891687E12, 7474.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58916888E12, 83482.0], [1.58916894E12, 114332.0], [1.58916876E12, 18535.0], [1.58916882E12, 40825.0], [1.5891687E12, 7474.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58916888E12, 83481.45], [1.58916894E12, 114332.0], [1.58916876E12, 18535.0], [1.58916882E12, 40824.6], [1.5891687E12, 7474.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58916894E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 7703.0, "minX": 1.0, "maxY": 120024.0, "series": [{"data": [[1.0, 7703.0], [3.0, 43995.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[3.0, 120008.0], [7.0, 120024.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 43995.0, "series": [{"data": [[1.0, 7703.0], [3.0, 43995.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[3.0, 0.0], [7.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.5891687E12, "maxY": 1.2, "series": [{"data": [[1.58916876E12, 0.65], [1.58916882E12, 1.2], [1.5891687E12, 0.08333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58916882E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.5891687E12, "maxY": 0.5, "series": [{"data": [[1.58916888E12, 0.5], [1.58916894E12, 0.25], [1.58916876E12, 0.4166666666666667], [1.58916882E12, 0.45], [1.5891687E12, 0.05]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.58916894E12, 0.26666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58916894E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.5891687E12, "maxY": 0.5, "series": [{"data": [[1.58916888E12, 0.5], [1.58916894E12, 0.25], [1.58916876E12, 0.4166666666666667], [1.58916882E12, 0.45], [1.5891687E12, 0.05]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.58916894E12, 0.26666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58916894E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.5891687E12, "maxY": 0.5, "series": [{"data": [[1.58916888E12, 0.5], [1.58916894E12, 0.25], [1.58916876E12, 0.4166666666666667], [1.58916882E12, 0.45], [1.5891687E12, 0.05]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.58916894E12, 0.26666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58916894E12, "title": "Total Transactions Per Second"}},
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

