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
        data: {"result": {"minY": 4097.0, "minX": 0.0, "maxY": 120004.0, "series": [{"data": [[0.0, 4097.0], [0.1, 4097.0], [0.2, 4097.0], [0.3, 4097.0], [0.4, 4097.0], [0.5, 4097.0], [0.6, 4097.0], [0.7, 4097.0], [0.8, 5710.0], [0.9, 5710.0], [1.0, 5710.0], [1.1, 5710.0], [1.2, 5710.0], [1.3, 5710.0], [1.4, 5710.0], [1.5, 7284.0], [1.6, 7284.0], [1.7, 7284.0], [1.8, 7284.0], [1.9, 7284.0], [2.0, 7284.0], [2.1, 7284.0], [2.2, 7295.0], [2.3, 7295.0], [2.4, 7295.0], [2.5, 7295.0], [2.6, 7295.0], [2.7, 7295.0], [2.8, 7295.0], [2.9, 7327.0], [3.0, 7327.0], [3.1, 7327.0], [3.2, 7327.0], [3.3, 7327.0], [3.4, 7327.0], [3.5, 7327.0], [3.6, 7353.0], [3.7, 7353.0], [3.8, 7353.0], [3.9, 7353.0], [4.0, 7353.0], [4.1, 7353.0], [4.2, 7353.0], [4.3, 7374.0], [4.4, 7374.0], [4.5, 7374.0], [4.6, 7374.0], [4.7, 7374.0], [4.8, 7374.0], [4.9, 7374.0], [5.0, 7412.0], [5.1, 7412.0], [5.2, 7412.0], [5.3, 7412.0], [5.4, 7412.0], [5.5, 7412.0], [5.6, 7412.0], [5.7, 7427.0], [5.8, 7427.0], [5.9, 7427.0], [6.0, 7427.0], [6.1, 7427.0], [6.2, 7427.0], [6.3, 7427.0], [6.4, 7444.0], [6.5, 7444.0], [6.6, 7444.0], [6.7, 7444.0], [6.8, 7444.0], [6.9, 7444.0], [7.0, 7444.0], [7.1, 7459.0], [7.2, 7459.0], [7.3, 7459.0], [7.4, 7459.0], [7.5, 7459.0], [7.6, 7459.0], [7.7, 7459.0], [7.8, 7459.0], [7.9, 7473.0], [8.0, 7473.0], [8.1, 7473.0], [8.2, 7473.0], [8.3, 7473.0], [8.4, 7473.0], [8.5, 7473.0], [8.6, 7473.0], [8.7, 7473.0], [8.8, 7473.0], [8.9, 7473.0], [9.0, 7473.0], [9.1, 7473.0], [9.2, 7473.0], [9.3, 8039.0], [9.4, 8039.0], [9.5, 8039.0], [9.6, 8039.0], [9.7, 8039.0], [9.8, 8039.0], [9.9, 8039.0], [10.0, 8040.0], [10.1, 8040.0], [10.2, 8040.0], [10.3, 8040.0], [10.4, 8040.0], [10.5, 8040.0], [10.6, 8040.0], [10.7, 8099.0], [10.8, 8099.0], [10.9, 8099.0], [11.0, 8099.0], [11.1, 8099.0], [11.2, 8099.0], [11.3, 8099.0], [11.4, 8153.0], [11.5, 8153.0], [11.6, 8153.0], [11.7, 8153.0], [11.8, 8153.0], [11.9, 8153.0], [12.0, 8153.0], [12.1, 8666.0], [12.2, 8666.0], [12.3, 8666.0], [12.4, 8666.0], [12.5, 8666.0], [12.6, 8666.0], [12.7, 8666.0], [12.8, 9111.0], [12.9, 9111.0], [13.0, 9111.0], [13.1, 9111.0], [13.2, 9111.0], [13.3, 9111.0], [13.4, 9111.0], [13.5, 9120.0], [13.6, 9120.0], [13.7, 9120.0], [13.8, 9120.0], [13.9, 9120.0], [14.0, 9120.0], [14.1, 9120.0], [14.2, 9403.0], [14.3, 9403.0], [14.4, 9403.0], [14.5, 9403.0], [14.6, 9403.0], [14.7, 9403.0], [14.8, 9403.0], [14.9, 9404.0], [15.0, 9404.0], [15.1, 9404.0], [15.2, 9404.0], [15.3, 9404.0], [15.4, 9404.0], [15.5, 9404.0], [15.6, 9404.0], [15.7, 9853.0], [15.8, 9853.0], [15.9, 9853.0], [16.0, 9853.0], [16.1, 9853.0], [16.2, 9853.0], [16.3, 9853.0], [16.4, 10446.0], [16.5, 10446.0], [16.6, 10446.0], [16.7, 10446.0], [16.8, 10446.0], [16.9, 10446.0], [17.0, 10446.0], [17.1, 11680.0], [17.2, 11680.0], [17.3, 11680.0], [17.4, 11680.0], [17.5, 11680.0], [17.6, 11680.0], [17.7, 11680.0], [17.8, 12242.0], [17.9, 12242.0], [18.0, 12242.0], [18.1, 12242.0], [18.2, 12242.0], [18.3, 12242.0], [18.4, 12242.0], [18.5, 12243.0], [18.6, 12243.0], [18.7, 12243.0], [18.8, 12243.0], [18.9, 12243.0], [19.0, 12243.0], [19.1, 12243.0], [19.2, 12243.0], [19.3, 12243.0], [19.4, 12243.0], [19.5, 12243.0], [19.6, 12243.0], [19.7, 12243.0], [19.8, 12243.0], [19.9, 12252.0], [20.0, 12252.0], [20.1, 12252.0], [20.2, 12252.0], [20.3, 12252.0], [20.4, 12252.0], [20.5, 12252.0], [20.6, 12253.0], [20.7, 12253.0], [20.8, 12253.0], [20.9, 12253.0], [21.0, 12253.0], [21.1, 12253.0], [21.2, 12253.0], [21.3, 12254.0], [21.4, 12254.0], [21.5, 12254.0], [21.6, 12254.0], [21.7, 12254.0], [21.8, 12254.0], [21.9, 12254.0], [22.0, 12697.0], [22.1, 12697.0], [22.2, 12697.0], [22.3, 12697.0], [22.4, 12697.0], [22.5, 12697.0], [22.6, 12697.0], [22.7, 12812.0], [22.8, 12812.0], [22.9, 12812.0], [23.0, 12812.0], [23.1, 12812.0], [23.2, 12812.0], [23.3, 12812.0], [23.4, 12812.0], [23.5, 13595.0], [23.6, 13595.0], [23.7, 13595.0], [23.8, 13595.0], [23.9, 13595.0], [24.0, 13595.0], [24.1, 13595.0], [24.2, 13970.0], [24.3, 13970.0], [24.4, 13970.0], [24.5, 13970.0], [24.6, 13970.0], [24.7, 13970.0], [24.8, 13970.0], [24.9, 14187.0], [25.0, 14187.0], [25.1, 14187.0], [25.2, 14187.0], [25.3, 14187.0], [25.4, 14187.0], [25.5, 14187.0], [25.6, 14950.0], [25.7, 14950.0], [25.8, 14950.0], [25.9, 14950.0], [26.0, 14950.0], [26.1, 14950.0], [26.2, 14950.0], [26.3, 14950.0], [26.4, 14950.0], [26.5, 14950.0], [26.6, 14950.0], [26.7, 14950.0], [26.8, 14950.0], [26.9, 14950.0], [27.0, 14950.0], [27.1, 14950.0], [27.2, 14950.0], [27.3, 14950.0], [27.4, 14950.0], [27.5, 14950.0], [27.6, 14950.0], [27.7, 14955.0], [27.8, 14955.0], [27.9, 14955.0], [28.0, 14955.0], [28.1, 14955.0], [28.2, 14955.0], [28.3, 14955.0], [28.4, 16287.0], [28.5, 16287.0], [28.6, 16287.0], [28.7, 16287.0], [28.8, 16287.0], [28.9, 16287.0], [29.0, 16287.0], [29.1, 17289.0], [29.2, 17289.0], [29.3, 17289.0], [29.4, 17289.0], [29.5, 17289.0], [29.6, 17289.0], [29.7, 17289.0], [29.8, 17293.0], [29.9, 17293.0], [30.0, 17293.0], [30.1, 17293.0], [30.2, 17293.0], [30.3, 17293.0], [30.4, 17293.0], [30.5, 17294.0], [30.6, 17294.0], [30.7, 17294.0], [30.8, 17294.0], [30.9, 17294.0], [31.0, 17294.0], [31.1, 17294.0], [31.2, 17294.0], [31.3, 17294.0], [31.4, 17294.0], [31.5, 17294.0], [31.6, 17294.0], [31.7, 17294.0], [31.8, 17294.0], [31.9, 17294.0], [32.0, 18115.0], [32.1, 18115.0], [32.2, 18115.0], [32.3, 18115.0], [32.4, 18115.0], [32.5, 18115.0], [32.6, 18115.0], [32.7, 18121.0], [32.8, 18121.0], [32.9, 18121.0], [33.0, 18121.0], [33.1, 18121.0], [33.2, 18121.0], [33.3, 18121.0], [33.4, 20456.0], [33.5, 20456.0], [33.6, 20456.0], [33.7, 20456.0], [33.8, 20456.0], [33.9, 20456.0], [34.0, 20456.0], [34.1, 20463.0], [34.2, 20463.0], [34.3, 20463.0], [34.4, 20463.0], [34.5, 20463.0], [34.6, 20463.0], [34.7, 20463.0], [34.8, 20839.0], [34.9, 20839.0], [35.0, 20839.0], [35.1, 20839.0], [35.2, 20839.0], [35.3, 20839.0], [35.4, 20839.0], [35.5, 20839.0], [35.6, 20839.0], [35.7, 20839.0], [35.8, 20839.0], [35.9, 20839.0], [36.0, 20839.0], [36.1, 20839.0], [36.2, 20840.0], [36.3, 20840.0], [36.4, 20840.0], [36.5, 20840.0], [36.6, 20840.0], [36.7, 20840.0], [36.8, 20840.0], [36.9, 22704.0], [37.0, 22704.0], [37.1, 22704.0], [37.2, 22704.0], [37.3, 22704.0], [37.4, 22704.0], [37.5, 22704.0], [37.6, 22705.0], [37.7, 22705.0], [37.8, 22705.0], [37.9, 22705.0], [38.0, 22705.0], [38.1, 22705.0], [38.2, 22705.0], [38.3, 22705.0], [38.4, 22705.0], [38.5, 22705.0], [38.6, 22705.0], [38.7, 22705.0], [38.8, 22705.0], [38.9, 22705.0], [39.0, 22705.0], [39.1, 22847.0], [39.2, 22847.0], [39.3, 22847.0], [39.4, 22847.0], [39.5, 22847.0], [39.6, 22847.0], [39.7, 22847.0], [39.8, 22848.0], [39.9, 22848.0], [40.0, 22848.0], [40.1, 22848.0], [40.2, 22848.0], [40.3, 22848.0], [40.4, 22848.0], [40.5, 24418.0], [40.6, 24418.0], [40.7, 24418.0], [40.8, 24418.0], [40.9, 24418.0], [41.0, 24418.0], [41.1, 24418.0], [41.2, 24420.0], [41.3, 24420.0], [41.4, 24420.0], [41.5, 24420.0], [41.6, 24420.0], [41.7, 24420.0], [41.8, 24420.0], [41.9, 24421.0], [42.0, 24421.0], [42.1, 24421.0], [42.2, 24421.0], [42.3, 24421.0], [42.4, 24421.0], [42.5, 24421.0], [42.6, 24422.0], [42.7, 24422.0], [42.8, 24422.0], [42.9, 24422.0], [43.0, 24422.0], [43.1, 24422.0], [43.2, 24422.0], [43.3, 24424.0], [43.4, 24424.0], [43.5, 24424.0], [43.6, 24424.0], [43.7, 24424.0], [43.8, 24424.0], [43.9, 24424.0], [44.0, 26056.0], [44.1, 26056.0], [44.2, 26056.0], [44.3, 26056.0], [44.4, 26056.0], [44.5, 26056.0], [44.6, 26056.0], [44.7, 26056.0], [44.8, 26056.0], [44.9, 26056.0], [45.0, 26056.0], [45.1, 26056.0], [45.2, 26056.0], [45.3, 26056.0], [45.4, 26056.0], [45.5, 26056.0], [45.6, 26056.0], [45.7, 26056.0], [45.8, 26056.0], [45.9, 26056.0], [46.0, 26056.0], [46.1, 26056.0], [46.2, 26056.0], [46.3, 26056.0], [46.4, 26056.0], [46.5, 26056.0], [46.6, 26056.0], [46.7, 26056.0], [46.8, 26056.0], [46.9, 26060.0], [47.0, 26060.0], [47.1, 26060.0], [47.2, 26060.0], [47.3, 26060.0], [47.4, 26060.0], [47.5, 26060.0], [47.6, 27756.0], [47.7, 27756.0], [47.8, 27756.0], [47.9, 27756.0], [48.0, 27756.0], [48.1, 27756.0], [48.2, 27756.0], [48.3, 27757.0], [48.4, 27757.0], [48.5, 27757.0], [48.6, 27757.0], [48.7, 27757.0], [48.8, 27757.0], [48.9, 27757.0], [49.0, 29738.0], [49.1, 29738.0], [49.2, 29738.0], [49.3, 29738.0], [49.4, 29738.0], [49.5, 29738.0], [49.6, 29738.0], [49.7, 29741.0], [49.8, 29741.0], [49.9, 29741.0], [50.0, 29741.0], [50.1, 29741.0], [50.2, 29741.0], [50.3, 29741.0], [50.4, 29742.0], [50.5, 29742.0], [50.6, 29742.0], [50.7, 29742.0], [50.8, 29742.0], [50.9, 29742.0], [51.0, 29742.0], [51.1, 29743.0], [51.2, 29743.0], [51.3, 29743.0], [51.4, 29743.0], [51.5, 29743.0], [51.6, 29743.0], [51.7, 29743.0], [51.8, 30000.0], [51.9, 30000.0], [52.0, 30000.0], [52.1, 30000.0], [52.2, 30000.0], [52.3, 30000.0], [52.4, 30000.0], [52.5, 30005.0], [52.6, 30005.0], [52.7, 30005.0], [52.8, 30005.0], [52.9, 30005.0], [53.0, 30005.0], [53.1, 30005.0], [53.2, 30006.0], [53.3, 30006.0], [53.4, 30006.0], [53.5, 30006.0], [53.6, 30006.0], [53.7, 30006.0], [53.8, 30006.0], [53.9, 30006.0], [54.0, 31639.0], [54.1, 31639.0], [54.2, 31639.0], [54.3, 31639.0], [54.4, 31639.0], [54.5, 31639.0], [54.6, 31639.0], [54.7, 31644.0], [54.8, 31644.0], [54.9, 31644.0], [55.0, 31644.0], [55.1, 31644.0], [55.2, 31644.0], [55.3, 31644.0], [55.4, 35048.0], [55.5, 35048.0], [55.6, 35048.0], [55.7, 35048.0], [55.8, 35048.0], [55.9, 35048.0], [56.0, 35048.0], [56.1, 35855.0], [56.2, 35855.0], [56.3, 35855.0], [56.4, 35855.0], [56.5, 35855.0], [56.6, 35855.0], [56.7, 35855.0], [56.8, 35856.0], [56.9, 35856.0], [57.0, 35856.0], [57.1, 35856.0], [57.2, 35856.0], [57.3, 35856.0], [57.4, 35856.0], [57.5, 35856.0], [57.6, 35856.0], [57.7, 35856.0], [57.8, 35856.0], [57.9, 35856.0], [58.0, 35856.0], [58.1, 35856.0], [58.2, 35860.0], [58.3, 35860.0], [58.4, 35860.0], [58.5, 35860.0], [58.6, 35860.0], [58.7, 35860.0], [58.8, 35860.0], [58.9, 36687.0], [59.0, 36687.0], [59.1, 36687.0], [59.2, 36687.0], [59.3, 36687.0], [59.4, 36687.0], [59.5, 36687.0], [59.6, 36693.0], [59.7, 36693.0], [59.8, 36693.0], [59.9, 36693.0], [60.0, 36693.0], [60.1, 36693.0], [60.2, 36693.0], [60.3, 36696.0], [60.4, 36696.0], [60.5, 36696.0], [60.6, 36696.0], [60.7, 36696.0], [60.8, 36696.0], [60.9, 36696.0], [61.0, 36698.0], [61.1, 36698.0], [61.2, 36698.0], [61.3, 36698.0], [61.4, 36698.0], [61.5, 36698.0], [61.6, 36698.0], [61.7, 36698.0], [61.8, 36701.0], [61.9, 36701.0], [62.0, 36701.0], [62.1, 36701.0], [62.2, 36701.0], [62.3, 36701.0], [62.4, 36701.0], [62.5, 37487.0], [62.6, 37487.0], [62.7, 37487.0], [62.8, 37487.0], [62.9, 37487.0], [63.0, 37487.0], [63.1, 37487.0], [63.2, 37487.0], [63.3, 37487.0], [63.4, 37487.0], [63.5, 37487.0], [63.6, 37487.0], [63.7, 37487.0], [63.8, 37487.0], [63.9, 37488.0], [64.0, 37488.0], [64.1, 37488.0], [64.2, 37488.0], [64.3, 37488.0], [64.4, 37488.0], [64.5, 37488.0], [64.6, 37488.0], [64.7, 37488.0], [64.8, 37488.0], [64.9, 37488.0], [65.0, 37488.0], [65.1, 37488.0], [65.2, 37488.0], [65.3, 37492.0], [65.4, 37492.0], [65.5, 37492.0], [65.6, 37492.0], [65.7, 37492.0], [65.8, 37492.0], [65.9, 37492.0], [66.0, 38197.0], [66.1, 38197.0], [66.2, 38197.0], [66.3, 38197.0], [66.4, 38197.0], [66.5, 38197.0], [66.6, 38197.0], [66.7, 39709.0], [66.8, 39709.0], [66.9, 39709.0], [67.0, 39709.0], [67.1, 39709.0], [67.2, 39709.0], [67.3, 39709.0], [67.4, 39709.0], [67.5, 39709.0], [67.6, 39709.0], [67.7, 39709.0], [67.8, 39709.0], [67.9, 39709.0], [68.0, 39709.0], [68.1, 41718.0], [68.2, 41718.0], [68.3, 41718.0], [68.4, 41718.0], [68.5, 41718.0], [68.6, 41718.0], [68.7, 41718.0], [68.8, 46157.0], [68.9, 46157.0], [69.0, 46157.0], [69.1, 46157.0], [69.2, 46157.0], [69.3, 46157.0], [69.4, 46157.0], [69.5, 46157.0], [69.6, 46158.0], [69.7, 46158.0], [69.8, 46158.0], [69.9, 46158.0], [70.0, 46158.0], [70.1, 46158.0], [70.2, 46158.0], [70.3, 46161.0], [70.4, 46161.0], [70.5, 46161.0], [70.6, 46161.0], [70.7, 46161.0], [70.8, 46161.0], [70.9, 46161.0], [71.0, 46165.0], [71.1, 46165.0], [71.2, 46165.0], [71.3, 46165.0], [71.4, 46165.0], [71.5, 46165.0], [71.6, 46165.0], [71.7, 46168.0], [71.8, 46168.0], [71.9, 46168.0], [72.0, 46168.0], [72.1, 46168.0], [72.2, 46168.0], [72.3, 46168.0], [72.4, 47796.0], [72.5, 47796.0], [72.6, 47796.0], [72.7, 47796.0], [72.8, 47796.0], [72.9, 47796.0], [73.0, 47796.0], [73.1, 47798.0], [73.2, 47798.0], [73.3, 47798.0], [73.4, 47798.0], [73.5, 47798.0], [73.6, 47798.0], [73.7, 47798.0], [73.8, 47802.0], [73.9, 47802.0], [74.0, 47802.0], [74.1, 47802.0], [74.2, 47802.0], [74.3, 47802.0], [74.4, 47802.0], [74.5, 47806.0], [74.6, 47806.0], [74.7, 47806.0], [74.8, 47806.0], [74.9, 47806.0], [75.0, 47806.0], [75.1, 47806.0], [75.2, 47806.0], [75.3, 47806.0], [75.4, 47806.0], [75.5, 47806.0], [75.6, 47806.0], [75.7, 47806.0], [75.8, 47806.0], [75.9, 53045.0], [76.0, 53045.0], [76.1, 53045.0], [76.2, 53045.0], [76.3, 53045.0], [76.4, 53045.0], [76.5, 53045.0], [76.6, 53046.0], [76.7, 53046.0], [76.8, 53046.0], [76.9, 53046.0], [77.0, 53046.0], [77.1, 53046.0], [77.2, 53046.0], [77.3, 53046.0], [77.4, 53450.0], [77.5, 53450.0], [77.6, 53450.0], [77.7, 53450.0], [77.8, 53450.0], [77.9, 53450.0], [78.0, 53450.0], [78.1, 53451.0], [78.2, 53451.0], [78.3, 53451.0], [78.4, 53451.0], [78.5, 53451.0], [78.6, 53451.0], [78.7, 53451.0], [78.8, 56168.0], [78.9, 56168.0], [79.0, 56168.0], [79.1, 56168.0], [79.2, 56168.0], [79.3, 56168.0], [79.4, 56168.0], [79.5, 56171.0], [79.6, 56171.0], [79.7, 56171.0], [79.8, 56171.0], [79.9, 56171.0], [80.0, 56171.0], [80.1, 56171.0], [80.2, 56178.0], [80.3, 56178.0], [80.4, 56178.0], [80.5, 56178.0], [80.6, 56178.0], [80.7, 56178.0], [80.8, 56178.0], [80.9, 56178.0], [81.0, 56178.0], [81.1, 56178.0], [81.2, 56178.0], [81.3, 56178.0], [81.4, 56178.0], [81.5, 56178.0], [81.6, 56192.0], [81.7, 56192.0], [81.8, 56192.0], [81.9, 56192.0], [82.0, 56192.0], [82.1, 56192.0], [82.2, 56192.0], [82.3, 57810.0], [82.4, 57810.0], [82.5, 57810.0], [82.6, 57810.0], [82.7, 57810.0], [82.8, 57810.0], [82.9, 57810.0], [83.0, 57816.0], [83.1, 57816.0], [83.2, 57816.0], [83.3, 57816.0], [83.4, 57816.0], [83.5, 57816.0], [83.6, 57816.0], [83.7, 57820.0], [83.8, 57820.0], [83.9, 57820.0], [84.0, 57820.0], [84.1, 57820.0], [84.2, 57820.0], [84.3, 57820.0], [84.4, 59700.0], [84.5, 59700.0], [84.6, 59700.0], [84.7, 59700.0], [84.8, 59700.0], [84.9, 59700.0], [85.0, 59700.0], [85.1, 59700.0], [85.2, 59701.0], [85.3, 59701.0], [85.4, 59701.0], [85.5, 59701.0], [85.6, 59701.0], [85.7, 59701.0], [85.8, 59701.0], [85.9, 59701.0], [86.0, 59701.0], [86.1, 59701.0], [86.2, 59701.0], [86.3, 59701.0], [86.4, 59701.0], [86.5, 59701.0], [86.6, 62059.0], [86.7, 62059.0], [86.8, 62059.0], [86.9, 62059.0], [87.0, 62059.0], [87.1, 62059.0], [87.2, 62059.0], [87.3, 62059.0], [87.4, 62059.0], [87.5, 62059.0], [87.6, 62059.0], [87.7, 62059.0], [87.8, 62059.0], [87.9, 62059.0], [88.0, 62060.0], [88.1, 62060.0], [88.2, 62060.0], [88.3, 62060.0], [88.4, 62060.0], [88.5, 62060.0], [88.6, 62060.0], [88.7, 66262.0], [88.8, 66262.0], [88.9, 66262.0], [89.0, 66262.0], [89.1, 66262.0], [89.2, 66262.0], [89.3, 66262.0], [89.4, 66263.0], [89.5, 66263.0], [89.6, 66263.0], [89.7, 66263.0], [89.8, 66263.0], [89.9, 66263.0], [90.0, 66263.0], [90.1, 66269.0], [90.2, 66269.0], [90.3, 66269.0], [90.4, 66269.0], [90.5, 66269.0], [90.6, 66269.0], [90.7, 66269.0], [90.8, 66269.0], [90.9, 66269.0], [91.0, 66269.0], [91.1, 66269.0], [91.2, 66269.0], [91.3, 66269.0], [91.4, 66269.0], [91.5, 66274.0], [91.6, 66274.0], [91.7, 66274.0], [91.8, 66274.0], [91.9, 66274.0], [92.0, 66274.0], [92.1, 66274.0], [92.2, 69529.0], [92.3, 69529.0], [92.4, 69529.0], [92.5, 69529.0], [92.6, 69529.0], [92.7, 69529.0], [92.8, 69529.0], [92.9, 69529.0], [93.0, 69530.0], [93.1, 69530.0], [93.2, 69530.0], [93.3, 69530.0], [93.4, 69530.0], [93.5, 69530.0], [93.6, 69530.0], [93.7, 71163.0], [93.8, 71163.0], [93.9, 71163.0], [94.0, 71163.0], [94.1, 71163.0], [94.2, 71163.0], [94.3, 71163.0], [94.4, 71163.0], [94.5, 71163.0], [94.6, 71163.0], [94.7, 71163.0], [94.8, 71163.0], [94.9, 71163.0], [95.0, 71163.0], [95.1, 71167.0], [95.2, 71167.0], [95.3, 71167.0], [95.4, 71167.0], [95.5, 71167.0], [95.6, 71167.0], [95.7, 71167.0], [95.8, 71986.0], [95.9, 71986.0], [96.0, 71986.0], [96.1, 71986.0], [96.2, 71986.0], [96.3, 71986.0], [96.4, 71986.0], [96.5, 71986.0], [96.6, 71986.0], [96.7, 71986.0], [96.8, 71986.0], [96.9, 71986.0], [97.0, 71986.0], [97.1, 71986.0], [97.2, 72602.0], [97.3, 72602.0], [97.4, 72602.0], [97.5, 72602.0], [97.6, 72602.0], [97.7, 72602.0], [97.8, 72602.0], [97.9, 72602.0], [98.0, 72602.0], [98.1, 72602.0], [98.2, 72602.0], [98.3, 72602.0], [98.4, 72602.0], [98.5, 72602.0], [98.6, 74234.0], [98.7, 74234.0], [98.8, 74234.0], [98.9, 74234.0], [99.0, 74234.0], [99.1, 74234.0], [99.2, 74234.0], [99.3, 120004.0], [99.4, 120004.0], [99.5, 120004.0], [99.6, 120004.0], [99.7, 120004.0], [99.8, 120004.0], [99.9, 120004.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 4000.0, "maxY": 6.0, "series": [{"data": [[4000.0, 1.0], [69500.0, 2.0], [71900.0, 2.0], [71100.0, 3.0], [5700.0, 1.0], [7200.0, 2.0], [7400.0, 6.0], [7300.0, 3.0], [8100.0, 1.0], [8000.0, 3.0], [8600.0, 1.0], [9100.0, 2.0], [9400.0, 2.0], [9800.0, 1.0], [10400.0, 1.0], [11600.0, 1.0], [12200.0, 6.0], [12600.0, 1.0], [12800.0, 1.0], [13500.0, 1.0], [13900.0, 1.0], [14100.0, 1.0], [14900.0, 4.0], [16200.0, 1.0], [17200.0, 4.0], [18100.0, 2.0], [20400.0, 2.0], [20800.0, 3.0], [22800.0, 2.0], [22700.0, 3.0], [24400.0, 5.0], [26000.0, 5.0], [27700.0, 2.0], [29700.0, 4.0], [30000.0, 3.0], [31600.0, 2.0], [35000.0, 1.0], [36600.0, 4.0], [36700.0, 1.0], [35800.0, 4.0], [38100.0, 1.0], [37400.0, 5.0], [39700.0, 2.0], [41700.0, 1.0], [46100.0, 5.0], [47800.0, 3.0], [47700.0, 2.0], [53000.0, 2.0], [53400.0, 2.0], [56100.0, 5.0], [57800.0, 3.0], [59700.0, 3.0], [62000.0, 3.0], [66200.0, 5.0], [72600.0, 2.0], [74200.0, 1.0], [120000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 120000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 140.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 140.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.875, "minX": 1.58917086E12, "maxY": 52.23636363636362, "series": [{"data": [[1.58917098E12, 52.23636363636362], [1.58917086E12, 1.875], [1.58917104E12, 24.045454545454554], [1.58917092E12, 11.176470588235295]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917104E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 6273.0, "minX": 1.0, "maxY": 120004.0, "series": [{"data": [[2.0, 7739.25], [32.0, 19056.533333333336], [33.0, 56177.4], [34.0, 120004.0], [39.0, 47803.0], [38.0, 47796.0], [41.0, 46158.0], [43.0, 46165.0], [44.0, 46162.0], [49.0, 37488.4], [51.0, 35860.0], [52.0, 35855.5], [54.0, 37026.5], [56.0, 31641.5], [59.0, 40378.666666666664], [60.0, 30006.0], [4.0, 20526.7], [64.0, 29391.41666666666], [5.0, 71164.33333333333], [8.0, 24768.923076923078], [12.0, 71986.0], [13.0, 62772.0], [1.0, 6273.0], [16.0, 13896.705882352942], [17.0, 56050.333333333336], [18.0, 62059.0], [21.0, 66274.0], [23.0, 66265.75], [26.0, 53451.0], [28.0, 56724.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[30.680851063829795, 33327.97163120566]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 64.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 41.6, "minX": 1.58917086E12, "maxY": 57897.03333333333, "series": [{"data": [[1.58917098E12, 286.0], [1.58917086E12, 41.6], [1.58917104E12, 257.8833333333333], [1.58917092E12, 176.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58917098E12, 57897.03333333333], [1.58917086E12, 8421.266666666666], [1.58917104E12, 45264.78333333333], [1.58917092E12, 35790.98333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917104E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 7156.124999999999, "minX": 1.58917086E12, "maxY": 60675.56818181816, "series": [{"data": [[1.58917098E12, 28631.509090909094], [1.58917086E12, 7156.124999999999], [1.58917104E12, 60675.56818181816], [1.58917092E12, 11692.264705882351]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58917104E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 7155.875000000001, "minX": 1.58917086E12, "maxY": 57948.20454545455, "series": [{"data": [[1.58917098E12, 28631.32727272727], [1.58917086E12, 7155.875000000001], [1.58917104E12, 57948.20454545455], [1.58917092E12, 11692.176470588236]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58917104E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.7941176470588234, "minX": 1.58917086E12, "maxY": 5.75, "series": [{"data": [[1.58917098E12, 3.509090909090909], [1.58917086E12, 5.75], [1.58917104E12, 4.681818181818181], [1.58917092E12, 1.7941176470588234]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58917104E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4097.0, "minX": 1.58917086E12, "maxY": 74234.0, "series": [{"data": [[1.58917098E12, 41718.0], [1.58917086E12, 8666.0], [1.58917104E12, 74234.0], [1.58917092E12, 17294.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58917098E12, 8039.0], [1.58917086E12, 4097.0], [1.58917104E12, 46157.0], [1.58917092E12, 5710.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58917098E12, 37489.6], [1.58917086E12, 8666.0], [1.58917104E12, 71986.0], [1.58917092E12, 17291.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58917098E12, 41718.0], [1.58917086E12, 8666.0], [1.58917104E12, 74234.0], [1.58917092E12, 17294.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58917098E12, 39709.0], [1.58917086E12, 8666.0], [1.58917104E12, 72602.0], [1.58917092E12, 17294.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917104E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 7459.0, "minX": 1.0, "maxY": 120004.0, "series": [{"data": [[1.0, 7459.0], [2.0, 16125.5], [4.0, 17293.5], [5.0, 36693.0], [3.0, 47653.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 120004.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 47653.5, "series": [{"data": [[1.0, 7459.0], [2.0, 16125.5], [4.0, 17293.5], [5.0, 36693.0], [3.0, 47653.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.58917086E12, "maxY": 1.1166666666666667, "series": [{"data": [[1.58917098E12, 1.1166666666666667], [1.58917086E12, 0.2], [1.58917092E12, 1.0333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917098E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.58917086E12, "maxY": 0.9166666666666666, "series": [{"data": [[1.58917098E12, 0.9166666666666666], [1.58917086E12, 0.13333333333333333], [1.58917104E12, 0.7166666666666667], [1.58917092E12, 0.5666666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.58917104E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917104E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.58917086E12, "maxY": 0.9166666666666666, "series": [{"data": [[1.58917098E12, 0.9166666666666666], [1.58917086E12, 0.13333333333333333], [1.58917104E12, 0.7166666666666667], [1.58917092E12, 0.5666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.58917104E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58917104E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.58917086E12, "maxY": 0.9166666666666666, "series": [{"data": [[1.58917098E12, 0.9166666666666666], [1.58917086E12, 0.13333333333333333], [1.58917104E12, 0.7166666666666667], [1.58917092E12, 0.5666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.58917104E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58917104E12, "title": "Total Transactions Per Second"}},
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

