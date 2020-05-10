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
        data: {"result": {"minY": 9474.0, "minX": 0.0, "maxY": 42290.0, "series": [{"data": [[0.0, 9474.0], [0.1, 9474.0], [0.2, 9474.0], [0.3, 9474.0], [0.4, 9474.0], [0.5, 9474.0], [0.6, 9474.0], [0.7, 9474.0], [0.8, 9474.0], [0.9, 9474.0], [1.0, 9474.0], [1.1, 9474.0], [1.2, 9474.0], [1.3, 9602.0], [1.4, 9602.0], [1.5, 9602.0], [1.6, 9602.0], [1.7, 9602.0], [1.8, 9602.0], [1.9, 9602.0], [2.0, 9602.0], [2.1, 9602.0], [2.2, 9602.0], [2.3, 9602.0], [2.4, 9602.0], [2.5, 9641.0], [2.6, 9641.0], [2.7, 9641.0], [2.8, 9641.0], [2.9, 9641.0], [3.0, 9641.0], [3.1, 9641.0], [3.2, 9641.0], [3.3, 9641.0], [3.4, 9641.0], [3.5, 9641.0], [3.6, 9641.0], [3.7, 9685.0], [3.8, 9685.0], [3.9, 9685.0], [4.0, 9685.0], [4.1, 9685.0], [4.2, 9685.0], [4.3, 9685.0], [4.4, 9685.0], [4.5, 9685.0], [4.6, 9685.0], [4.7, 9685.0], [4.8, 9685.0], [4.9, 10127.0], [5.0, 10127.0], [5.1, 10127.0], [5.2, 10127.0], [5.3, 10127.0], [5.4, 10127.0], [5.5, 10127.0], [5.6, 10127.0], [5.7, 10127.0], [5.8, 10127.0], [5.9, 10127.0], [6.0, 10127.0], [6.1, 10286.0], [6.2, 10286.0], [6.3, 10286.0], [6.4, 10286.0], [6.5, 10286.0], [6.6, 10286.0], [6.7, 10286.0], [6.8, 10286.0], [6.9, 10286.0], [7.0, 10286.0], [7.1, 10286.0], [7.2, 10286.0], [7.3, 10286.0], [7.4, 10394.0], [7.5, 10394.0], [7.6, 10394.0], [7.7, 10394.0], [7.8, 10394.0], [7.9, 10394.0], [8.0, 10394.0], [8.1, 10394.0], [8.2, 10394.0], [8.3, 10394.0], [8.4, 10394.0], [8.5, 10394.0], [8.6, 12594.0], [8.7, 12594.0], [8.8, 12594.0], [8.9, 12594.0], [9.0, 12594.0], [9.1, 12594.0], [9.2, 12594.0], [9.3, 12594.0], [9.4, 12594.0], [9.5, 12594.0], [9.6, 12594.0], [9.7, 12594.0], [9.8, 12596.0], [9.9, 12596.0], [10.0, 12596.0], [10.1, 12596.0], [10.2, 12596.0], [10.3, 12596.0], [10.4, 12596.0], [10.5, 12596.0], [10.6, 12596.0], [10.7, 12596.0], [10.8, 12596.0], [10.9, 12596.0], [11.0, 12672.0], [11.1, 12672.0], [11.2, 12672.0], [11.3, 12672.0], [11.4, 12672.0], [11.5, 12672.0], [11.6, 12672.0], [11.7, 12672.0], [11.8, 12672.0], [11.9, 12672.0], [12.0, 12672.0], [12.1, 12672.0], [12.2, 13410.0], [12.3, 13410.0], [12.4, 13410.0], [12.5, 13410.0], [12.6, 13410.0], [12.7, 13410.0], [12.8, 13410.0], [12.9, 13410.0], [13.0, 13410.0], [13.1, 13410.0], [13.2, 13410.0], [13.3, 13410.0], [13.4, 13410.0], [13.5, 13511.0], [13.6, 13511.0], [13.7, 13511.0], [13.8, 13511.0], [13.9, 13511.0], [14.0, 13511.0], [14.1, 13511.0], [14.2, 13511.0], [14.3, 13511.0], [14.4, 13511.0], [14.5, 13511.0], [14.6, 13511.0], [14.7, 13511.0], [14.8, 13511.0], [14.9, 13511.0], [15.0, 13511.0], [15.1, 13511.0], [15.2, 13511.0], [15.3, 13511.0], [15.4, 13511.0], [15.5, 13511.0], [15.6, 13511.0], [15.7, 13511.0], [15.8, 13511.0], [15.9, 13685.0], [16.0, 13685.0], [16.1, 13685.0], [16.2, 13685.0], [16.3, 13685.0], [16.4, 13685.0], [16.5, 13685.0], [16.6, 13685.0], [16.7, 13685.0], [16.8, 13685.0], [16.9, 13685.0], [17.0, 13685.0], [17.1, 13686.0], [17.2, 13686.0], [17.3, 13686.0], [17.4, 13686.0], [17.5, 13686.0], [17.6, 13686.0], [17.7, 13686.0], [17.8, 13686.0], [17.9, 13686.0], [18.0, 13686.0], [18.1, 13686.0], [18.2, 13686.0], [18.3, 13688.0], [18.4, 13688.0], [18.5, 13688.0], [18.6, 13688.0], [18.7, 13688.0], [18.8, 13688.0], [18.9, 13688.0], [19.0, 13688.0], [19.1, 13688.0], [19.2, 13688.0], [19.3, 13688.0], [19.4, 13688.0], [19.5, 13688.0], [19.6, 14749.0], [19.7, 14749.0], [19.8, 14749.0], [19.9, 14749.0], [20.0, 14749.0], [20.1, 14749.0], [20.2, 14749.0], [20.3, 14749.0], [20.4, 14749.0], [20.5, 14749.0], [20.6, 14749.0], [20.7, 14749.0], [20.8, 17099.0], [20.9, 17099.0], [21.0, 17099.0], [21.1, 17099.0], [21.2, 17099.0], [21.3, 17099.0], [21.4, 17099.0], [21.5, 17099.0], [21.6, 17099.0], [21.7, 17099.0], [21.8, 17099.0], [21.9, 17099.0], [22.0, 17099.0], [22.1, 17099.0], [22.2, 17099.0], [22.3, 17099.0], [22.4, 17099.0], [22.5, 17099.0], [22.6, 17099.0], [22.7, 17099.0], [22.8, 17099.0], [22.9, 17099.0], [23.0, 17099.0], [23.1, 17099.0], [23.2, 17207.0], [23.3, 17207.0], [23.4, 17207.0], [23.5, 17207.0], [23.6, 17207.0], [23.7, 17207.0], [23.8, 17207.0], [23.9, 17207.0], [24.0, 17207.0], [24.1, 17207.0], [24.2, 17207.0], [24.3, 17207.0], [24.4, 18023.0], [24.5, 18023.0], [24.6, 18023.0], [24.7, 18023.0], [24.8, 18023.0], [24.9, 18023.0], [25.0, 18023.0], [25.1, 18023.0], [25.2, 18023.0], [25.3, 18023.0], [25.4, 18023.0], [25.5, 18023.0], [25.6, 18023.0], [25.7, 18024.0], [25.8, 18024.0], [25.9, 18024.0], [26.0, 18024.0], [26.1, 18024.0], [26.2, 18024.0], [26.3, 18024.0], [26.4, 18024.0], [26.5, 18024.0], [26.6, 18024.0], [26.7, 18024.0], [26.8, 18024.0], [26.9, 18025.0], [27.0, 18025.0], [27.1, 18025.0], [27.2, 18025.0], [27.3, 18025.0], [27.4, 18025.0], [27.5, 18025.0], [27.6, 18025.0], [27.7, 18025.0], [27.8, 18025.0], [27.9, 18025.0], [28.0, 18025.0], [28.1, 18025.0], [28.2, 18025.0], [28.3, 18025.0], [28.4, 18025.0], [28.5, 18025.0], [28.6, 18025.0], [28.7, 18025.0], [28.8, 18025.0], [28.9, 18025.0], [29.0, 18025.0], [29.1, 18025.0], [29.2, 18025.0], [29.3, 18025.0], [29.4, 18025.0], [29.5, 18025.0], [29.6, 18025.0], [29.7, 18025.0], [29.8, 18025.0], [29.9, 18025.0], [30.0, 18025.0], [30.1, 18025.0], [30.2, 18025.0], [30.3, 18025.0], [30.4, 18025.0], [30.5, 21650.0], [30.6, 21650.0], [30.7, 21650.0], [30.8, 21650.0], [30.9, 21650.0], [31.0, 21650.0], [31.1, 21650.0], [31.2, 21650.0], [31.3, 21650.0], [31.4, 21650.0], [31.5, 21650.0], [31.6, 21650.0], [31.7, 21650.0], [31.8, 21651.0], [31.9, 21651.0], [32.0, 21651.0], [32.1, 21651.0], [32.2, 21651.0], [32.3, 21651.0], [32.4, 21651.0], [32.5, 21651.0], [32.6, 21651.0], [32.7, 21651.0], [32.8, 21651.0], [32.9, 21651.0], [33.0, 21651.0], [33.1, 21651.0], [33.2, 21651.0], [33.3, 21651.0], [33.4, 21651.0], [33.5, 21651.0], [33.6, 21651.0], [33.7, 21651.0], [33.8, 21651.0], [33.9, 21651.0], [34.0, 21651.0], [34.1, 21651.0], [34.2, 21652.0], [34.3, 21652.0], [34.4, 21652.0], [34.5, 21652.0], [34.6, 21652.0], [34.7, 21652.0], [34.8, 21652.0], [34.9, 21652.0], [35.0, 21652.0], [35.1, 21652.0], [35.2, 21652.0], [35.3, 21652.0], [35.4, 21652.0], [35.5, 21652.0], [35.6, 21652.0], [35.7, 21652.0], [35.8, 21652.0], [35.9, 21652.0], [36.0, 21652.0], [36.1, 21652.0], [36.2, 21652.0], [36.3, 21652.0], [36.4, 21652.0], [36.5, 21652.0], [36.6, 23207.0], [36.7, 23207.0], [36.8, 23207.0], [36.9, 23207.0], [37.0, 23207.0], [37.1, 23207.0], [37.2, 23207.0], [37.3, 23207.0], [37.4, 23207.0], [37.5, 23207.0], [37.6, 23207.0], [37.7, 23207.0], [37.8, 23207.0], [37.9, 28672.0], [38.0, 28672.0], [38.1, 28672.0], [38.2, 28672.0], [38.3, 28672.0], [38.4, 28672.0], [38.5, 28672.0], [38.6, 28672.0], [38.7, 28672.0], [38.8, 28672.0], [38.9, 28672.0], [39.0, 28672.0], [39.1, 28673.0], [39.2, 28673.0], [39.3, 28673.0], [39.4, 28673.0], [39.5, 28673.0], [39.6, 28673.0], [39.7, 28673.0], [39.8, 28673.0], [39.9, 28673.0], [40.0, 28673.0], [40.1, 28673.0], [40.2, 28673.0], [40.3, 30510.0], [40.4, 30510.0], [40.5, 30510.0], [40.6, 30510.0], [40.7, 30510.0], [40.8, 30510.0], [40.9, 30510.0], [41.0, 30510.0], [41.1, 30510.0], [41.2, 30510.0], [41.3, 30510.0], [41.4, 30510.0], [41.5, 30511.0], [41.6, 30511.0], [41.7, 30511.0], [41.8, 30511.0], [41.9, 30511.0], [42.0, 30511.0], [42.1, 30511.0], [42.2, 30511.0], [42.3, 30511.0], [42.4, 30511.0], [42.5, 30511.0], [42.6, 30511.0], [42.7, 30511.0], [42.8, 30511.0], [42.9, 30511.0], [43.0, 30511.0], [43.1, 30511.0], [43.2, 30511.0], [43.3, 30511.0], [43.4, 30511.0], [43.5, 30511.0], [43.6, 30511.0], [43.7, 30511.0], [43.8, 30511.0], [43.9, 30511.0], [44.0, 30512.0], [44.1, 30512.0], [44.2, 30512.0], [44.3, 30512.0], [44.4, 30512.0], [44.5, 30512.0], [44.6, 30512.0], [44.7, 30512.0], [44.8, 30512.0], [44.9, 30512.0], [45.0, 30512.0], [45.1, 30512.0], [45.2, 30605.0], [45.3, 30605.0], [45.4, 30605.0], [45.5, 30605.0], [45.6, 30605.0], [45.7, 30605.0], [45.8, 30605.0], [45.9, 30605.0], [46.0, 30605.0], [46.1, 30605.0], [46.2, 30605.0], [46.3, 30605.0], [46.4, 30606.0], [46.5, 30606.0], [46.6, 30606.0], [46.7, 30606.0], [46.8, 30606.0], [46.9, 30606.0], [47.0, 30606.0], [47.1, 30606.0], [47.2, 30606.0], [47.3, 30606.0], [47.4, 30606.0], [47.5, 30606.0], [47.6, 30606.0], [47.7, 30606.0], [47.8, 30606.0], [47.9, 30606.0], [48.0, 30606.0], [48.1, 30606.0], [48.2, 30606.0], [48.3, 30606.0], [48.4, 30606.0], [48.5, 30606.0], [48.6, 30606.0], [48.7, 30606.0], [48.8, 30607.0], [48.9, 30607.0], [49.0, 30607.0], [49.1, 30607.0], [49.2, 30607.0], [49.3, 30607.0], [49.4, 30607.0], [49.5, 30607.0], [49.6, 30607.0], [49.7, 30607.0], [49.8, 30607.0], [49.9, 30607.0], [50.0, 30733.0], [50.1, 30733.0], [50.2, 30733.0], [50.3, 30733.0], [50.4, 30733.0], [50.5, 30733.0], [50.6, 30733.0], [50.7, 30733.0], [50.8, 30733.0], [50.9, 30733.0], [51.0, 30733.0], [51.1, 30733.0], [51.2, 30733.0], [51.3, 30734.0], [51.4, 30734.0], [51.5, 30734.0], [51.6, 30734.0], [51.7, 30734.0], [51.8, 30734.0], [51.9, 30734.0], [52.0, 30734.0], [52.1, 30734.0], [52.2, 30734.0], [52.3, 30734.0], [52.4, 30734.0], [52.5, 30735.0], [52.6, 30735.0], [52.7, 30735.0], [52.8, 30735.0], [52.9, 30735.0], [53.0, 30735.0], [53.1, 30735.0], [53.2, 30735.0], [53.3, 30735.0], [53.4, 30735.0], [53.5, 30735.0], [53.6, 30735.0], [53.7, 30736.0], [53.8, 30736.0], [53.9, 30736.0], [54.0, 30736.0], [54.1, 30736.0], [54.2, 30736.0], [54.3, 30736.0], [54.4, 30736.0], [54.5, 30736.0], [54.6, 30736.0], [54.7, 30736.0], [54.8, 30736.0], [54.9, 30902.0], [55.0, 30902.0], [55.1, 30902.0], [55.2, 30902.0], [55.3, 30902.0], [55.4, 30902.0], [55.5, 30902.0], [55.6, 30902.0], [55.7, 30902.0], [55.8, 30902.0], [55.9, 30902.0], [56.0, 30902.0], [56.1, 30903.0], [56.2, 30903.0], [56.3, 30903.0], [56.4, 30903.0], [56.5, 30903.0], [56.6, 30903.0], [56.7, 30903.0], [56.8, 30903.0], [56.9, 30903.0], [57.0, 30903.0], [57.1, 30903.0], [57.2, 30903.0], [57.3, 30903.0], [57.4, 30904.0], [57.5, 30904.0], [57.6, 30904.0], [57.7, 30904.0], [57.8, 30904.0], [57.9, 30904.0], [58.0, 30904.0], [58.1, 30904.0], [58.2, 30904.0], [58.3, 30904.0], [58.4, 30904.0], [58.5, 30904.0], [58.6, 30904.0], [58.7, 30904.0], [58.8, 30904.0], [58.9, 30904.0], [59.0, 30904.0], [59.1, 30904.0], [59.2, 30904.0], [59.3, 30904.0], [59.4, 30904.0], [59.5, 30904.0], [59.6, 30904.0], [59.7, 30904.0], [59.8, 30921.0], [59.9, 30921.0], [60.0, 30921.0], [60.1, 30921.0], [60.2, 30921.0], [60.3, 30921.0], [60.4, 30921.0], [60.5, 30921.0], [60.6, 30921.0], [60.7, 30921.0], [60.8, 30921.0], [60.9, 30921.0], [61.0, 30922.0], [61.1, 30922.0], [61.2, 30922.0], [61.3, 30922.0], [61.4, 30922.0], [61.5, 30922.0], [61.6, 30922.0], [61.7, 30922.0], [61.8, 30922.0], [61.9, 30922.0], [62.0, 30922.0], [62.1, 30922.0], [62.2, 30922.0], [62.3, 30922.0], [62.4, 30922.0], [62.5, 30922.0], [62.6, 30922.0], [62.7, 30922.0], [62.8, 30922.0], [62.9, 30922.0], [63.0, 30922.0], [63.1, 30922.0], [63.2, 30922.0], [63.3, 30922.0], [63.4, 30922.0], [63.5, 30923.0], [63.6, 30923.0], [63.7, 30923.0], [63.8, 30923.0], [63.9, 30923.0], [64.0, 30923.0], [64.1, 30923.0], [64.2, 30923.0], [64.3, 30923.0], [64.4, 30923.0], [64.5, 30923.0], [64.6, 30923.0], [64.7, 31027.0], [64.8, 31027.0], [64.9, 31027.0], [65.0, 31027.0], [65.1, 31027.0], [65.2, 31027.0], [65.3, 31027.0], [65.4, 31027.0], [65.5, 31027.0], [65.6, 31027.0], [65.7, 31027.0], [65.8, 31027.0], [65.9, 31028.0], [66.0, 31028.0], [66.1, 31028.0], [66.2, 31028.0], [66.3, 31028.0], [66.4, 31028.0], [66.5, 31028.0], [66.6, 31028.0], [66.7, 31028.0], [66.8, 31028.0], [66.9, 31028.0], [67.0, 31028.0], [67.1, 31028.0], [67.2, 31028.0], [67.3, 31028.0], [67.4, 31028.0], [67.5, 31028.0], [67.6, 31028.0], [67.7, 31028.0], [67.8, 31028.0], [67.9, 31028.0], [68.0, 31028.0], [68.1, 31028.0], [68.2, 31028.0], [68.3, 31029.0], [68.4, 31029.0], [68.5, 31029.0], [68.6, 31029.0], [68.7, 31029.0], [68.8, 31029.0], [68.9, 31029.0], [69.0, 31029.0], [69.1, 31029.0], [69.2, 31029.0], [69.3, 31029.0], [69.4, 31029.0], [69.5, 31029.0], [69.6, 31432.0], [69.7, 31432.0], [69.8, 31432.0], [69.9, 31432.0], [70.0, 31432.0], [70.1, 31432.0], [70.2, 31432.0], [70.3, 31432.0], [70.4, 31432.0], [70.5, 31432.0], [70.6, 31432.0], [70.7, 31432.0], [70.8, 31432.0], [70.9, 31432.0], [71.0, 31432.0], [71.1, 31432.0], [71.2, 31432.0], [71.3, 31432.0], [71.4, 31432.0], [71.5, 31432.0], [71.6, 31432.0], [71.7, 31432.0], [71.8, 31432.0], [71.9, 31432.0], [72.0, 31433.0], [72.1, 31433.0], [72.2, 31433.0], [72.3, 31433.0], [72.4, 31433.0], [72.5, 31433.0], [72.6, 31433.0], [72.7, 31433.0], [72.8, 31433.0], [72.9, 31433.0], [73.0, 31433.0], [73.1, 31433.0], [73.2, 31434.0], [73.3, 31434.0], [73.4, 31434.0], [73.5, 31434.0], [73.6, 31434.0], [73.7, 31434.0], [73.8, 31434.0], [73.9, 31434.0], [74.0, 31434.0], [74.1, 31434.0], [74.2, 31434.0], [74.3, 31434.0], [74.4, 31864.0], [74.5, 31864.0], [74.6, 31864.0], [74.7, 31864.0], [74.8, 31864.0], [74.9, 31864.0], [75.0, 31864.0], [75.1, 31864.0], [75.2, 31864.0], [75.3, 31864.0], [75.4, 31864.0], [75.5, 31864.0], [75.6, 31864.0], [75.7, 31865.0], [75.8, 31865.0], [75.9, 31865.0], [76.0, 31865.0], [76.1, 31865.0], [76.2, 31865.0], [76.3, 31865.0], [76.4, 31865.0], [76.5, 31865.0], [76.6, 31865.0], [76.7, 31865.0], [76.8, 31865.0], [76.9, 31867.0], [77.0, 31867.0], [77.1, 31867.0], [77.2, 31867.0], [77.3, 31867.0], [77.4, 31867.0], [77.5, 31867.0], [77.6, 31867.0], [77.7, 31867.0], [77.8, 31867.0], [77.9, 31867.0], [78.0, 31867.0], [78.1, 31867.0], [78.2, 31867.0], [78.3, 31867.0], [78.4, 31867.0], [78.5, 31867.0], [78.6, 31867.0], [78.7, 31867.0], [78.8, 31867.0], [78.9, 31867.0], [79.0, 31867.0], [79.1, 31867.0], [79.2, 31867.0], [79.3, 31878.0], [79.4, 31878.0], [79.5, 31878.0], [79.6, 31878.0], [79.7, 31878.0], [79.8, 31878.0], [79.9, 31878.0], [80.0, 31878.0], [80.1, 31878.0], [80.2, 31878.0], [80.3, 31878.0], [80.4, 31878.0], [80.5, 31880.0], [80.6, 31880.0], [80.7, 31880.0], [80.8, 31880.0], [80.9, 31880.0], [81.0, 31880.0], [81.1, 31880.0], [81.2, 31880.0], [81.3, 31880.0], [81.4, 31880.0], [81.5, 31880.0], [81.6, 31880.0], [81.7, 31880.0], [81.8, 31882.0], [81.9, 31882.0], [82.0, 31882.0], [82.1, 31882.0], [82.2, 31882.0], [82.3, 31882.0], [82.4, 31882.0], [82.5, 31882.0], [82.6, 31882.0], [82.7, 31882.0], [82.8, 31882.0], [82.9, 31882.0], [83.0, 31943.0], [83.1, 31943.0], [83.2, 31943.0], [83.3, 31943.0], [83.4, 31943.0], [83.5, 31943.0], [83.6, 31943.0], [83.7, 31943.0], [83.8, 31943.0], [83.9, 31943.0], [84.0, 31943.0], [84.1, 31943.0], [84.2, 31944.0], [84.3, 31944.0], [84.4, 31944.0], [84.5, 31944.0], [84.6, 31944.0], [84.7, 31944.0], [84.8, 31944.0], [84.9, 31944.0], [85.0, 31944.0], [85.1, 31944.0], [85.2, 31944.0], [85.3, 31944.0], [85.4, 31945.0], [85.5, 31945.0], [85.6, 31945.0], [85.7, 31945.0], [85.8, 31945.0], [85.9, 31945.0], [86.0, 31945.0], [86.1, 31945.0], [86.2, 31945.0], [86.3, 31945.0], [86.4, 31945.0], [86.5, 31945.0], [86.6, 31945.0], [86.7, 31945.0], [86.8, 31945.0], [86.9, 31945.0], [87.0, 31945.0], [87.1, 31945.0], [87.2, 31945.0], [87.3, 31945.0], [87.4, 31945.0], [87.5, 31945.0], [87.6, 31945.0], [87.7, 31945.0], [87.8, 31945.0], [87.9, 35416.0], [88.0, 35416.0], [88.1, 35416.0], [88.2, 35416.0], [88.3, 35416.0], [88.4, 35416.0], [88.5, 35416.0], [88.6, 35416.0], [88.7, 35416.0], [88.8, 35416.0], [88.9, 35416.0], [89.0, 35416.0], [89.1, 39936.0], [89.2, 39936.0], [89.3, 39936.0], [89.4, 39936.0], [89.5, 39936.0], [89.6, 39936.0], [89.7, 39936.0], [89.8, 39936.0], [89.9, 39936.0], [90.0, 39936.0], [90.1, 39936.0], [90.2, 39936.0], [90.3, 40750.0], [90.4, 40750.0], [90.5, 40750.0], [90.6, 40750.0], [90.7, 40750.0], [90.8, 40750.0], [90.9, 40750.0], [91.0, 40750.0], [91.1, 40750.0], [91.2, 40750.0], [91.3, 40750.0], [91.4, 40750.0], [91.5, 40753.0], [91.6, 40753.0], [91.7, 40753.0], [91.8, 40753.0], [91.9, 40753.0], [92.0, 40753.0], [92.1, 40753.0], [92.2, 40753.0], [92.3, 40753.0], [92.4, 40753.0], [92.5, 40753.0], [92.6, 40753.0], [92.7, 40838.0], [92.8, 40838.0], [92.9, 40838.0], [93.0, 40838.0], [93.1, 40838.0], [93.2, 40838.0], [93.3, 40838.0], [93.4, 40838.0], [93.5, 40838.0], [93.6, 40838.0], [93.7, 40838.0], [93.8, 40838.0], [93.9, 40838.0], [94.0, 41268.0], [94.1, 41268.0], [94.2, 41268.0], [94.3, 41268.0], [94.4, 41268.0], [94.5, 41268.0], [94.6, 41268.0], [94.7, 41268.0], [94.8, 41268.0], [94.9, 41268.0], [95.0, 41268.0], [95.1, 41268.0], [95.2, 41270.0], [95.3, 41270.0], [95.4, 41270.0], [95.5, 41270.0], [95.6, 41270.0], [95.7, 41270.0], [95.8, 41270.0], [95.9, 41270.0], [96.0, 41270.0], [96.1, 41270.0], [96.2, 41270.0], [96.3, 41270.0], [96.4, 42008.0], [96.5, 42008.0], [96.6, 42008.0], [96.7, 42008.0], [96.8, 42008.0], [96.9, 42008.0], [97.0, 42008.0], [97.1, 42008.0], [97.2, 42008.0], [97.3, 42008.0], [97.4, 42008.0], [97.5, 42008.0], [97.6, 42176.0], [97.7, 42176.0], [97.8, 42176.0], [97.9, 42176.0], [98.0, 42176.0], [98.1, 42176.0], [98.2, 42176.0], [98.3, 42176.0], [98.4, 42176.0], [98.5, 42176.0], [98.6, 42176.0], [98.7, 42176.0], [98.8, 42290.0], [98.9, 42290.0], [99.0, 42290.0], [99.1, 42290.0], [99.2, 42290.0], [99.3, 42290.0], [99.4, 42290.0], [99.5, 42290.0], [99.6, 42290.0], [99.7, 42290.0], [99.8, 42290.0], [99.9, 42290.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 9400.0, "maxY": 8.0, "series": [{"data": [[9600.0, 3.0], [9400.0, 1.0], [10100.0, 1.0], [10200.0, 1.0], [10300.0, 1.0], [12600.0, 1.0], [12500.0, 2.0], [13500.0, 2.0], [13400.0, 1.0], [13600.0, 3.0], [14700.0, 1.0], [17200.0, 1.0], [17000.0, 2.0], [18000.0, 5.0], [21600.0, 5.0], [23200.0, 1.0], [28600.0, 2.0], [30700.0, 4.0], [30500.0, 4.0], [30600.0, 4.0], [31400.0, 4.0], [30900.0, 8.0], [31000.0, 4.0], [31800.0, 7.0], [31900.0, 4.0], [35400.0, 1.0], [39900.0, 1.0], [40800.0, 1.0], [40700.0, 2.0], [42100.0, 1.0], [42200.0, 1.0], [41200.0, 2.0], [42000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 42200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 82.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 82.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 82.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.58913024E12, "maxY": 16.0, "series": [{"data": [[1.58913036E12, 16.0], [1.58913048E12, 5.166666666666667], [1.5891303E12, 7.052631578947368], [1.58913042E12, 14.88], [1.58913024E12, 1.0]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58913048E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 10638.333333333334, "minX": 1.0, "maxY": 35632.0, "series": [{"data": [[1.0, 18409.333333333336], [2.0, 10638.333333333334], [4.0, 11764.333333333334], [8.0, 14029.285714285716], [16.0, 29695.773584905655], [10.0, 30511.0], [11.0, 35632.0], [6.0, 32634.8]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[12.426829268292677, 26290.012195121963]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 16.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 10.4, "minX": 1.58913024E12, "maxY": 31581.05, "series": [{"data": [[1.58913036E12, 156.0], [1.58913048E12, 31.2], [1.5891303E12, 98.8], [1.58913042E12, 130.0], [1.58913024E12, 10.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58913036E12, 31581.05], [1.58913048E12, 6316.65], [1.5891303E12, 20000.733333333334], [1.58913042E12, 26318.083333333332], [1.58913024E12, 2105.5666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58913048E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 9906.0, "minX": 1.58913024E12, "maxY": 33113.35999999999, "series": [{"data": [[1.58913036E12, 28381.13333333333], [1.58913048E12, 33098.333333333336], [1.5891303E12, 13584.789473684212], [1.58913042E12, 33113.35999999999], [1.58913024E12, 9906.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58913048E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 9905.0, "minX": 1.58913024E12, "maxY": 33113.27999999999, "series": [{"data": [[1.58913036E12, 28381.066666666666], [1.58913048E12, 33098.333333333336], [1.5891303E12, 13584.684210526315], [1.58913042E12, 33113.27999999999], [1.58913024E12, 9905.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58913048E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.894736842105263, "minX": 1.58913024E12, "maxY": 18.0, "series": [{"data": [[1.58913036E12, 3.3000000000000003], [1.58913048E12, 2.0], [1.5891303E12, 1.894736842105263], [1.58913042E12, 3.8800000000000003], [1.58913024E12, 18.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58913048E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 9474.0, "minX": 1.58913024E12, "maxY": 42290.0, "series": [{"data": [[1.58913036E12, 42176.0], [1.58913048E12, 40750.0], [1.5891303E12, 23207.0], [1.58913042E12, 42290.0], [1.58913024E12, 10127.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58913036E12, 18023.0], [1.58913048E12, 30605.0], [1.5891303E12, 9474.0], [1.58913042E12, 30510.0], [1.58913024E12, 9685.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58913036E12, 39136.900000000016], [1.58913048E12, 40750.0], [1.5891303E12, 17207.0], [1.58913042E12, 41565.200000000004], [1.58913024E12, 10127.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58913036E12, 42176.0], [1.58913048E12, 40750.0], [1.5891303E12, 23207.0], [1.58913042E12, 42290.0], [1.58913024E12, 10127.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58913036E12, 41440.1], [1.58913048E12, 40750.0], [1.5891303E12, 23207.0], [1.58913042E12, 42205.4], [1.58913024E12, 10127.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58913048E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 10206.5, "minX": 1.0, "maxY": 30904.0, "series": [{"data": [[1.0, 10206.5], [2.0, 13053.5], [5.0, 30904.0], [3.0, 17099.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 10206.5, "minX": 1.0, "maxY": 30904.0, "series": [{"data": [[1.0, 10206.5], [2.0, 13053.5], [5.0, 30904.0], [3.0, 17099.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.58913024E12, "maxY": 0.55, "series": [{"data": [[1.58913036E12, 0.5], [1.5891303E12, 0.55], [1.58913042E12, 0.25], [1.58913024E12, 0.06666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58913042E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.58913024E12, "maxY": 0.5, "series": [{"data": [[1.58913036E12, 0.5], [1.58913048E12, 0.1], [1.5891303E12, 0.31666666666666665], [1.58913042E12, 0.4166666666666667], [1.58913024E12, 0.03333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58913048E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.58913024E12, "maxY": 0.5, "series": [{"data": [[1.58913036E12, 0.5], [1.58913048E12, 0.1], [1.5891303E12, 0.31666666666666665], [1.58913042E12, 0.4166666666666667], [1.58913024E12, 0.03333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58913048E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.58913024E12, "maxY": 0.5, "series": [{"data": [[1.58913036E12, 0.5], [1.58913048E12, 0.1], [1.5891303E12, 0.31666666666666665], [1.58913042E12, 0.4166666666666667], [1.58913024E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58913048E12, "title": "Total Transactions Per Second"}},
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

