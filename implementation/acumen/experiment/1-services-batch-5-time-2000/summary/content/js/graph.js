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
        data: {"result": {"minY": 7320.0, "minX": 0.0, "maxY": 120030.0, "series": [{"data": [[0.0, 7320.0], [0.1, 7320.0], [0.2, 7320.0], [0.3, 7320.0], [0.4, 7320.0], [0.5, 7320.0], [0.6, 7320.0], [0.7, 7320.0], [0.8, 7320.0], [0.9, 7368.0], [1.0, 7368.0], [1.1, 7368.0], [1.2, 7368.0], [1.3, 7368.0], [1.4, 7368.0], [1.5, 7368.0], [1.6, 7368.0], [1.7, 7427.0], [1.8, 7427.0], [1.9, 7427.0], [2.0, 7427.0], [2.1, 7427.0], [2.2, 7427.0], [2.3, 7427.0], [2.4, 7427.0], [2.5, 7427.0], [2.6, 7523.0], [2.7, 7523.0], [2.8, 7523.0], [2.9, 7523.0], [3.0, 7523.0], [3.1, 7523.0], [3.2, 7523.0], [3.3, 7523.0], [3.4, 7573.0], [3.5, 7573.0], [3.6, 7573.0], [3.7, 7573.0], [3.8, 7573.0], [3.9, 7573.0], [4.0, 7573.0], [4.1, 7573.0], [4.2, 7573.0], [4.3, 7948.0], [4.4, 7948.0], [4.5, 7948.0], [4.6, 7948.0], [4.7, 7948.0], [4.8, 7948.0], [4.9, 7948.0], [5.0, 7948.0], [5.1, 7987.0], [5.2, 7987.0], [5.3, 7987.0], [5.4, 7987.0], [5.5, 7987.0], [5.6, 7987.0], [5.7, 7987.0], [5.8, 7987.0], [5.9, 8086.0], [6.0, 8086.0], [6.1, 8086.0], [6.2, 8086.0], [6.3, 8086.0], [6.4, 8086.0], [6.5, 8086.0], [6.6, 8086.0], [6.7, 8086.0], [6.8, 8264.0], [6.9, 8264.0], [7.0, 8264.0], [7.1, 8264.0], [7.2, 8264.0], [7.3, 8264.0], [7.4, 8264.0], [7.5, 8264.0], [7.6, 9511.0], [7.7, 9511.0], [7.8, 9511.0], [7.9, 9511.0], [8.0, 9511.0], [8.1, 9511.0], [8.2, 9511.0], [8.3, 9511.0], [8.4, 9511.0], [8.5, 9593.0], [8.6, 9593.0], [8.7, 9593.0], [8.8, 9593.0], [8.9, 9593.0], [9.0, 9593.0], [9.1, 9593.0], [9.2, 9593.0], [9.3, 10139.0], [9.4, 10139.0], [9.5, 10139.0], [9.6, 10139.0], [9.7, 10139.0], [9.8, 10139.0], [9.9, 10139.0], [10.0, 10139.0], [10.1, 10139.0], [10.2, 10139.0], [10.3, 10139.0], [10.4, 10139.0], [10.5, 10139.0], [10.6, 10139.0], [10.7, 10139.0], [10.8, 10139.0], [10.9, 10139.0], [11.0, 10935.0], [11.1, 10935.0], [11.2, 10935.0], [11.3, 10935.0], [11.4, 10935.0], [11.5, 10935.0], [11.6, 10935.0], [11.7, 10935.0], [11.8, 11278.0], [11.9, 11278.0], [12.0, 11278.0], [12.1, 11278.0], [12.2, 11278.0], [12.3, 11278.0], [12.4, 11278.0], [12.5, 11278.0], [12.6, 11278.0], [12.7, 11278.0], [12.8, 11278.0], [12.9, 11278.0], [13.0, 11278.0], [13.1, 11278.0], [13.2, 11278.0], [13.3, 11278.0], [13.4, 11278.0], [13.5, 11653.0], [13.6, 11653.0], [13.7, 11653.0], [13.8, 11653.0], [13.9, 11653.0], [14.0, 11653.0], [14.1, 11653.0], [14.2, 11653.0], [14.3, 12600.0], [14.4, 12600.0], [14.5, 12600.0], [14.6, 12600.0], [14.7, 12600.0], [14.8, 12600.0], [14.9, 12600.0], [15.0, 12600.0], [15.1, 12600.0], [15.2, 14015.0], [15.3, 14015.0], [15.4, 14015.0], [15.5, 14015.0], [15.6, 14015.0], [15.7, 14015.0], [15.8, 14015.0], [15.9, 14015.0], [16.0, 14016.0], [16.1, 14016.0], [16.2, 14016.0], [16.3, 14016.0], [16.4, 14016.0], [16.5, 14016.0], [16.6, 14016.0], [16.7, 14016.0], [16.8, 14016.0], [16.9, 14018.0], [17.0, 14018.0], [17.1, 14018.0], [17.2, 14018.0], [17.3, 14018.0], [17.4, 14018.0], [17.5, 14018.0], [17.6, 14018.0], [17.7, 14018.0], [17.8, 14018.0], [17.9, 14018.0], [18.0, 14018.0], [18.1, 14018.0], [18.2, 14018.0], [18.3, 14018.0], [18.4, 14018.0], [18.5, 15769.0], [18.6, 15769.0], [18.7, 15769.0], [18.8, 15769.0], [18.9, 15769.0], [19.0, 15769.0], [19.1, 15769.0], [19.2, 15769.0], [19.3, 15769.0], [19.4, 15770.0], [19.5, 15770.0], [19.6, 15770.0], [19.7, 15770.0], [19.8, 15770.0], [19.9, 15770.0], [20.0, 15770.0], [20.1, 15770.0], [20.2, 15770.0], [20.3, 15770.0], [20.4, 15770.0], [20.5, 15770.0], [20.6, 15770.0], [20.7, 15770.0], [20.8, 15770.0], [20.9, 15770.0], [21.0, 15770.0], [21.1, 15770.0], [21.2, 15770.0], [21.3, 15770.0], [21.4, 15770.0], [21.5, 15770.0], [21.6, 15770.0], [21.7, 15770.0], [21.8, 15770.0], [21.9, 15771.0], [22.0, 15771.0], [22.1, 15771.0], [22.2, 15771.0], [22.3, 15771.0], [22.4, 15771.0], [22.5, 15771.0], [22.6, 15771.0], [22.7, 16023.0], [22.8, 16023.0], [22.9, 16023.0], [23.0, 16023.0], [23.1, 16023.0], [23.2, 16023.0], [23.3, 16023.0], [23.4, 16023.0], [23.5, 16023.0], [23.6, 16024.0], [23.7, 16024.0], [23.8, 16024.0], [23.9, 16024.0], [24.0, 16024.0], [24.1, 16024.0], [24.2, 16024.0], [24.3, 16024.0], [24.4, 19512.0], [24.5, 19512.0], [24.6, 19512.0], [24.7, 19512.0], [24.8, 19512.0], [24.9, 19512.0], [25.0, 19512.0], [25.1, 19512.0], [25.2, 19512.0], [25.3, 19513.0], [25.4, 19513.0], [25.5, 19513.0], [25.6, 19513.0], [25.7, 19513.0], [25.8, 19513.0], [25.9, 19513.0], [26.0, 19513.0], [26.1, 19513.0], [26.2, 19513.0], [26.3, 19513.0], [26.4, 19513.0], [26.5, 19513.0], [26.6, 19513.0], [26.7, 19513.0], [26.8, 19513.0], [26.9, 19514.0], [27.0, 19514.0], [27.1, 19514.0], [27.2, 19514.0], [27.3, 19514.0], [27.4, 19514.0], [27.5, 19514.0], [27.6, 19514.0], [27.7, 19514.0], [27.8, 19515.0], [27.9, 19515.0], [28.0, 19515.0], [28.1, 19515.0], [28.2, 19515.0], [28.3, 19515.0], [28.4, 19515.0], [28.5, 19515.0], [28.6, 20280.0], [28.7, 20280.0], [28.8, 20280.0], [28.9, 20280.0], [29.0, 20280.0], [29.1, 20280.0], [29.2, 20280.0], [29.3, 20280.0], [29.4, 20280.0], [29.5, 27646.0], [29.6, 27646.0], [29.7, 27646.0], [29.8, 27646.0], [29.9, 27646.0], [30.0, 27646.0], [30.1, 27646.0], [30.2, 27646.0], [30.3, 27646.0], [30.4, 27646.0], [30.5, 27646.0], [30.6, 27646.0], [30.7, 27646.0], [30.8, 27646.0], [30.9, 27646.0], [31.0, 27646.0], [31.1, 29332.0], [31.2, 29332.0], [31.3, 29332.0], [31.4, 29332.0], [31.5, 29332.0], [31.6, 29332.0], [31.7, 29332.0], [31.8, 29332.0], [31.9, 29332.0], [32.0, 29334.0], [32.1, 29334.0], [32.2, 29334.0], [32.3, 29334.0], [32.4, 29334.0], [32.5, 29334.0], [32.6, 29334.0], [32.7, 29334.0], [32.8, 29342.0], [32.9, 29342.0], [33.0, 29342.0], [33.1, 29342.0], [33.2, 29342.0], [33.3, 29342.0], [33.4, 29342.0], [33.5, 29342.0], [33.6, 29342.0], [33.7, 29383.0], [33.8, 29383.0], [33.9, 29383.0], [34.0, 29383.0], [34.1, 29383.0], [34.2, 29383.0], [34.3, 29383.0], [34.4, 29383.0], [34.5, 29384.0], [34.6, 29384.0], [34.7, 29384.0], [34.8, 29384.0], [34.9, 29384.0], [35.0, 29384.0], [35.1, 29384.0], [35.2, 29384.0], [35.3, 29385.0], [35.4, 29385.0], [35.5, 29385.0], [35.6, 29385.0], [35.7, 29385.0], [35.8, 29385.0], [35.9, 29385.0], [36.0, 29385.0], [36.1, 29385.0], [36.2, 29385.0], [36.3, 29385.0], [36.4, 29385.0], [36.5, 29385.0], [36.6, 29385.0], [36.7, 29385.0], [36.8, 29385.0], [36.9, 29385.0], [37.0, 29385.0], [37.1, 29385.0], [37.2, 29385.0], [37.3, 29385.0], [37.4, 29385.0], [37.5, 29385.0], [37.6, 29385.0], [37.7, 29385.0], [37.8, 29385.0], [37.9, 29385.0], [38.0, 29385.0], [38.1, 29385.0], [38.2, 29385.0], [38.3, 29385.0], [38.4, 29385.0], [38.5, 29385.0], [38.6, 29385.0], [38.7, 29386.0], [38.8, 29386.0], [38.9, 29386.0], [39.0, 29386.0], [39.1, 29386.0], [39.2, 29386.0], [39.3, 29386.0], [39.4, 29386.0], [39.5, 29386.0], [39.6, 29386.0], [39.7, 29386.0], [39.8, 29386.0], [39.9, 29386.0], [40.0, 29386.0], [40.1, 29386.0], [40.2, 29386.0], [40.3, 29386.0], [40.4, 37475.0], [40.5, 37475.0], [40.6, 37475.0], [40.7, 37475.0], [40.8, 37475.0], [40.9, 37475.0], [41.0, 37475.0], [41.1, 37475.0], [41.2, 38628.0], [41.3, 38628.0], [41.4, 38628.0], [41.5, 38628.0], [41.6, 38628.0], [41.7, 38628.0], [41.8, 38628.0], [41.9, 38628.0], [42.0, 38628.0], [42.1, 38632.0], [42.2, 38632.0], [42.3, 38632.0], [42.4, 38632.0], [42.5, 38632.0], [42.6, 38632.0], [42.7, 38632.0], [42.8, 38632.0], [42.9, 38633.0], [43.0, 38633.0], [43.1, 38633.0], [43.2, 38633.0], [43.3, 38633.0], [43.4, 38633.0], [43.5, 38633.0], [43.6, 38633.0], [43.7, 38634.0], [43.8, 38634.0], [43.9, 38634.0], [44.0, 38634.0], [44.1, 38634.0], [44.2, 38634.0], [44.3, 38634.0], [44.4, 38634.0], [44.5, 38634.0], [44.6, 39110.0], [44.7, 39110.0], [44.8, 39110.0], [44.9, 39110.0], [45.0, 39110.0], [45.1, 39110.0], [45.2, 39110.0], [45.3, 39110.0], [45.4, 39114.0], [45.5, 39114.0], [45.6, 39114.0], [45.7, 39114.0], [45.8, 39114.0], [45.9, 39114.0], [46.0, 39114.0], [46.1, 39114.0], [46.2, 39114.0], [46.3, 48250.0], [46.4, 48250.0], [46.5, 48250.0], [46.6, 48250.0], [46.7, 48250.0], [46.8, 48250.0], [46.9, 48250.0], [47.0, 48250.0], [47.1, 48257.0], [47.2, 48257.0], [47.3, 48257.0], [47.4, 48257.0], [47.5, 48257.0], [47.6, 48257.0], [47.7, 48257.0], [47.8, 48257.0], [47.9, 48258.0], [48.0, 48258.0], [48.1, 48258.0], [48.2, 48258.0], [48.3, 48258.0], [48.4, 48258.0], [48.5, 48258.0], [48.6, 48258.0], [48.7, 48258.0], [48.8, 48260.0], [48.9, 48260.0], [49.0, 48260.0], [49.1, 48260.0], [49.2, 48260.0], [49.3, 48260.0], [49.4, 48260.0], [49.5, 48260.0], [49.6, 48260.0], [49.7, 48260.0], [49.8, 48260.0], [49.9, 48260.0], [50.0, 48260.0], [50.1, 48260.0], [50.2, 48260.0], [50.3, 48260.0], [50.4, 48260.0], [50.5, 58175.0], [50.6, 58175.0], [50.7, 58175.0], [50.8, 58175.0], [50.9, 58175.0], [51.0, 58175.0], [51.1, 58175.0], [51.2, 58175.0], [51.3, 58181.0], [51.4, 58181.0], [51.5, 58181.0], [51.6, 58181.0], [51.7, 58181.0], [51.8, 58181.0], [51.9, 58181.0], [52.0, 58181.0], [52.1, 58181.0], [52.2, 58187.0], [52.3, 58187.0], [52.4, 58187.0], [52.5, 58187.0], [52.6, 58187.0], [52.7, 58187.0], [52.8, 58187.0], [52.9, 58187.0], [53.0, 58188.0], [53.1, 58188.0], [53.2, 58188.0], [53.3, 58188.0], [53.4, 58188.0], [53.5, 58188.0], [53.6, 58188.0], [53.7, 58188.0], [53.8, 58190.0], [53.9, 58190.0], [54.0, 58190.0], [54.1, 58190.0], [54.2, 58190.0], [54.3, 58190.0], [54.4, 58190.0], [54.5, 58190.0], [54.6, 58190.0], [54.7, 58365.0], [54.8, 58365.0], [54.9, 58365.0], [55.0, 58365.0], [55.1, 58365.0], [55.2, 58365.0], [55.3, 58365.0], [55.4, 58365.0], [55.5, 58365.0], [55.6, 58365.0], [55.7, 58365.0], [55.8, 58365.0], [55.9, 58365.0], [56.0, 58365.0], [56.1, 58365.0], [56.2, 58365.0], [56.3, 58365.0], [56.4, 58366.0], [56.5, 58366.0], [56.6, 58366.0], [56.7, 58366.0], [56.8, 58366.0], [56.9, 58366.0], [57.0, 58366.0], [57.1, 58366.0], [57.2, 58566.0], [57.3, 58566.0], [57.4, 58566.0], [57.5, 58566.0], [57.6, 58566.0], [57.7, 58566.0], [57.8, 58566.0], [57.9, 58566.0], [58.0, 58570.0], [58.1, 58570.0], [58.2, 58570.0], [58.3, 58570.0], [58.4, 58570.0], [58.5, 58570.0], [58.6, 58570.0], [58.7, 58570.0], [58.8, 58570.0], [58.9, 58571.0], [59.0, 58571.0], [59.1, 58571.0], [59.2, 58571.0], [59.3, 58571.0], [59.4, 58571.0], [59.5, 58571.0], [59.6, 58571.0], [59.7, 67267.0], [59.8, 67267.0], [59.9, 67267.0], [60.0, 67267.0], [60.1, 67267.0], [60.2, 67267.0], [60.3, 67267.0], [60.4, 67267.0], [60.5, 67267.0], [60.6, 67268.0], [60.7, 67268.0], [60.8, 67268.0], [60.9, 67268.0], [61.0, 67268.0], [61.1, 67268.0], [61.2, 67268.0], [61.3, 67268.0], [61.4, 67268.0], [61.5, 67268.0], [61.6, 67268.0], [61.7, 67268.0], [61.8, 67268.0], [61.9, 67268.0], [62.0, 67268.0], [62.1, 67268.0], [62.2, 67917.0], [62.3, 67917.0], [62.4, 67917.0], [62.5, 67917.0], [62.6, 67917.0], [62.7, 67917.0], [62.8, 67917.0], [62.9, 67917.0], [63.0, 67917.0], [63.1, 67918.0], [63.2, 67918.0], [63.3, 67918.0], [63.4, 67918.0], [63.5, 67918.0], [63.6, 67918.0], [63.7, 67918.0], [63.8, 67918.0], [63.9, 68091.0], [64.0, 68091.0], [64.1, 68091.0], [64.2, 68091.0], [64.3, 68091.0], [64.4, 68091.0], [64.5, 68091.0], [64.6, 68091.0], [64.7, 68091.0], [64.8, 68093.0], [64.9, 68093.0], [65.0, 68093.0], [65.1, 68093.0], [65.2, 68093.0], [65.3, 68093.0], [65.4, 68093.0], [65.5, 68093.0], [65.6, 68194.0], [65.7, 68194.0], [65.8, 68194.0], [65.9, 68194.0], [66.0, 68194.0], [66.1, 68194.0], [66.2, 68194.0], [66.3, 68194.0], [66.4, 68195.0], [66.5, 68195.0], [66.6, 68195.0], [66.7, 68195.0], [66.8, 68195.0], [66.9, 68195.0], [67.0, 68195.0], [67.1, 68195.0], [67.2, 68195.0], [67.3, 76991.0], [67.4, 76991.0], [67.5, 76991.0], [67.6, 76991.0], [67.7, 76991.0], [67.8, 76991.0], [67.9, 76991.0], [68.0, 76991.0], [68.1, 76991.0], [68.2, 76991.0], [68.3, 76991.0], [68.4, 76991.0], [68.5, 76991.0], [68.6, 76991.0], [68.7, 76991.0], [68.8, 76991.0], [68.9, 76991.0], [69.0, 76992.0], [69.1, 76992.0], [69.2, 76992.0], [69.3, 76992.0], [69.4, 76992.0], [69.5, 76992.0], [69.6, 76992.0], [69.7, 76992.0], [69.8, 76993.0], [69.9, 76993.0], [70.0, 76993.0], [70.1, 76993.0], [70.2, 76993.0], [70.3, 76993.0], [70.4, 76993.0], [70.5, 76993.0], [70.6, 76993.0], [70.7, 76993.0], [70.8, 76993.0], [70.9, 76993.0], [71.0, 76993.0], [71.1, 76993.0], [71.2, 76993.0], [71.3, 76993.0], [71.4, 76993.0], [71.5, 86825.0], [71.6, 86825.0], [71.7, 86825.0], [71.8, 86825.0], [71.9, 86825.0], [72.0, 86825.0], [72.1, 86825.0], [72.2, 86825.0], [72.3, 86826.0], [72.4, 86826.0], [72.5, 86826.0], [72.6, 86826.0], [72.7, 86826.0], [72.8, 86826.0], [72.9, 86826.0], [73.0, 86826.0], [73.1, 86826.0], [73.2, 86827.0], [73.3, 86827.0], [73.4, 86827.0], [73.5, 86827.0], [73.6, 86827.0], [73.7, 86827.0], [73.8, 86827.0], [73.9, 86827.0], [74.0, 86831.0], [74.1, 86831.0], [74.2, 86831.0], [74.3, 86831.0], [74.4, 86831.0], [74.5, 86831.0], [74.6, 86831.0], [74.7, 86831.0], [74.8, 86832.0], [74.9, 86832.0], [75.0, 86832.0], [75.1, 86832.0], [75.2, 86832.0], [75.3, 86832.0], [75.4, 86832.0], [75.5, 86832.0], [75.6, 86832.0], [75.7, 96739.0], [75.8, 96739.0], [75.9, 96739.0], [76.0, 96739.0], [76.1, 96739.0], [76.2, 96739.0], [76.3, 96739.0], [76.4, 96739.0], [76.5, 96744.0], [76.6, 96744.0], [76.7, 96744.0], [76.8, 96744.0], [76.9, 96744.0], [77.0, 96744.0], [77.1, 96744.0], [77.2, 96744.0], [77.3, 96744.0], [77.4, 96757.0], [77.5, 96757.0], [77.6, 96757.0], [77.7, 96757.0], [77.8, 96757.0], [77.9, 96757.0], [78.0, 96757.0], [78.1, 96757.0], [78.2, 96758.0], [78.3, 96758.0], [78.4, 96758.0], [78.5, 96758.0], [78.6, 96758.0], [78.7, 96758.0], [78.8, 96758.0], [78.9, 96758.0], [79.0, 96764.0], [79.1, 96764.0], [79.2, 96764.0], [79.3, 96764.0], [79.4, 96764.0], [79.5, 96764.0], [79.6, 96764.0], [79.7, 96764.0], [79.8, 96764.0], [79.9, 106764.0], [80.0, 106764.0], [80.1, 106764.0], [80.2, 106764.0], [80.3, 106764.0], [80.4, 106764.0], [80.5, 106764.0], [80.6, 106764.0], [80.7, 106767.0], [80.8, 106767.0], [80.9, 106767.0], [81.0, 106767.0], [81.1, 106767.0], [81.2, 106767.0], [81.3, 106767.0], [81.4, 106767.0], [81.5, 106767.0], [81.6, 106768.0], [81.7, 106768.0], [81.8, 106768.0], [81.9, 106768.0], [82.0, 106768.0], [82.1, 106768.0], [82.2, 106768.0], [82.3, 106768.0], [82.4, 106771.0], [82.5, 106771.0], [82.6, 106771.0], [82.7, 106771.0], [82.8, 106771.0], [82.9, 106771.0], [83.0, 106771.0], [83.1, 106771.0], [83.2, 106792.0], [83.3, 106792.0], [83.4, 106792.0], [83.5, 106792.0], [83.6, 106792.0], [83.7, 106792.0], [83.8, 106792.0], [83.9, 106792.0], [84.0, 106792.0], [84.1, 116404.0], [84.2, 116404.0], [84.3, 116404.0], [84.4, 116404.0], [84.5, 116404.0], [84.6, 116404.0], [84.7, 116404.0], [84.8, 116404.0], [84.9, 116407.0], [85.0, 116407.0], [85.1, 116407.0], [85.2, 116407.0], [85.3, 116407.0], [85.4, 116407.0], [85.5, 116407.0], [85.6, 116407.0], [85.7, 116407.0], [85.8, 116416.0], [85.9, 116416.0], [86.0, 116416.0], [86.1, 116416.0], [86.2, 116416.0], [86.3, 116416.0], [86.4, 116416.0], [86.5, 116416.0], [86.6, 116416.0], [86.7, 116416.0], [86.8, 116416.0], [86.9, 116416.0], [87.0, 116416.0], [87.1, 116416.0], [87.2, 116416.0], [87.3, 116416.0], [87.4, 116418.0], [87.5, 116418.0], [87.6, 116418.0], [87.7, 116418.0], [87.8, 116418.0], [87.9, 116418.0], [88.0, 116418.0], [88.1, 116418.0], [88.2, 116418.0], [88.3, 117601.0], [88.4, 117601.0], [88.5, 117601.0], [88.6, 117601.0], [88.7, 117601.0], [88.8, 117601.0], [88.9, 117601.0], [89.0, 117601.0], [89.1, 117864.0], [89.2, 117864.0], [89.3, 117864.0], [89.4, 117864.0], [89.5, 117864.0], [89.6, 117864.0], [89.7, 117864.0], [89.8, 117864.0], [89.9, 117864.0], [90.0, 120007.0], [90.1, 120007.0], [90.2, 120007.0], [90.3, 120007.0], [90.4, 120007.0], [90.5, 120007.0], [90.6, 120007.0], [90.7, 120007.0], [90.8, 120007.0], [90.9, 120007.0], [91.0, 120007.0], [91.1, 120007.0], [91.2, 120007.0], [91.3, 120007.0], [91.4, 120007.0], [91.5, 120007.0], [91.6, 120009.0], [91.7, 120009.0], [91.8, 120009.0], [91.9, 120009.0], [92.0, 120009.0], [92.1, 120009.0], [92.2, 120009.0], [92.3, 120009.0], [92.4, 120009.0], [92.5, 120010.0], [92.6, 120010.0], [92.7, 120010.0], [92.8, 120010.0], [92.9, 120010.0], [93.0, 120010.0], [93.1, 120010.0], [93.2, 120010.0], [93.3, 120010.0], [93.4, 120010.0], [93.5, 120010.0], [93.6, 120010.0], [93.7, 120010.0], [93.8, 120010.0], [93.9, 120010.0], [94.0, 120010.0], [94.1, 120010.0], [94.2, 120010.0], [94.3, 120010.0], [94.4, 120010.0], [94.5, 120010.0], [94.6, 120010.0], [94.7, 120010.0], [94.8, 120010.0], [94.9, 120010.0], [95.0, 120011.0], [95.1, 120011.0], [95.2, 120011.0], [95.3, 120011.0], [95.4, 120011.0], [95.5, 120011.0], [95.6, 120011.0], [95.7, 120011.0], [95.8, 120011.0], [95.9, 120011.0], [96.0, 120011.0], [96.1, 120011.0], [96.2, 120011.0], [96.3, 120011.0], [96.4, 120011.0], [96.5, 120011.0], [96.6, 120011.0], [96.7, 120013.0], [96.8, 120013.0], [96.9, 120013.0], [97.0, 120013.0], [97.1, 120013.0], [97.2, 120013.0], [97.3, 120013.0], [97.4, 120013.0], [97.5, 120014.0], [97.6, 120014.0], [97.7, 120014.0], [97.8, 120014.0], [97.9, 120014.0], [98.0, 120014.0], [98.1, 120014.0], [98.2, 120014.0], [98.3, 120014.0], [98.4, 120017.0], [98.5, 120017.0], [98.6, 120017.0], [98.7, 120017.0], [98.8, 120017.0], [98.9, 120017.0], [99.0, 120017.0], [99.1, 120017.0], [99.2, 120030.0], [99.3, 120030.0], [99.4, 120030.0], [99.5, 120030.0], [99.6, 120030.0], [99.7, 120030.0], [99.8, 120030.0], [99.9, 120030.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 7300.0, "maxY": 12.0, "series": [{"data": [[8200.0, 1.0], [9500.0, 2.0], [10100.0, 2.0], [11200.0, 2.0], [10900.0, 1.0], [11600.0, 1.0], [12600.0, 1.0], [14000.0, 4.0], [15700.0, 5.0], [16000.0, 2.0], [20200.0, 1.0], [19500.0, 5.0], [27600.0, 2.0], [29300.0, 11.0], [37400.0, 1.0], [38600.0, 4.0], [39100.0, 2.0], [48200.0, 5.0], [58100.0, 5.0], [58500.0, 3.0], [58300.0, 3.0], [67900.0, 2.0], [68100.0, 2.0], [67200.0, 3.0], [68000.0, 2.0], [76900.0, 5.0], [86800.0, 5.0], [96700.0, 5.0], [106700.0, 5.0], [7300.0, 2.0], [7400.0, 1.0], [116400.0, 5.0], [117600.0, 1.0], [117800.0, 1.0], [7500.0, 2.0], [120000.0, 12.0], [7900.0, 2.0], [8000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 120000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 12.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 107.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 107.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 12.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.466666666666667, "minX": 1.58917062E12, "maxY": 58.56666666666668, "series": [{"data": [[1.5891708E12, 28.823529411764717], [1.58917068E12, 19.466666666666665], [1.58917086E12, 5.9], [1.58917074E12, 58.56666666666668], [1.58917062E12, 3.466666666666667]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917086E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 12243.444444444445, "minX": 1.0, "maxY": 120030.0, "series": [{"data": [[2.0, 26431.5], [32.0, 29831.6], [33.0, 86831.5], [34.0, 86826.0], [39.0, 76992.0], [41.0, 67267.0], [43.0, 67680.5], [44.0, 67679.5], [46.0, 58366.0], [49.0, 63279.75], [53.0, 58566.0], [54.0, 63244.0], [57.0, 58185.333333333336], [59.0, 58182.5], [63.0, 48257.0], [62.0, 48258.0], [4.0, 37386.125], [64.0, 38081.46153846154], [5.0, 117864.0], [6.0, 120010.0], [8.0, 12243.444444444445], [9.0, 120010.66666666667], [10.0, 117601.0], [11.0, 120030.0], [12.0, 120013.0], [14.0, 120015.5], [1.0, 44951.0], [16.0, 17595.69230769231], [19.0, 116412.2], [22.0, 106767.0], [23.0, 106774.66666666667], [24.0, 106771.0], [27.0, 96741.5], [29.0, 96759.66666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[28.84033613445378, 56198.806722689085]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 64.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 78.0, "minX": 1.58917062E12, "maxY": 31581.9, "series": [{"data": [[1.5891708E12, 293.1333333333333], [1.58917068E12, 156.0], [1.58917086E12, 284.6666666666667], [1.58917074E12, 156.0], [1.58917062E12, 78.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5891708E12, 31581.2], [1.58917068E12, 31581.9], [1.58917086E12, 2105.8166666666666], [1.58917074E12, 31580.7], [1.58917062E12, 15790.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917086E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 8851.733333333335, "minX": 1.58917062E12, "maxY": 119554.0, "series": [{"data": [[1.5891708E12, 95201.38235294116], [1.58917068E12, 20565.766666666674], [1.58917086E12, 119554.0], [1.58917074E12, 50184.066666666666], [1.58917062E12, 8851.733333333335]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58917086E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 8848.733333333332, "minX": 1.58917062E12, "maxY": 81081.5294117647, "series": [{"data": [[1.5891708E12, 81081.5294117647], [1.58917068E12, 20565.699999999997], [1.58917086E12, 23546.499999999996], [1.58917074E12, 50184.03333333333], [1.58917062E12, 8848.733333333332]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58917086E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2.3333333333333335, "minX": 1.58917062E12, "maxY": 7.799999999999997, "series": [{"data": [[1.5891708E12, 7.352941176470589], [1.58917068E12, 2.3333333333333335], [1.58917086E12, 3.1999999999999997], [1.58917074E12, 7.799999999999997], [1.58917062E12, 5.4]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58917086E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 7320.0, "minX": 1.58917062E12, "maxY": 117864.0, "series": [{"data": [[1.5891708E12, 116418.0], [1.58917068E12, 37475.0], [1.58917086E12, 117864.0], [1.58917074E12, 68195.0], [1.58917062E12, 11278.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5891708E12, 67267.0], [1.58917068E12, 9593.0], [1.58917086E12, 117601.0], [1.58917074E12, 29383.0], [1.58917062E12, 7320.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5891708E12, 116415.1], [1.58917068E12, 29385.0], [1.58917086E12, 117864.0], [1.58917074E12, 67917.9], [1.58917062E12, 11278.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5891708E12, 116418.0], [1.58917068E12, 37475.0], [1.58917086E12, 117864.0], [1.58917074E12, 68195.0], [1.58917062E12, 11278.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5891708E12, 116416.9], [1.58917068E12, 33026.049999999996], [1.58917086E12, 117864.0], [1.58917074E12, 68194.45], [1.58917062E12, 11278.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917086E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 7987.0, "minX": 1.0, "maxY": 120010.5, "series": [{"data": [[1.0, 7987.0], [2.0, 10708.5], [5.0, 58187.0], [3.0, 16024.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 120010.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 58187.0, "series": [{"data": [[1.0, 7987.0], [2.0, 10708.5], [5.0, 58187.0], [3.0, 16024.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.58917056E12, "maxY": 1.4333333333333333, "series": [{"data": [[1.58917068E12, 1.4333333333333333], [1.58917056E12, 0.016666666666666666], [1.58917074E12, 0.16666666666666666], [1.58917062E12, 0.36666666666666664]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917074E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.58917062E12, "maxY": 0.5, "series": [{"data": [[1.5891708E12, 0.5], [1.58917068E12, 0.5], [1.58917086E12, 0.03333333333333333], [1.58917074E12, 0.5], [1.58917062E12, 0.25]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.5891708E12, 0.06666666666666667], [1.58917086E12, 0.13333333333333333]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917086E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.58917062E12, "maxY": 0.5, "series": [{"data": [[1.5891708E12, 0.5], [1.58917068E12, 0.5], [1.58917086E12, 0.03333333333333333], [1.58917074E12, 0.5], [1.58917062E12, 0.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.5891708E12, 0.06666666666666667], [1.58917086E12, 0.13333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58917086E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.58917062E12, "maxY": 0.5, "series": [{"data": [[1.5891708E12, 0.5], [1.58917068E12, 0.5], [1.58917086E12, 0.03333333333333333], [1.58917074E12, 0.5], [1.58917062E12, 0.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.5891708E12, 0.06666666666666667], [1.58917086E12, 0.13333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58917086E12, "title": "Total Transactions Per Second"}},
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

