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
        data: {"result": {"minY": 4822.0, "minX": 0.0, "maxY": 120004.0, "series": [{"data": [[0.0, 4822.0], [0.1, 4822.0], [0.2, 4822.0], [0.3, 4822.0], [0.4, 4822.0], [0.5, 4822.0], [0.6, 5054.0], [0.7, 5054.0], [0.8, 5054.0], [0.9, 5054.0], [1.0, 5054.0], [1.1, 5115.0], [1.2, 5115.0], [1.3, 5115.0], [1.4, 5115.0], [1.5, 5115.0], [1.6, 5115.0], [1.7, 5222.0], [1.8, 5222.0], [1.9, 5222.0], [2.0, 5222.0], [2.1, 5222.0], [2.2, 5630.0], [2.3, 5630.0], [2.4, 5630.0], [2.5, 5630.0], [2.6, 5630.0], [2.7, 5703.0], [2.8, 5703.0], [2.9, 5703.0], [3.0, 5703.0], [3.1, 5703.0], [3.2, 5703.0], [3.3, 7182.0], [3.4, 7182.0], [3.5, 7182.0], [3.6, 7182.0], [3.7, 7182.0], [3.8, 7219.0], [3.9, 7219.0], [4.0, 7219.0], [4.1, 7219.0], [4.2, 7219.0], [4.3, 7268.0], [4.4, 7268.0], [4.5, 7268.0], [4.6, 7268.0], [4.7, 7268.0], [4.8, 7268.0], [4.9, 7268.0], [5.0, 7268.0], [5.1, 7268.0], [5.2, 7268.0], [5.3, 7268.0], [5.4, 7269.0], [5.5, 7269.0], [5.6, 7269.0], [5.7, 7269.0], [5.8, 7269.0], [5.9, 7370.0], [6.0, 7370.0], [6.1, 7370.0], [6.2, 7370.0], [6.3, 7370.0], [6.4, 7370.0], [6.5, 7383.0], [6.6, 7383.0], [6.7, 7383.0], [6.8, 7383.0], [6.9, 7383.0], [7.0, 7421.0], [7.1, 7421.0], [7.2, 7421.0], [7.3, 7421.0], [7.4, 7421.0], [7.5, 7463.0], [7.6, 7463.0], [7.7, 7463.0], [7.8, 7463.0], [7.9, 7463.0], [8.0, 7463.0], [8.1, 7476.0], [8.2, 7476.0], [8.3, 7476.0], [8.4, 7476.0], [8.5, 7476.0], [8.6, 7491.0], [8.7, 7491.0], [8.8, 7491.0], [8.9, 7491.0], [9.0, 7491.0], [9.1, 7599.0], [9.2, 7599.0], [9.3, 7599.0], [9.4, 7599.0], [9.5, 7599.0], [9.6, 7599.0], [9.7, 7634.0], [9.8, 7634.0], [9.9, 7634.0], [10.0, 7634.0], [10.1, 7634.0], [10.2, 7784.0], [10.3, 7784.0], [10.4, 7784.0], [10.5, 7784.0], [10.6, 7784.0], [10.7, 7784.0], [10.8, 7784.0], [10.9, 7784.0], [11.0, 7784.0], [11.1, 7784.0], [11.2, 7784.0], [11.3, 7785.0], [11.4, 7785.0], [11.5, 7785.0], [11.6, 7785.0], [11.7, 7785.0], [11.8, 7986.0], [11.9, 7986.0], [12.0, 7986.0], [12.1, 7986.0], [12.2, 7986.0], [12.3, 7986.0], [12.4, 7986.0], [12.5, 7986.0], [12.6, 7986.0], [12.7, 7986.0], [12.8, 7986.0], [12.9, 7986.0], [13.0, 7986.0], [13.1, 7986.0], [13.2, 7986.0], [13.3, 7986.0], [13.4, 7986.0], [13.5, 7986.0], [13.6, 7986.0], [13.7, 7986.0], [13.8, 7986.0], [13.9, 7986.0], [14.0, 7986.0], [14.1, 7986.0], [14.2, 7986.0], [14.3, 7986.0], [14.4, 7986.0], [14.5, 8068.0], [14.6, 8068.0], [14.7, 8068.0], [14.8, 8068.0], [14.9, 8068.0], [15.0, 8170.0], [15.1, 8170.0], [15.2, 8170.0], [15.3, 8170.0], [15.4, 8170.0], [15.5, 8170.0], [15.6, 8175.0], [15.7, 8175.0], [15.8, 8175.0], [15.9, 8175.0], [16.0, 8175.0], [16.1, 8177.0], [16.2, 8177.0], [16.3, 8177.0], [16.4, 8177.0], [16.5, 8177.0], [16.6, 8191.0], [16.7, 8191.0], [16.8, 8191.0], [16.9, 8191.0], [17.0, 8191.0], [17.1, 8191.0], [17.2, 8191.0], [17.3, 8191.0], [17.4, 8191.0], [17.5, 8191.0], [17.6, 8191.0], [17.7, 8294.0], [17.8, 8294.0], [17.9, 8294.0], [18.0, 8294.0], [18.1, 8294.0], [18.2, 8294.0], [18.3, 8294.0], [18.4, 8294.0], [18.5, 8294.0], [18.6, 8294.0], [18.7, 8294.0], [18.8, 8474.0], [18.9, 8474.0], [19.0, 8474.0], [19.1, 8474.0], [19.2, 8474.0], [19.3, 8704.0], [19.4, 8704.0], [19.5, 8704.0], [19.6, 8704.0], [19.7, 8704.0], [19.8, 8704.0], [19.9, 8704.0], [20.0, 8704.0], [20.1, 8704.0], [20.2, 8704.0], [20.3, 8704.0], [20.4, 8705.0], [20.5, 8705.0], [20.6, 8705.0], [20.7, 8705.0], [20.8, 8705.0], [20.9, 8860.0], [21.0, 8860.0], [21.1, 8860.0], [21.2, 8860.0], [21.3, 8860.0], [21.4, 8861.0], [21.5, 8861.0], [21.6, 8861.0], [21.7, 8861.0], [21.8, 8861.0], [21.9, 8861.0], [22.0, 8861.0], [22.1, 8861.0], [22.2, 8861.0], [22.3, 8861.0], [22.4, 8861.0], [22.5, 9219.0], [22.6, 9219.0], [22.7, 9219.0], [22.8, 9219.0], [22.9, 9219.0], [23.0, 9527.0], [23.1, 9527.0], [23.2, 9527.0], [23.3, 9527.0], [23.4, 9527.0], [23.5, 9527.0], [23.6, 9717.0], [23.7, 9717.0], [23.8, 9717.0], [23.9, 9717.0], [24.0, 9717.0], [24.1, 9717.0], [24.2, 9717.0], [24.3, 9717.0], [24.4, 9717.0], [24.5, 9717.0], [24.6, 9776.0], [24.7, 9776.0], [24.8, 9776.0], [24.9, 9776.0], [25.0, 9776.0], [25.1, 9776.0], [25.2, 9778.0], [25.3, 9778.0], [25.4, 9778.0], [25.5, 9778.0], [25.6, 9778.0], [25.7, 9803.0], [25.8, 9803.0], [25.9, 9803.0], [26.0, 9803.0], [26.1, 9803.0], [26.2, 9803.0], [26.3, 9804.0], [26.4, 9804.0], [26.5, 9804.0], [26.6, 9804.0], [26.7, 9804.0], [26.8, 9826.0], [26.9, 9826.0], [27.0, 9826.0], [27.1, 9826.0], [27.2, 9826.0], [27.3, 10040.0], [27.4, 10040.0], [27.5, 10040.0], [27.6, 10040.0], [27.7, 10040.0], [27.8, 10040.0], [27.9, 10395.0], [28.0, 10395.0], [28.1, 10395.0], [28.2, 10395.0], [28.3, 10395.0], [28.4, 10395.0], [28.5, 10395.0], [28.6, 10395.0], [28.7, 10395.0], [28.8, 10395.0], [28.9, 10396.0], [29.0, 10396.0], [29.1, 10396.0], [29.2, 10396.0], [29.3, 10396.0], [29.4, 10396.0], [29.5, 10643.0], [29.6, 10643.0], [29.7, 10643.0], [29.8, 10643.0], [29.9, 10643.0], [30.0, 10643.0], [30.1, 10643.0], [30.2, 10643.0], [30.3, 10643.0], [30.4, 10643.0], [30.5, 10711.0], [30.6, 10711.0], [30.7, 10711.0], [30.8, 10711.0], [30.9, 10711.0], [31.0, 10711.0], [31.1, 10711.0], [31.2, 10711.0], [31.3, 10711.0], [31.4, 10711.0], [31.5, 10711.0], [31.6, 11046.0], [31.7, 11046.0], [31.8, 11046.0], [31.9, 11046.0], [32.0, 11046.0], [32.1, 11254.0], [32.2, 11254.0], [32.3, 11254.0], [32.4, 11254.0], [32.5, 11254.0], [32.6, 11254.0], [32.7, 11259.0], [32.8, 11259.0], [32.9, 11259.0], [33.0, 11259.0], [33.1, 11259.0], [33.2, 11701.0], [33.3, 11701.0], [33.4, 11701.0], [33.5, 11701.0], [33.6, 11701.0], [33.7, 11701.0], [33.8, 11701.0], [33.9, 11701.0], [34.0, 11701.0], [34.1, 11701.0], [34.2, 11701.0], [34.3, 11703.0], [34.4, 11703.0], [34.5, 11703.0], [34.6, 11703.0], [34.7, 11703.0], [34.8, 11799.0], [34.9, 11799.0], [35.0, 11799.0], [35.1, 11799.0], [35.2, 11799.0], [35.3, 11800.0], [35.4, 11800.0], [35.5, 11800.0], [35.6, 11800.0], [35.7, 11800.0], [35.8, 11800.0], [35.9, 11802.0], [36.0, 11802.0], [36.1, 11802.0], [36.2, 11802.0], [36.3, 11802.0], [36.4, 11891.0], [36.5, 11891.0], [36.6, 11891.0], [36.7, 11891.0], [36.8, 11891.0], [36.9, 11892.0], [37.0, 11892.0], [37.1, 11892.0], [37.2, 11892.0], [37.3, 11892.0], [37.4, 11892.0], [37.5, 11892.0], [37.6, 11892.0], [37.7, 11892.0], [37.8, 11892.0], [37.9, 11892.0], [38.0, 11933.0], [38.1, 11933.0], [38.2, 11933.0], [38.3, 11933.0], [38.4, 11933.0], [38.5, 11933.0], [38.6, 11979.0], [38.7, 11979.0], [38.8, 11979.0], [38.9, 11979.0], [39.0, 11979.0], [39.1, 12542.0], [39.2, 12542.0], [39.3, 12542.0], [39.4, 12542.0], [39.5, 12542.0], [39.6, 12545.0], [39.7, 12545.0], [39.8, 12545.0], [39.9, 12545.0], [40.0, 12545.0], [40.1, 12545.0], [40.2, 12547.0], [40.3, 12547.0], [40.4, 12547.0], [40.5, 12547.0], [40.6, 12547.0], [40.7, 13848.0], [40.8, 13848.0], [40.9, 13848.0], [41.0, 13848.0], [41.1, 13848.0], [41.2, 13849.0], [41.3, 13849.0], [41.4, 13849.0], [41.5, 13849.0], [41.6, 13849.0], [41.7, 13849.0], [41.8, 15384.0], [41.9, 15384.0], [42.0, 15384.0], [42.1, 15384.0], [42.2, 15384.0], [42.3, 15387.0], [42.4, 15387.0], [42.5, 15387.0], [42.6, 15387.0], [42.7, 15387.0], [42.8, 15390.0], [42.9, 15390.0], [43.0, 15390.0], [43.1, 15390.0], [43.2, 15390.0], [43.3, 15390.0], [43.4, 16181.0], [43.5, 16181.0], [43.6, 16181.0], [43.7, 16181.0], [43.8, 16181.0], [43.9, 16276.0], [44.0, 16276.0], [44.1, 16276.0], [44.2, 16276.0], [44.3, 16276.0], [44.4, 16793.0], [44.5, 16793.0], [44.6, 16793.0], [44.7, 16793.0], [44.8, 16793.0], [44.9, 16793.0], [45.0, 16793.0], [45.1, 16793.0], [45.2, 16793.0], [45.3, 16793.0], [45.4, 16793.0], [45.5, 16919.0], [45.6, 16919.0], [45.7, 16919.0], [45.8, 16919.0], [45.9, 16919.0], [46.0, 16921.0], [46.1, 16921.0], [46.2, 16921.0], [46.3, 16921.0], [46.4, 16921.0], [46.5, 16921.0], [46.6, 16923.0], [46.7, 16923.0], [46.8, 16923.0], [46.9, 16923.0], [47.0, 16923.0], [47.1, 17033.0], [47.2, 17033.0], [47.3, 17033.0], [47.4, 17033.0], [47.5, 17033.0], [47.6, 17033.0], [47.7, 17033.0], [47.8, 17033.0], [47.9, 17033.0], [48.0, 17033.0], [48.1, 17033.0], [48.2, 17319.0], [48.3, 17319.0], [48.4, 17319.0], [48.5, 17319.0], [48.6, 17319.0], [48.7, 17611.0], [48.8, 17611.0], [48.9, 17611.0], [49.0, 17611.0], [49.1, 17611.0], [49.2, 17613.0], [49.3, 17613.0], [49.4, 17613.0], [49.5, 17613.0], [49.6, 17613.0], [49.7, 17613.0], [49.8, 17614.0], [49.9, 17614.0], [50.0, 17614.0], [50.1, 17614.0], [50.2, 17614.0], [50.3, 17919.0], [50.4, 17919.0], [50.5, 17919.0], [50.6, 17919.0], [50.7, 17919.0], [50.8, 17919.0], [50.9, 18235.0], [51.0, 18235.0], [51.1, 18235.0], [51.2, 18235.0], [51.3, 18235.0], [51.4, 18247.0], [51.5, 18247.0], [51.6, 18247.0], [51.7, 18247.0], [51.8, 18247.0], [51.9, 18249.0], [52.0, 18249.0], [52.1, 18249.0], [52.2, 18249.0], [52.3, 18249.0], [52.4, 18249.0], [52.5, 18327.0], [52.6, 18327.0], [52.7, 18327.0], [52.8, 18327.0], [52.9, 18327.0], [53.0, 18572.0], [53.1, 18572.0], [53.2, 18572.0], [53.3, 18572.0], [53.4, 18572.0], [53.5, 18640.0], [53.6, 18640.0], [53.7, 18640.0], [53.8, 18640.0], [53.9, 18640.0], [54.0, 18640.0], [54.1, 18640.0], [54.2, 18640.0], [54.3, 18640.0], [54.4, 18640.0], [54.5, 18640.0], [54.6, 18927.0], [54.7, 18927.0], [54.8, 18927.0], [54.9, 18927.0], [55.0, 18927.0], [55.1, 18927.0], [55.2, 18927.0], [55.3, 18927.0], [55.4, 18927.0], [55.5, 18927.0], [55.6, 18927.0], [55.7, 19247.0], [55.8, 19247.0], [55.9, 19247.0], [56.0, 19247.0], [56.1, 19247.0], [56.2, 19248.0], [56.3, 19248.0], [56.4, 19248.0], [56.5, 19248.0], [56.6, 19248.0], [56.7, 19363.0], [56.8, 19363.0], [56.9, 19363.0], [57.0, 19363.0], [57.1, 19363.0], [57.2, 19363.0], [57.3, 19364.0], [57.4, 19364.0], [57.5, 19364.0], [57.6, 19364.0], [57.7, 19364.0], [57.8, 19490.0], [57.9, 19490.0], [58.0, 19490.0], [58.1, 19490.0], [58.2, 19490.0], [58.3, 19561.0], [58.4, 19561.0], [58.5, 19561.0], [58.6, 19561.0], [58.7, 19561.0], [58.8, 19561.0], [58.9, 19574.0], [59.0, 19574.0], [59.1, 19574.0], [59.2, 19574.0], [59.3, 19574.0], [59.4, 19581.0], [59.5, 19581.0], [59.6, 19581.0], [59.7, 19581.0], [59.8, 19581.0], [59.9, 19734.0], [60.0, 19734.0], [60.1, 19734.0], [60.2, 19734.0], [60.3, 19734.0], [60.4, 19734.0], [60.5, 19734.0], [60.6, 19734.0], [60.7, 19734.0], [60.8, 19734.0], [60.9, 19734.0], [61.0, 19966.0], [61.1, 19966.0], [61.2, 19966.0], [61.3, 19966.0], [61.4, 19966.0], [61.5, 20151.0], [61.6, 20151.0], [61.7, 20151.0], [61.8, 20151.0], [61.9, 20151.0], [62.0, 20151.0], [62.1, 20258.0], [62.2, 20258.0], [62.3, 20258.0], [62.4, 20258.0], [62.5, 20258.0], [62.6, 20781.0], [62.7, 20781.0], [62.8, 20781.0], [62.9, 20781.0], [63.0, 20781.0], [63.1, 20781.0], [63.2, 20783.0], [63.3, 20783.0], [63.4, 20783.0], [63.5, 20783.0], [63.6, 20783.0], [63.7, 20785.0], [63.8, 20785.0], [63.9, 20785.0], [64.0, 20785.0], [64.1, 20785.0], [64.2, 20787.0], [64.3, 20787.0], [64.4, 20787.0], [64.5, 20787.0], [64.6, 20787.0], [64.7, 20787.0], [64.8, 20822.0], [64.9, 20822.0], [65.0, 20822.0], [65.1, 20822.0], [65.2, 20822.0], [65.3, 20823.0], [65.4, 20823.0], [65.5, 20823.0], [65.6, 20823.0], [65.7, 20823.0], [65.8, 20963.0], [65.9, 20963.0], [66.0, 20963.0], [66.1, 20963.0], [66.2, 20963.0], [66.3, 20963.0], [66.4, 20964.0], [66.5, 20964.0], [66.6, 20964.0], [66.7, 20964.0], [66.8, 20964.0], [66.9, 20964.0], [67.0, 20964.0], [67.1, 20964.0], [67.2, 20964.0], [67.3, 20964.0], [67.4, 23950.0], [67.5, 23950.0], [67.6, 23950.0], [67.7, 23950.0], [67.8, 23950.0], [67.9, 23950.0], [68.0, 23950.0], [68.1, 23950.0], [68.2, 23950.0], [68.3, 23950.0], [68.4, 23950.0], [68.5, 23950.0], [68.6, 23950.0], [68.7, 23950.0], [68.8, 23950.0], [68.9, 23950.0], [69.0, 25999.0], [69.1, 25999.0], [69.2, 25999.0], [69.3, 25999.0], [69.4, 25999.0], [69.5, 25999.0], [69.6, 25999.0], [69.7, 25999.0], [69.8, 25999.0], [69.9, 25999.0], [70.0, 25999.0], [70.1, 25999.0], [70.2, 25999.0], [70.3, 25999.0], [70.4, 25999.0], [70.5, 25999.0], [70.6, 27328.0], [70.7, 27328.0], [70.8, 27328.0], [70.9, 27328.0], [71.0, 27328.0], [71.1, 27328.0], [71.2, 27329.0], [71.3, 27329.0], [71.4, 27329.0], [71.5, 27329.0], [71.6, 27329.0], [71.7, 27331.0], [71.8, 27331.0], [71.9, 27331.0], [72.0, 27331.0], [72.1, 27331.0], [72.2, 28570.0], [72.3, 28570.0], [72.4, 28570.0], [72.5, 28570.0], [72.6, 28570.0], [72.7, 28570.0], [72.8, 28570.0], [72.9, 28570.0], [73.0, 28570.0], [73.1, 28570.0], [73.2, 28570.0], [73.3, 28572.0], [73.4, 28572.0], [73.5, 28572.0], [73.6, 28572.0], [73.7, 28572.0], [73.8, 31220.0], [73.9, 31220.0], [74.0, 31220.0], [74.1, 31220.0], [74.2, 31220.0], [74.3, 31220.0], [74.4, 31220.0], [74.5, 31220.0], [74.6, 31220.0], [74.7, 31220.0], [74.8, 31220.0], [74.9, 31221.0], [75.0, 31221.0], [75.1, 31221.0], [75.2, 31221.0], [75.3, 31221.0], [75.4, 31221.0], [75.5, 33207.0], [75.6, 33207.0], [75.7, 33207.0], [75.8, 33207.0], [75.9, 33207.0], [76.0, 33210.0], [76.1, 33210.0], [76.2, 33210.0], [76.3, 33210.0], [76.4, 33210.0], [76.5, 33215.0], [76.6, 33215.0], [76.7, 33215.0], [76.8, 33215.0], [76.9, 33215.0], [77.0, 33215.0], [77.1, 34579.0], [77.2, 34579.0], [77.3, 34579.0], [77.4, 34579.0], [77.5, 34579.0], [77.6, 34580.0], [77.7, 34580.0], [77.8, 34580.0], [77.9, 34580.0], [78.0, 34580.0], [78.1, 34581.0], [78.2, 34581.0], [78.3, 34581.0], [78.4, 34581.0], [78.5, 34581.0], [78.6, 34581.0], [78.7, 35812.0], [78.8, 35812.0], [78.9, 35812.0], [79.0, 35812.0], [79.1, 35812.0], [79.2, 35813.0], [79.3, 35813.0], [79.4, 35813.0], [79.5, 35813.0], [79.6, 35813.0], [79.7, 35826.0], [79.8, 35826.0], [79.9, 35826.0], [80.0, 35826.0], [80.1, 35826.0], [80.2, 35826.0], [80.3, 37596.0], [80.4, 37596.0], [80.5, 37596.0], [80.6, 37596.0], [80.7, 37596.0], [80.8, 37596.0], [80.9, 37596.0], [81.0, 37596.0], [81.1, 37596.0], [81.2, 37596.0], [81.3, 37597.0], [81.4, 37597.0], [81.5, 37597.0], [81.6, 37597.0], [81.7, 37597.0], [81.8, 37597.0], [81.9, 37607.0], [82.0, 37607.0], [82.1, 37607.0], [82.2, 37607.0], [82.3, 37607.0], [82.4, 37607.0], [82.5, 37607.0], [82.6, 37607.0], [82.7, 37607.0], [82.8, 37607.0], [82.9, 37607.0], [83.0, 37607.0], [83.1, 37607.0], [83.2, 37607.0], [83.3, 37607.0], [83.4, 37607.0], [83.5, 37682.0], [83.6, 37682.0], [83.7, 37682.0], [83.8, 37682.0], [83.9, 37682.0], [84.0, 37683.0], [84.1, 37683.0], [84.2, 37683.0], [84.3, 37683.0], [84.4, 37683.0], [84.5, 37684.0], [84.6, 37684.0], [84.7, 37684.0], [84.8, 37684.0], [84.9, 37684.0], [85.0, 37684.0], [85.1, 37722.0], [85.2, 37722.0], [85.3, 37722.0], [85.4, 37722.0], [85.5, 37722.0], [85.6, 37722.0], [85.7, 37722.0], [85.8, 37722.0], [85.9, 37722.0], [86.0, 37722.0], [86.1, 37724.0], [86.2, 37724.0], [86.3, 37724.0], [86.4, 37724.0], [86.5, 37724.0], [86.6, 37724.0], [86.7, 37751.0], [86.8, 37751.0], [86.9, 37751.0], [87.0, 37751.0], [87.1, 37751.0], [87.2, 37751.0], [87.3, 37751.0], [87.4, 37751.0], [87.5, 37751.0], [87.6, 37751.0], [87.7, 37751.0], [87.8, 37751.0], [87.9, 37751.0], [88.0, 37751.0], [88.1, 37751.0], [88.2, 37751.0], [88.3, 37879.0], [88.4, 37879.0], [88.5, 37879.0], [88.6, 37879.0], [88.7, 37879.0], [88.8, 37881.0], [88.9, 37881.0], [89.0, 37881.0], [89.1, 37881.0], [89.2, 37881.0], [89.3, 37881.0], [89.4, 37881.0], [89.5, 37881.0], [89.6, 37881.0], [89.7, 37881.0], [89.8, 37881.0], [89.9, 37955.0], [90.0, 37955.0], [90.1, 37955.0], [90.2, 37955.0], [90.3, 37955.0], [90.4, 37955.0], [90.5, 37955.0], [90.6, 37955.0], [90.7, 37955.0], [90.8, 37955.0], [90.9, 37955.0], [91.0, 37955.0], [91.1, 37955.0], [91.2, 37955.0], [91.3, 37955.0], [91.4, 37955.0], [91.5, 37987.0], [91.6, 37987.0], [91.7, 37987.0], [91.8, 37987.0], [91.9, 37987.0], [92.0, 37987.0], [92.1, 37987.0], [92.2, 37987.0], [92.3, 37987.0], [92.4, 37987.0], [92.5, 37987.0], [92.6, 37987.0], [92.7, 37987.0], [92.8, 37987.0], [92.9, 37987.0], [93.0, 37987.0], [93.1, 38001.0], [93.2, 38001.0], [93.3, 38001.0], [93.4, 38001.0], [93.5, 38001.0], [93.6, 38001.0], [93.7, 38001.0], [93.8, 38001.0], [93.9, 38001.0], [94.0, 38001.0], [94.1, 38001.0], [94.2, 38001.0], [94.3, 38001.0], [94.4, 38001.0], [94.5, 38001.0], [94.6, 38001.0], [94.7, 38231.0], [94.8, 38231.0], [94.9, 38231.0], [95.0, 38231.0], [95.1, 38231.0], [95.2, 38233.0], [95.3, 38233.0], [95.4, 38233.0], [95.5, 38233.0], [95.6, 38233.0], [95.7, 38233.0], [95.8, 38238.0], [95.9, 38238.0], [96.0, 38238.0], [96.1, 38238.0], [96.2, 38238.0], [96.3, 38811.0], [96.4, 38811.0], [96.5, 38811.0], [96.6, 38811.0], [96.7, 38811.0], [96.8, 38811.0], [96.9, 38811.0], [97.0, 38811.0], [97.1, 38811.0], [97.2, 38811.0], [97.3, 38811.0], [97.4, 38811.0], [97.5, 38811.0], [97.6, 38811.0], [97.7, 38811.0], [97.8, 38811.0], [97.9, 38905.0], [98.0, 38905.0], [98.1, 38905.0], [98.2, 38905.0], [98.3, 38905.0], [98.4, 38908.0], [98.5, 38908.0], [98.6, 38908.0], [98.7, 38908.0], [98.8, 38908.0], [98.9, 38908.0], [99.0, 38908.0], [99.1, 38908.0], [99.2, 38908.0], [99.3, 38908.0], [99.4, 38908.0], [99.5, 120004.0], [99.6, 120004.0], [99.7, 120004.0], [99.8, 120004.0], [99.9, 120004.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 4800.0, "maxY": 6.0, "series": [{"data": [[4800.0, 1.0], [5100.0, 1.0], [5000.0, 1.0], [5200.0, 1.0], [5600.0, 1.0], [5700.0, 1.0], [7100.0, 1.0], [7400.0, 4.0], [7300.0, 2.0], [7200.0, 4.0], [7600.0, 1.0], [7500.0, 1.0], [7700.0, 3.0], [7900.0, 5.0], [8000.0, 1.0], [8100.0, 5.0], [8700.0, 3.0], [8200.0, 2.0], [8400.0, 1.0], [9200.0, 1.0], [8800.0, 3.0], [9500.0, 1.0], [9700.0, 4.0], [9800.0, 3.0], [10000.0, 1.0], [10300.0, 3.0], [10700.0, 2.0], [10600.0, 2.0], [11200.0, 2.0], [11000.0, 1.0], [11700.0, 4.0], [11900.0, 2.0], [11800.0, 5.0], [12500.0, 3.0], [13800.0, 2.0], [15300.0, 3.0], [16200.0, 1.0], [16100.0, 1.0], [16900.0, 3.0], [17300.0, 1.0], [17000.0, 2.0], [16700.0, 2.0], [18200.0, 3.0], [17600.0, 3.0], [17900.0, 1.0], [18300.0, 1.0], [19400.0, 1.0], [19200.0, 2.0], [19300.0, 2.0], [18500.0, 1.0], [18600.0, 2.0], [18900.0, 2.0], [19500.0, 3.0], [19900.0, 1.0], [20200.0, 1.0], [19700.0, 2.0], [20100.0, 1.0], [20700.0, 4.0], [20800.0, 2.0], [20900.0, 3.0], [23900.0, 3.0], [25900.0, 3.0], [27300.0, 3.0], [28500.0, 3.0], [31200.0, 3.0], [33200.0, 3.0], [34500.0, 3.0], [35800.0, 3.0], [38800.0, 3.0], [38200.0, 3.0], [37700.0, 6.0], [37600.0, 6.0], [38000.0, 3.0], [37800.0, 3.0], [37900.0, 6.0], [38900.0, 3.0], [37500.0, 3.0], [120000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 120000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 186.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 186.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.58917044E12, "maxY": 41.74999999999999, "series": [{"data": [[1.5891705E12, 26.400000000000002], [1.58917056E12, 41.74999999999999], [1.58917044E12, 4.0]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917056E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 7299.375, "minX": 1.0, "maxY": 120004.0, "series": [{"data": [[2.0, 7447.2], [32.0, 13615.375], [34.0, 37751.0], [37.0, 38234.0], [40.0, 35817.0], [43.0, 34580.0], [46.0, 33210.666666666664], [49.0, 31220.333333333332], [3.0, 37607.0], [52.0, 28570.666666666668], [55.0, 27328.0], [54.0, 27330.0], [58.0, 25999.0], [61.0, 23950.0], [4.0, 7299.375], [64.0, 19066.527777777785], [6.0, 37596.333333333336], [8.0, 7772.166666666667], [9.0, 37987.0], [11.0, 38908.0], [12.0, 38905.0], [15.0, 37955.0], [1.0, 7851.0], [16.0, 9567.28], [18.0, 37880.333333333336], [21.0, 38001.0], [22.0, 120004.0], [25.0, 38811.0], [28.0, 37722.666666666664], [30.0, 37682.0], [31.0, 37683.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[31.347593582887708, 20443.540106951863]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 64.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 98.8, "minX": 1.58917044E12, "maxY": 91578.8, "series": [{"data": [[1.5891705E12, 416.0], [1.58917056E12, 486.68333333333334], [1.58917044E12, 98.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5891705E12, 84214.26666666666], [1.58917056E12, 91578.8], [1.58917044E12, 19999.833333333332]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917056E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 7388.894736842106, "minX": 1.58917044E12, "maxY": 30871.909090909096, "series": [{"data": [[1.5891705E12, 12072.8125], [1.58917056E12, 30871.909090909096], [1.58917044E12, 7388.894736842106]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58917056E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 7388.684210526317, "minX": 1.58917044E12, "maxY": 29508.21590909091, "series": [{"data": [[1.5891705E12, 12072.75], [1.58917056E12, 29508.21590909091], [1.58917044E12, 7388.684210526317]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58917056E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2.962500000000001, "minX": 1.58917044E12, "maxY": 4.263157894736842, "series": [{"data": [[1.5891705E12, 2.962500000000001], [1.58917056E12, 3.6363636363636362], [1.58917044E12, 4.263157894736842]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58917056E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4822.0, "minX": 1.58917044E12, "maxY": 38908.0, "series": [{"data": [[1.5891705E12, 20823.0], [1.58917056E12, 38908.0], [1.58917044E12, 9219.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5891705E12, 4822.0], [1.58917056E12, 16181.0], [1.58917044E12, 5222.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5891705E12, 19572.7], [1.58917056E12, 38231.4], [1.58917044E12, 8068.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5891705E12, 20823.0], [1.58917056E12, 38908.0], [1.58917044E12, 9219.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5891705E12, 20784.9], [1.58917056E12, 38811.0], [1.58917044E12, 9219.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917056E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 7463.0, "minX": 1.0, "maxY": 120004.0, "series": [{"data": [[1.0, 7463.0], [2.0, 13848.5], [3.0, 18640.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 120004.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 18640.0, "series": [{"data": [[1.0, 7463.0], [2.0, 13848.5], [3.0, 18640.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.58917038E12, "maxY": 2.2666666666666666, "series": [{"data": [[1.5891705E12, 2.2666666666666666], [1.58917038E12, 0.016666666666666666], [1.58917056E12, 0.4], [1.58917044E12, 0.43333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917056E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.58917044E12, "maxY": 1.45, "series": [{"data": [[1.5891705E12, 1.3333333333333333], [1.58917056E12, 1.45], [1.58917044E12, 0.31666666666666665]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.58917056E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917056E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.58917044E12, "maxY": 1.45, "series": [{"data": [[1.5891705E12, 1.3333333333333333], [1.58917056E12, 1.45], [1.58917044E12, 0.31666666666666665]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.58917056E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58917056E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.58917044E12, "maxY": 1.45, "series": [{"data": [[1.5891705E12, 1.3333333333333333], [1.58917056E12, 1.45], [1.58917044E12, 0.31666666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.58917056E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58917056E12, "title": "Total Transactions Per Second"}},
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

