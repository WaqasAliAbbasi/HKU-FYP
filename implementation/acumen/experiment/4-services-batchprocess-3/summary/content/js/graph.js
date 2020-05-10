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
        data: {"result": {"minY": 3815.0, "minX": 0.0, "maxY": 12493.0, "series": [{"data": [[0.0, 3815.0], [0.1, 3815.0], [0.2, 3815.0], [0.3, 3815.0], [0.4, 3815.0], [0.5, 5372.0], [0.6, 5372.0], [0.7, 5372.0], [0.8, 5372.0], [0.9, 5372.0], [1.0, 5838.0], [1.1, 5838.0], [1.2, 5838.0], [1.3, 5838.0], [1.4, 5838.0], [1.5, 6567.0], [1.6, 6567.0], [1.7, 6567.0], [1.8, 6567.0], [1.9, 6567.0], [2.0, 6608.0], [2.1, 6608.0], [2.2, 6608.0], [2.3, 6608.0], [2.4, 6608.0], [2.5, 6850.0], [2.6, 6850.0], [2.7, 6850.0], [2.8, 6850.0], [2.9, 6850.0], [3.0, 7115.0], [3.1, 7115.0], [3.2, 7115.0], [3.3, 7115.0], [3.4, 7115.0], [3.5, 7824.0], [3.6, 7824.0], [3.7, 7824.0], [3.8, 7824.0], [3.9, 7824.0], [4.0, 7827.0], [4.1, 7827.0], [4.2, 7827.0], [4.3, 7827.0], [4.4, 7827.0], [4.5, 8048.0], [4.6, 8048.0], [4.7, 8048.0], [4.8, 8048.0], [4.9, 8048.0], [5.0, 8192.0], [5.1, 8192.0], [5.2, 8192.0], [5.3, 8192.0], [5.4, 8192.0], [5.5, 8192.0], [5.6, 8192.0], [5.7, 8192.0], [5.8, 8192.0], [5.9, 8192.0], [6.0, 8193.0], [6.1, 8193.0], [6.2, 8193.0], [6.3, 8193.0], [6.4, 8193.0], [6.5, 8320.0], [6.6, 8320.0], [6.7, 8320.0], [6.8, 8320.0], [6.9, 8320.0], [7.0, 8322.0], [7.1, 8322.0], [7.2, 8322.0], [7.3, 8322.0], [7.4, 8322.0], [7.5, 8342.0], [7.6, 8342.0], [7.7, 8342.0], [7.8, 8342.0], [7.9, 8342.0], [8.0, 8342.0], [8.1, 8342.0], [8.2, 8342.0], [8.3, 8342.0], [8.4, 8342.0], [8.5, 8355.0], [8.6, 8355.0], [8.7, 8355.0], [8.8, 8355.0], [8.9, 8355.0], [9.0, 8356.0], [9.1, 8356.0], [9.2, 8356.0], [9.3, 8356.0], [9.4, 8356.0], [9.5, 8394.0], [9.6, 8394.0], [9.7, 8394.0], [9.8, 8394.0], [9.9, 8394.0], [10.0, 8394.0], [10.1, 8394.0], [10.2, 8394.0], [10.3, 8394.0], [10.4, 8394.0], [10.5, 8551.0], [10.6, 8551.0], [10.7, 8551.0], [10.8, 8551.0], [10.9, 8551.0], [11.0, 8551.0], [11.1, 8551.0], [11.2, 8551.0], [11.3, 8551.0], [11.4, 8551.0], [11.5, 8601.0], [11.6, 8601.0], [11.7, 8601.0], [11.8, 8601.0], [11.9, 8601.0], [12.0, 8602.0], [12.1, 8602.0], [12.2, 8602.0], [12.3, 8602.0], [12.4, 8602.0], [12.5, 8603.0], [12.6, 8603.0], [12.7, 8603.0], [12.8, 8603.0], [12.9, 8603.0], [13.0, 8604.0], [13.1, 8604.0], [13.2, 8604.0], [13.3, 8604.0], [13.4, 8604.0], [13.5, 8697.0], [13.6, 8697.0], [13.7, 8697.0], [13.8, 8697.0], [13.9, 8697.0], [14.0, 8698.0], [14.1, 8698.0], [14.2, 8698.0], [14.3, 8698.0], [14.4, 8698.0], [14.5, 8699.0], [14.6, 8699.0], [14.7, 8699.0], [14.8, 8699.0], [14.9, 8699.0], [15.0, 8700.0], [15.1, 8700.0], [15.2, 8700.0], [15.3, 8700.0], [15.4, 8700.0], [15.5, 8702.0], [15.6, 8702.0], [15.7, 8702.0], [15.8, 8702.0], [15.9, 8702.0], [16.0, 8703.0], [16.1, 8703.0], [16.2, 8703.0], [16.3, 8703.0], [16.4, 8703.0], [16.5, 8705.0], [16.6, 8705.0], [16.7, 8705.0], [16.8, 8705.0], [16.9, 8705.0], [17.0, 8705.0], [17.1, 8705.0], [17.2, 8705.0], [17.3, 8705.0], [17.4, 8705.0], [17.5, 8782.0], [17.6, 8782.0], [17.7, 8782.0], [17.8, 8782.0], [17.9, 8782.0], [18.0, 8782.0], [18.1, 8782.0], [18.2, 8782.0], [18.3, 8782.0], [18.4, 8782.0], [18.5, 8783.0], [18.6, 8783.0], [18.7, 8783.0], [18.8, 8783.0], [18.9, 8783.0], [19.0, 8789.0], [19.1, 8789.0], [19.2, 8789.0], [19.3, 8789.0], [19.4, 8789.0], [19.5, 8791.0], [19.6, 8791.0], [19.7, 8791.0], [19.8, 8791.0], [19.9, 8791.0], [20.0, 8804.0], [20.1, 8804.0], [20.2, 8804.0], [20.3, 8804.0], [20.4, 8903.0], [20.5, 8903.0], [20.6, 8903.0], [20.7, 8903.0], [20.8, 8903.0], [20.9, 8904.0], [21.0, 8904.0], [21.1, 8904.0], [21.2, 8904.0], [21.3, 8904.0], [21.4, 8907.0], [21.5, 8907.0], [21.6, 8907.0], [21.7, 8907.0], [21.8, 8907.0], [21.9, 8907.0], [22.0, 8907.0], [22.1, 8907.0], [22.2, 8907.0], [22.3, 8907.0], [22.4, 8908.0], [22.5, 8908.0], [22.6, 8908.0], [22.7, 8908.0], [22.8, 8908.0], [22.9, 8908.0], [23.0, 8908.0], [23.1, 8908.0], [23.2, 8908.0], [23.3, 8908.0], [23.4, 8940.0], [23.5, 8940.0], [23.6, 8940.0], [23.7, 8940.0], [23.8, 8940.0], [23.9, 8940.0], [24.0, 8940.0], [24.1, 8940.0], [24.2, 8940.0], [24.3, 8940.0], [24.4, 8960.0], [24.5, 8960.0], [24.6, 8960.0], [24.7, 8960.0], [24.8, 8960.0], [24.9, 8961.0], [25.0, 8961.0], [25.1, 8961.0], [25.2, 8961.0], [25.3, 8961.0], [25.4, 8971.0], [25.5, 8971.0], [25.6, 8971.0], [25.7, 8971.0], [25.8, 8971.0], [25.9, 8988.0], [26.0, 8988.0], [26.1, 8988.0], [26.2, 8988.0], [26.3, 8988.0], [26.4, 8988.0], [26.5, 8988.0], [26.6, 8988.0], [26.7, 8988.0], [26.8, 8988.0], [26.9, 9012.0], [27.0, 9012.0], [27.1, 9012.0], [27.2, 9012.0], [27.3, 9012.0], [27.4, 9012.0], [27.5, 9012.0], [27.6, 9012.0], [27.7, 9012.0], [27.8, 9012.0], [27.9, 9021.0], [28.0, 9021.0], [28.1, 9021.0], [28.2, 9021.0], [28.3, 9021.0], [28.4, 9021.0], [28.5, 9021.0], [28.6, 9021.0], [28.7, 9021.0], [28.8, 9021.0], [28.9, 9021.0], [29.0, 9021.0], [29.1, 9021.0], [29.2, 9021.0], [29.3, 9021.0], [29.4, 9120.0], [29.5, 9120.0], [29.6, 9120.0], [29.7, 9120.0], [29.8, 9120.0], [29.9, 9121.0], [30.0, 9121.0], [30.1, 9121.0], [30.2, 9121.0], [30.3, 9121.0], [30.4, 9233.0], [30.5, 9233.0], [30.6, 9233.0], [30.7, 9233.0], [30.8, 9233.0], [30.9, 9234.0], [31.0, 9234.0], [31.1, 9234.0], [31.2, 9234.0], [31.3, 9234.0], [31.4, 9298.0], [31.5, 9298.0], [31.6, 9298.0], [31.7, 9298.0], [31.8, 9298.0], [31.9, 9299.0], [32.0, 9299.0], [32.1, 9299.0], [32.2, 9299.0], [32.3, 9299.0], [32.4, 9313.0], [32.5, 9313.0], [32.6, 9313.0], [32.7, 9313.0], [32.8, 9313.0], [32.9, 9314.0], [33.0, 9314.0], [33.1, 9314.0], [33.2, 9314.0], [33.3, 9314.0], [33.4, 9318.0], [33.5, 9318.0], [33.6, 9318.0], [33.7, 9318.0], [33.8, 9318.0], [33.9, 9318.0], [34.0, 9318.0], [34.1, 9318.0], [34.2, 9318.0], [34.3, 9318.0], [34.4, 9320.0], [34.5, 9320.0], [34.6, 9320.0], [34.7, 9320.0], [34.8, 9320.0], [34.9, 9320.0], [35.0, 9320.0], [35.1, 9320.0], [35.2, 9320.0], [35.3, 9320.0], [35.4, 9321.0], [35.5, 9321.0], [35.6, 9321.0], [35.7, 9321.0], [35.8, 9321.0], [35.9, 9322.0], [36.0, 9322.0], [36.1, 9322.0], [36.2, 9322.0], [36.3, 9322.0], [36.4, 9331.0], [36.5, 9331.0], [36.6, 9331.0], [36.7, 9331.0], [36.8, 9331.0], [36.9, 9414.0], [37.0, 9414.0], [37.1, 9414.0], [37.2, 9414.0], [37.3, 9414.0], [37.4, 9414.0], [37.5, 9414.0], [37.6, 9414.0], [37.7, 9414.0], [37.8, 9414.0], [37.9, 9416.0], [38.0, 9416.0], [38.1, 9416.0], [38.2, 9416.0], [38.3, 9416.0], [38.4, 9417.0], [38.5, 9417.0], [38.6, 9417.0], [38.7, 9417.0], [38.8, 9417.0], [38.9, 9419.0], [39.0, 9419.0], [39.1, 9419.0], [39.2, 9419.0], [39.3, 9419.0], [39.4, 9425.0], [39.5, 9425.0], [39.6, 9425.0], [39.7, 9425.0], [39.8, 9425.0], [39.9, 9425.0], [40.0, 9425.0], [40.1, 9425.0], [40.2, 9425.0], [40.3, 9426.0], [40.4, 9426.0], [40.5, 9426.0], [40.6, 9426.0], [40.7, 9426.0], [40.8, 9426.0], [40.9, 9426.0], [41.0, 9426.0], [41.1, 9426.0], [41.2, 9426.0], [41.3, 9507.0], [41.4, 9507.0], [41.5, 9507.0], [41.6, 9507.0], [41.7, 9507.0], [41.8, 9524.0], [41.9, 9524.0], [42.0, 9524.0], [42.1, 9524.0], [42.2, 9524.0], [42.3, 9524.0], [42.4, 9524.0], [42.5, 9524.0], [42.6, 9524.0], [42.7, 9524.0], [42.8, 9533.0], [42.9, 9533.0], [43.0, 9533.0], [43.1, 9533.0], [43.2, 9533.0], [43.3, 9552.0], [43.4, 9552.0], [43.5, 9552.0], [43.6, 9552.0], [43.7, 9552.0], [43.8, 9562.0], [43.9, 9562.0], [44.0, 9562.0], [44.1, 9562.0], [44.2, 9562.0], [44.3, 9610.0], [44.4, 9610.0], [44.5, 9610.0], [44.6, 9610.0], [44.7, 9610.0], [44.8, 9611.0], [44.9, 9611.0], [45.0, 9611.0], [45.1, 9611.0], [45.2, 9611.0], [45.3, 9612.0], [45.4, 9612.0], [45.5, 9612.0], [45.6, 9612.0], [45.7, 9612.0], [45.8, 9625.0], [45.9, 9625.0], [46.0, 9625.0], [46.1, 9625.0], [46.2, 9625.0], [46.3, 9625.0], [46.4, 9625.0], [46.5, 9625.0], [46.6, 9625.0], [46.7, 9625.0], [46.8, 9628.0], [46.9, 9628.0], [47.0, 9628.0], [47.1, 9628.0], [47.2, 9628.0], [47.3, 9628.0], [47.4, 9628.0], [47.5, 9628.0], [47.6, 9628.0], [47.7, 9628.0], [47.8, 9677.0], [47.9, 9677.0], [48.0, 9677.0], [48.1, 9677.0], [48.2, 9677.0], [48.3, 9677.0], [48.4, 9677.0], [48.5, 9677.0], [48.6, 9677.0], [48.7, 9677.0], [48.8, 9723.0], [48.9, 9723.0], [49.0, 9723.0], [49.1, 9723.0], [49.2, 9723.0], [49.3, 9724.0], [49.4, 9724.0], [49.5, 9724.0], [49.6, 9724.0], [49.7, 9724.0], [49.8, 9724.0], [49.9, 9724.0], [50.0, 9724.0], [50.1, 9724.0], [50.2, 9724.0], [50.3, 9725.0], [50.4, 9725.0], [50.5, 9725.0], [50.6, 9725.0], [50.7, 9725.0], [50.8, 9726.0], [50.9, 9726.0], [51.0, 9726.0], [51.1, 9726.0], [51.2, 9726.0], [51.3, 9726.0], [51.4, 9726.0], [51.5, 9726.0], [51.6, 9726.0], [51.7, 9726.0], [51.8, 9729.0], [51.9, 9729.0], [52.0, 9729.0], [52.1, 9729.0], [52.2, 9729.0], [52.3, 9729.0], [52.4, 9729.0], [52.5, 9729.0], [52.6, 9729.0], [52.7, 9729.0], [52.8, 9730.0], [52.9, 9730.0], [53.0, 9730.0], [53.1, 9730.0], [53.2, 9730.0], [53.3, 9730.0], [53.4, 9730.0], [53.5, 9730.0], [53.6, 9730.0], [53.7, 9730.0], [53.8, 9730.0], [53.9, 9730.0], [54.0, 9730.0], [54.1, 9730.0], [54.2, 9730.0], [54.3, 9730.0], [54.4, 9730.0], [54.5, 9730.0], [54.6, 9730.0], [54.7, 9730.0], [54.8, 9730.0], [54.9, 9730.0], [55.0, 9730.0], [55.1, 9730.0], [55.2, 9730.0], [55.3, 9732.0], [55.4, 9732.0], [55.5, 9732.0], [55.6, 9732.0], [55.7, 9732.0], [55.8, 9732.0], [55.9, 9732.0], [56.0, 9732.0], [56.1, 9732.0], [56.2, 9732.0], [56.3, 9736.0], [56.4, 9736.0], [56.5, 9736.0], [56.6, 9736.0], [56.7, 9736.0], [56.8, 9736.0], [56.9, 9736.0], [57.0, 9736.0], [57.1, 9736.0], [57.2, 9736.0], [57.3, 9828.0], [57.4, 9828.0], [57.5, 9828.0], [57.6, 9828.0], [57.7, 9828.0], [57.8, 9828.0], [57.9, 9828.0], [58.0, 9828.0], [58.1, 9828.0], [58.2, 9828.0], [58.3, 9828.0], [58.4, 9828.0], [58.5, 9828.0], [58.6, 9828.0], [58.7, 9828.0], [58.8, 9829.0], [58.9, 9829.0], [59.0, 9829.0], [59.1, 9829.0], [59.2, 9829.0], [59.3, 9832.0], [59.4, 9832.0], [59.5, 9832.0], [59.6, 9832.0], [59.7, 9832.0], [59.8, 9832.0], [59.9, 9832.0], [60.0, 9832.0], [60.1, 9832.0], [60.2, 9844.0], [60.3, 9844.0], [60.4, 9844.0], [60.5, 9844.0], [60.6, 9844.0], [60.7, 9844.0], [60.8, 9844.0], [60.9, 9844.0], [61.0, 9844.0], [61.1, 9844.0], [61.2, 9850.0], [61.3, 9850.0], [61.4, 9850.0], [61.5, 9850.0], [61.6, 9850.0], [61.7, 9851.0], [61.8, 9851.0], [61.9, 9851.0], [62.0, 9851.0], [62.1, 9851.0], [62.2, 9907.0], [62.3, 9907.0], [62.4, 9907.0], [62.5, 9907.0], [62.6, 9907.0], [62.7, 9907.0], [62.8, 9907.0], [62.9, 9907.0], [63.0, 9907.0], [63.1, 9907.0], [63.2, 9927.0], [63.3, 9927.0], [63.4, 9927.0], [63.5, 9927.0], [63.6, 9927.0], [63.7, 9928.0], [63.8, 9928.0], [63.9, 9928.0], [64.0, 9928.0], [64.1, 9928.0], [64.2, 9931.0], [64.3, 9931.0], [64.4, 9931.0], [64.5, 9931.0], [64.6, 9931.0], [64.7, 9931.0], [64.8, 9931.0], [64.9, 9931.0], [65.0, 9931.0], [65.1, 9931.0], [65.2, 10097.0], [65.3, 10097.0], [65.4, 10097.0], [65.5, 10097.0], [65.6, 10097.0], [65.7, 10130.0], [65.8, 10130.0], [65.9, 10130.0], [66.0, 10130.0], [66.1, 10130.0], [66.2, 10131.0], [66.3, 10131.0], [66.4, 10131.0], [66.5, 10131.0], [66.6, 10131.0], [66.7, 10137.0], [66.8, 10137.0], [66.9, 10137.0], [67.0, 10137.0], [67.1, 10137.0], [67.2, 10138.0], [67.3, 10138.0], [67.4, 10138.0], [67.5, 10138.0], [67.6, 10138.0], [67.7, 10341.0], [67.8, 10341.0], [67.9, 10341.0], [68.0, 10341.0], [68.1, 10341.0], [68.2, 10342.0], [68.3, 10342.0], [68.4, 10342.0], [68.5, 10342.0], [68.6, 10342.0], [68.7, 10444.0], [68.8, 10444.0], [68.9, 10444.0], [69.0, 10444.0], [69.1, 10444.0], [69.2, 10555.0], [69.3, 10555.0], [69.4, 10555.0], [69.5, 10555.0], [69.6, 10555.0], [69.7, 10555.0], [69.8, 10555.0], [69.9, 10555.0], [70.0, 10555.0], [70.1, 10555.0], [70.2, 10604.0], [70.3, 10604.0], [70.4, 10604.0], [70.5, 10604.0], [70.6, 10604.0], [70.7, 10626.0], [70.8, 10626.0], [70.9, 10626.0], [71.0, 10626.0], [71.1, 10626.0], [71.2, 10645.0], [71.3, 10645.0], [71.4, 10645.0], [71.5, 10645.0], [71.6, 10645.0], [71.7, 10751.0], [71.8, 10751.0], [71.9, 10751.0], [72.0, 10751.0], [72.1, 10751.0], [72.2, 10831.0], [72.3, 10831.0], [72.4, 10831.0], [72.5, 10831.0], [72.6, 10831.0], [72.7, 10854.0], [72.8, 10854.0], [72.9, 10854.0], [73.0, 10854.0], [73.1, 10854.0], [73.2, 10946.0], [73.3, 10946.0], [73.4, 10946.0], [73.5, 10946.0], [73.6, 10946.0], [73.7, 10954.0], [73.8, 10954.0], [73.9, 10954.0], [74.0, 10954.0], [74.1, 10954.0], [74.2, 10955.0], [74.3, 10955.0], [74.4, 10955.0], [74.5, 10955.0], [74.6, 10955.0], [74.7, 10956.0], [74.8, 10956.0], [74.9, 10956.0], [75.0, 10956.0], [75.1, 10956.0], [75.2, 10956.0], [75.3, 10956.0], [75.4, 10956.0], [75.5, 10956.0], [75.6, 10956.0], [75.7, 11008.0], [75.8, 11008.0], [75.9, 11008.0], [76.0, 11008.0], [76.1, 11008.0], [76.2, 11043.0], [76.3, 11043.0], [76.4, 11043.0], [76.5, 11043.0], [76.6, 11043.0], [76.7, 11057.0], [76.8, 11057.0], [76.9, 11057.0], [77.0, 11057.0], [77.1, 11057.0], [77.2, 11060.0], [77.3, 11060.0], [77.4, 11060.0], [77.5, 11060.0], [77.6, 11060.0], [77.7, 11060.0], [77.8, 11060.0], [77.9, 11060.0], [78.0, 11060.0], [78.1, 11060.0], [78.2, 11060.0], [78.3, 11060.0], [78.4, 11060.0], [78.5, 11060.0], [78.6, 11060.0], [78.7, 11063.0], [78.8, 11063.0], [78.9, 11063.0], [79.0, 11063.0], [79.1, 11063.0], [79.2, 11088.0], [79.3, 11088.0], [79.4, 11088.0], [79.5, 11088.0], [79.6, 11088.0], [79.7, 11159.0], [79.8, 11159.0], [79.9, 11159.0], [80.0, 11159.0], [80.1, 11159.0], [80.2, 11159.0], [80.3, 11159.0], [80.4, 11159.0], [80.5, 11159.0], [80.6, 11159.0], [80.7, 11159.0], [80.8, 11159.0], [80.9, 11159.0], [81.0, 11159.0], [81.1, 11160.0], [81.2, 11160.0], [81.3, 11160.0], [81.4, 11160.0], [81.5, 11160.0], [81.6, 11208.0], [81.7, 11208.0], [81.8, 11208.0], [81.9, 11208.0], [82.0, 11208.0], [82.1, 11239.0], [82.2, 11239.0], [82.3, 11239.0], [82.4, 11239.0], [82.5, 11239.0], [82.6, 11260.0], [82.7, 11260.0], [82.8, 11260.0], [82.9, 11260.0], [83.0, 11260.0], [83.1, 11260.0], [83.2, 11260.0], [83.3, 11260.0], [83.4, 11260.0], [83.5, 11260.0], [83.6, 11264.0], [83.7, 11264.0], [83.8, 11264.0], [83.9, 11264.0], [84.0, 11264.0], [84.1, 11266.0], [84.2, 11266.0], [84.3, 11266.0], [84.4, 11266.0], [84.5, 11266.0], [84.6, 11268.0], [84.7, 11268.0], [84.8, 11268.0], [84.9, 11268.0], [85.0, 11268.0], [85.1, 11273.0], [85.2, 11273.0], [85.3, 11273.0], [85.4, 11273.0], [85.5, 11273.0], [85.6, 11275.0], [85.7, 11275.0], [85.8, 11275.0], [85.9, 11275.0], [86.0, 11275.0], [86.1, 11287.0], [86.2, 11287.0], [86.3, 11287.0], [86.4, 11287.0], [86.5, 11287.0], [86.6, 11442.0], [86.7, 11442.0], [86.8, 11442.0], [86.9, 11442.0], [87.0, 11442.0], [87.1, 11443.0], [87.2, 11443.0], [87.3, 11443.0], [87.4, 11443.0], [87.5, 11443.0], [87.6, 11444.0], [87.7, 11444.0], [87.8, 11444.0], [87.9, 11444.0], [88.0, 11444.0], [88.1, 11460.0], [88.2, 11460.0], [88.3, 11460.0], [88.4, 11460.0], [88.5, 11460.0], [88.6, 11469.0], [88.7, 11469.0], [88.8, 11469.0], [88.9, 11469.0], [89.0, 11469.0], [89.1, 11484.0], [89.2, 11484.0], [89.3, 11484.0], [89.4, 11484.0], [89.5, 11484.0], [89.6, 11567.0], [89.7, 11567.0], [89.8, 11567.0], [89.9, 11567.0], [90.0, 11567.0], [90.1, 11571.0], [90.2, 11571.0], [90.3, 11571.0], [90.4, 11571.0], [90.5, 11571.0], [90.6, 11571.0], [90.7, 11571.0], [90.8, 11571.0], [90.9, 11571.0], [91.0, 11571.0], [91.1, 11572.0], [91.2, 11572.0], [91.3, 11572.0], [91.4, 11572.0], [91.5, 11572.0], [91.6, 11583.0], [91.7, 11583.0], [91.8, 11583.0], [91.9, 11583.0], [92.0, 11583.0], [92.1, 11676.0], [92.2, 11676.0], [92.3, 11676.0], [92.4, 11676.0], [92.5, 11676.0], [92.6, 11776.0], [92.7, 11776.0], [92.8, 11776.0], [92.9, 11776.0], [93.0, 11776.0], [93.1, 11778.0], [93.2, 11778.0], [93.3, 11778.0], [93.4, 11778.0], [93.5, 11778.0], [93.6, 11899.0], [93.7, 11899.0], [93.8, 11899.0], [93.9, 11899.0], [94.0, 11899.0], [94.1, 11977.0], [94.2, 11977.0], [94.3, 11977.0], [94.4, 11977.0], [94.5, 11977.0], [94.6, 11979.0], [94.7, 11979.0], [94.8, 11979.0], [94.9, 11979.0], [95.0, 11979.0], [95.1, 11979.0], [95.2, 11979.0], [95.3, 11979.0], [95.4, 11979.0], [95.5, 11979.0], [95.6, 11979.0], [95.7, 11979.0], [95.8, 11979.0], [95.9, 11979.0], [96.0, 11979.0], [96.1, 11995.0], [96.2, 11995.0], [96.3, 11995.0], [96.4, 11995.0], [96.5, 11995.0], [96.6, 12052.0], [96.7, 12052.0], [96.8, 12052.0], [96.9, 12052.0], [97.0, 12052.0], [97.1, 12080.0], [97.2, 12080.0], [97.3, 12080.0], [97.4, 12080.0], [97.5, 12080.0], [97.6, 12183.0], [97.7, 12183.0], [97.8, 12183.0], [97.9, 12183.0], [98.0, 12183.0], [98.1, 12279.0], [98.2, 12279.0], [98.3, 12279.0], [98.4, 12279.0], [98.5, 12279.0], [98.6, 12338.0], [98.7, 12338.0], [98.8, 12338.0], [98.9, 12338.0], [99.0, 12338.0], [99.1, 12390.0], [99.2, 12390.0], [99.3, 12390.0], [99.4, 12390.0], [99.5, 12390.0], [99.6, 12493.0], [99.7, 12493.0], [99.8, 12493.0], [99.9, 12493.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 3800.0, "maxY": 17.0, "series": [{"data": [[3800.0, 1.0], [5300.0, 1.0], [5800.0, 1.0], [6500.0, 1.0], [6600.0, 1.0], [6800.0, 1.0], [7100.0, 1.0], [7800.0, 2.0], [8000.0, 1.0], [8100.0, 3.0], [8300.0, 8.0], [8500.0, 2.0], [8700.0, 10.0], [8600.0, 7.0], [8900.0, 13.0], [9000.0, 5.0], [8800.0, 1.0], [9200.0, 4.0], [9100.0, 2.0], [9500.0, 6.0], [9400.0, 9.0], [9300.0, 9.0], [9600.0, 9.0], [9700.0, 17.0], [10000.0, 1.0], [10100.0, 4.0], [9800.0, 10.0], [9900.0, 6.0], [10600.0, 3.0], [10500.0, 2.0], [10700.0, 1.0], [10300.0, 2.0], [10400.0, 1.0], [11200.0, 10.0], [10900.0, 5.0], [11000.0, 8.0], [11100.0, 4.0], [10800.0, 2.0], [11400.0, 6.0], [11500.0, 5.0], [11700.0, 2.0], [11600.0, 1.0], [11900.0, 5.0], [11800.0, 1.0], [12000.0, 2.0], [12100.0, 1.0], [12200.0, 1.0], [12300.0, 2.0], [12400.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 201.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 201.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 201.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.58913006E12, "maxY": 16.0, "series": [{"data": [[1.58913006E12, 1.6666666666666667], [1.58913018E12, 16.0], [1.58913012E12, 11.359999999999998], [1.58913024E12, 13.79591836734694]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58913024E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 8272.29411764706, "minX": 1.0, "maxY": 10409.333333333334, "series": [{"data": [[1.0, 10409.333333333334], [2.0, 9488.0], [4.0, 8451.0], [8.0, 8272.29411764706], [16.0, 10062.826923076922], [10.0, 9465.0], [3.0, 9425.0], [13.0, 10210.0], [7.0, 9113.666666666666], [15.0, 9736.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[13.880597014925373, 9804.084577114429]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 16.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 31.2, "minX": 1.58913006E12, "maxY": 101055.7, "series": [{"data": [[1.58913006E12, 31.2], [1.58913018E12, 499.2], [1.58913012E12, 260.0], [1.58913024E12, 254.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58913006E12, 6315.95], [1.58913018E12, 101055.7], [1.58913012E12, 52634.666666666664], [1.58913024E12, 51584.03333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58913024E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 9129.199999999999, "minX": 1.58913006E12, "maxY": 10065.21875, "series": [{"data": [[1.58913006E12, 9483.5], [1.58913018E12, 10065.21875], [1.58913012E12, 9129.199999999999], [1.58913024E12, 10020.387755102041]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58913024E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 9129.159999999998, "minX": 1.58913006E12, "maxY": 10065.197916666666, "series": [{"data": [[1.58913006E12, 9483.166666666666], [1.58913018E12, 10065.197916666666], [1.58913012E12, 9129.159999999998], [1.58913024E12, 10020.367346938776]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58913024E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.877551020408163, "minX": 1.58913006E12, "maxY": 6.666666666666666, "series": [{"data": [[1.58913006E12, 6.666666666666666], [1.58913018E12, 2.072916666666667], [1.58913012E12, 2.0599999999999996], [1.58913024E12, 1.877551020408163]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58913024E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3815.0, "minX": 1.58913006E12, "maxY": 12493.0, "series": [{"data": [[1.58913006E12, 9562.0], [1.58913018E12, 12338.0], [1.58913012E12, 12493.0], [1.58913024E12, 12279.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58913006E12, 9331.0], [1.58913018E12, 8699.0], [1.58913012E12, 3815.0], [1.58913024E12, 8601.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58913006E12, 9562.0], [1.58913018E12, 11508.9], [1.58913012E12, 11925.5], [1.58913024E12, 11977.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58913006E12, 9562.0], [1.58913018E12, 12338.0], [1.58913012E12, 12493.0], [1.58913024E12, 12279.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58913006E12, 9562.0], [1.58913018E12, 11691.0], [1.58913012E12, 12163.949999999999], [1.58913024E12, 12131.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58913024E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 8355.5, "minX": 1.0, "maxY": 9729.0, "series": [{"data": [[1.0, 9520.0], [4.0, 8355.5], [3.0, 9729.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 8355.5, "minX": 1.0, "maxY": 9729.0, "series": [{"data": [[1.0, 9519.0], [4.0, 8355.5], [3.0, 9729.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.58913006E12, "maxY": 1.6, "series": [{"data": [[1.58913006E12, 0.13333333333333333], [1.58913018E12, 1.6], [1.58913012E12, 1.0666666666666667], [1.58913024E12, 0.55]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58913024E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.58913006E12, "maxY": 1.6, "series": [{"data": [[1.58913006E12, 0.1], [1.58913018E12, 1.6], [1.58913012E12, 0.8333333333333334], [1.58913024E12, 0.8166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58913024E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.58913006E12, "maxY": 1.6, "series": [{"data": [[1.58913006E12, 0.1], [1.58913018E12, 1.6], [1.58913012E12, 0.8333333333333334], [1.58913024E12, 0.8166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58913024E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.58913006E12, "maxY": 1.6, "series": [{"data": [[1.58913006E12, 0.1], [1.58913018E12, 1.6], [1.58913012E12, 0.8333333333333334], [1.58913024E12, 0.8166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58913024E12, "title": "Total Transactions Per Second"}},
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

