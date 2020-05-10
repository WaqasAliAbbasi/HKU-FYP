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
        data: {"result": {"minY": 3350.0, "minX": 0.0, "maxY": 16994.0, "series": [{"data": [[0.0, 3350.0], [0.1, 3350.0], [0.2, 3350.0], [0.3, 3350.0], [0.4, 3350.0], [0.5, 3350.0], [0.6, 3377.0], [0.7, 3377.0], [0.8, 3377.0], [0.9, 3377.0], [1.0, 3377.0], [1.1, 3377.0], [1.2, 3446.0], [1.3, 3446.0], [1.4, 3446.0], [1.5, 3446.0], [1.6, 3446.0], [1.7, 3446.0], [1.8, 3482.0], [1.9, 3482.0], [2.0, 3482.0], [2.1, 3482.0], [2.2, 3482.0], [2.3, 3482.0], [2.4, 3482.0], [2.5, 3482.0], [2.6, 3482.0], [2.7, 3482.0], [2.8, 3482.0], [2.9, 3483.0], [3.0, 3483.0], [3.1, 3483.0], [3.2, 3483.0], [3.3, 3483.0], [3.4, 3483.0], [3.5, 3495.0], [3.6, 3495.0], [3.7, 3495.0], [3.8, 3495.0], [3.9, 3495.0], [4.0, 3585.0], [4.1, 3585.0], [4.2, 3585.0], [4.3, 3585.0], [4.4, 3585.0], [4.5, 3585.0], [4.6, 3587.0], [4.7, 3587.0], [4.8, 3587.0], [4.9, 3587.0], [5.0, 3587.0], [5.1, 3587.0], [5.2, 3618.0], [5.3, 3618.0], [5.4, 3618.0], [5.5, 3618.0], [5.6, 3618.0], [5.7, 3618.0], [5.8, 3627.0], [5.9, 3627.0], [6.0, 3627.0], [6.1, 3627.0], [6.2, 3627.0], [6.3, 3684.0], [6.4, 3684.0], [6.5, 3684.0], [6.6, 3684.0], [6.7, 3684.0], [6.8, 3684.0], [6.9, 3685.0], [7.0, 3685.0], [7.1, 3685.0], [7.2, 3685.0], [7.3, 3685.0], [7.4, 3685.0], [7.5, 3685.0], [7.6, 3685.0], [7.7, 3685.0], [7.8, 3685.0], [7.9, 3685.0], [8.0, 3686.0], [8.1, 3686.0], [8.2, 3686.0], [8.3, 3686.0], [8.4, 3686.0], [8.5, 3686.0], [8.6, 3686.0], [8.7, 3686.0], [8.8, 3686.0], [8.9, 3686.0], [9.0, 3686.0], [9.1, 3686.0], [9.2, 3693.0], [9.3, 3693.0], [9.4, 3693.0], [9.5, 3693.0], [9.6, 3693.0], [9.7, 3693.0], [9.8, 3709.0], [9.9, 3709.0], [10.0, 3709.0], [10.1, 3709.0], [10.2, 3709.0], [10.3, 3732.0], [10.4, 3732.0], [10.5, 3732.0], [10.6, 3732.0], [10.7, 3732.0], [10.8, 3732.0], [10.9, 3738.0], [11.0, 3738.0], [11.1, 3738.0], [11.2, 3738.0], [11.3, 3738.0], [11.4, 3738.0], [11.5, 3743.0], [11.6, 3743.0], [11.7, 3743.0], [11.8, 3743.0], [11.9, 3743.0], [12.0, 3763.0], [12.1, 3763.0], [12.2, 3763.0], [12.3, 3763.0], [12.4, 3763.0], [12.5, 3763.0], [12.6, 3770.0], [12.7, 3770.0], [12.8, 3770.0], [12.9, 3770.0], [13.0, 3770.0], [13.1, 3770.0], [13.2, 3771.0], [13.3, 3771.0], [13.4, 3771.0], [13.5, 3771.0], [13.6, 3771.0], [13.7, 3771.0], [13.8, 3777.0], [13.9, 3777.0], [14.0, 3777.0], [14.1, 3777.0], [14.2, 3777.0], [14.3, 3785.0], [14.4, 3785.0], [14.5, 3785.0], [14.6, 3785.0], [14.7, 3785.0], [14.8, 3785.0], [14.9, 3787.0], [15.0, 3787.0], [15.1, 3787.0], [15.2, 3787.0], [15.3, 3787.0], [15.4, 3787.0], [15.5, 3787.0], [15.6, 3787.0], [15.7, 3787.0], [15.8, 3787.0], [15.9, 3787.0], [16.0, 3789.0], [16.1, 3789.0], [16.2, 3789.0], [16.3, 3789.0], [16.4, 3789.0], [16.5, 3789.0], [16.6, 3840.0], [16.7, 3840.0], [16.8, 3840.0], [16.9, 3840.0], [17.0, 3840.0], [17.1, 3840.0], [17.2, 3891.0], [17.3, 3891.0], [17.4, 3891.0], [17.5, 3891.0], [17.6, 3891.0], [17.7, 3891.0], [17.8, 3891.0], [17.9, 3891.0], [18.0, 3891.0], [18.1, 3891.0], [18.2, 3891.0], [18.3, 3898.0], [18.4, 3898.0], [18.5, 3898.0], [18.6, 3898.0], [18.7, 3898.0], [18.8, 3898.0], [18.9, 3964.0], [19.0, 3964.0], [19.1, 3964.0], [19.2, 3964.0], [19.3, 3964.0], [19.4, 3964.0], [19.5, 3992.0], [19.6, 3992.0], [19.7, 3992.0], [19.8, 3992.0], [19.9, 3992.0], [20.0, 4120.0], [20.1, 4120.0], [20.2, 4120.0], [20.3, 4120.0], [20.4, 4120.0], [20.5, 4120.0], [20.6, 4150.0], [20.7, 4150.0], [20.8, 4150.0], [20.9, 4150.0], [21.0, 4150.0], [21.1, 4150.0], [21.2, 4196.0], [21.3, 4196.0], [21.4, 4196.0], [21.5, 4196.0], [21.6, 4196.0], [21.7, 4196.0], [21.8, 4200.0], [21.9, 4200.0], [22.0, 4200.0], [22.1, 4200.0], [22.2, 4200.0], [22.3, 4664.0], [22.4, 4664.0], [22.5, 4664.0], [22.6, 4664.0], [22.7, 4664.0], [22.8, 4664.0], [22.9, 4999.0], [23.0, 4999.0], [23.1, 4999.0], [23.2, 4999.0], [23.3, 4999.0], [23.4, 4999.0], [23.5, 5960.0], [23.6, 5960.0], [23.7, 5960.0], [23.8, 5960.0], [23.9, 5960.0], [24.0, 5960.0], [24.1, 6981.0], [24.2, 6981.0], [24.3, 6981.0], [24.4, 6981.0], [24.5, 6981.0], [24.6, 7412.0], [24.7, 7412.0], [24.8, 7412.0], [24.9, 7412.0], [25.0, 7412.0], [25.1, 7412.0], [25.2, 7425.0], [25.3, 7425.0], [25.4, 7425.0], [25.5, 7425.0], [25.6, 7425.0], [25.7, 7425.0], [25.8, 7576.0], [25.9, 7576.0], [26.0, 7576.0], [26.1, 7576.0], [26.2, 7576.0], [26.3, 7576.0], [26.4, 7576.0], [26.5, 7576.0], [26.6, 7576.0], [26.7, 7576.0], [26.8, 7576.0], [26.9, 7582.0], [27.0, 7582.0], [27.1, 7582.0], [27.2, 7582.0], [27.3, 7582.0], [27.4, 7582.0], [27.5, 7630.0], [27.6, 7630.0], [27.7, 7630.0], [27.8, 7630.0], [27.9, 7630.0], [28.0, 7630.0], [28.1, 7673.0], [28.2, 7673.0], [28.3, 7673.0], [28.4, 7673.0], [28.5, 7673.0], [28.6, 7679.0], [28.7, 7679.0], [28.8, 7679.0], [28.9, 7679.0], [29.0, 7679.0], [29.1, 7679.0], [29.2, 7679.0], [29.3, 7679.0], [29.4, 7679.0], [29.5, 7679.0], [29.6, 7679.0], [29.7, 7679.0], [29.8, 7680.0], [29.9, 7680.0], [30.0, 7680.0], [30.1, 7680.0], [30.2, 7680.0], [30.3, 7767.0], [30.4, 7767.0], [30.5, 7767.0], [30.6, 7767.0], [30.7, 7767.0], [30.8, 7767.0], [30.9, 7773.0], [31.0, 7773.0], [31.1, 7773.0], [31.2, 7773.0], [31.3, 7773.0], [31.4, 7773.0], [31.5, 7782.0], [31.6, 7782.0], [31.7, 7782.0], [31.8, 7782.0], [31.9, 7782.0], [32.0, 7782.0], [32.1, 7786.0], [32.2, 7786.0], [32.3, 7786.0], [32.4, 7786.0], [32.5, 7786.0], [32.6, 7811.0], [32.7, 7811.0], [32.8, 7811.0], [32.9, 7811.0], [33.0, 7811.0], [33.1, 7811.0], [33.2, 7811.0], [33.3, 7811.0], [33.4, 7811.0], [33.5, 7811.0], [33.6, 7811.0], [33.7, 7811.0], [33.8, 7818.0], [33.9, 7818.0], [34.0, 7818.0], [34.1, 7818.0], [34.2, 7818.0], [34.3, 7830.0], [34.4, 7830.0], [34.5, 7830.0], [34.6, 7830.0], [34.7, 7830.0], [34.8, 7830.0], [34.9, 7875.0], [35.0, 7875.0], [35.1, 7875.0], [35.2, 7875.0], [35.3, 7875.0], [35.4, 7875.0], [35.5, 7927.0], [35.6, 7927.0], [35.7, 7927.0], [35.8, 7927.0], [35.9, 7927.0], [36.0, 7927.0], [36.1, 7943.0], [36.2, 7943.0], [36.3, 7943.0], [36.4, 7943.0], [36.5, 7943.0], [36.6, 8126.0], [36.7, 8126.0], [36.8, 8126.0], [36.9, 8126.0], [37.0, 8126.0], [37.1, 8126.0], [37.2, 9002.0], [37.3, 9002.0], [37.4, 9002.0], [37.5, 9002.0], [37.6, 9002.0], [37.7, 9002.0], [37.8, 10230.0], [37.9, 10230.0], [38.0, 10230.0], [38.1, 10230.0], [38.2, 10230.0], [38.3, 11099.0], [38.4, 11099.0], [38.5, 11099.0], [38.6, 11099.0], [38.7, 11099.0], [38.8, 11099.0], [38.9, 11966.0], [39.0, 11966.0], [39.1, 11966.0], [39.2, 11966.0], [39.3, 11966.0], [39.4, 11966.0], [39.5, 13238.0], [39.6, 13238.0], [39.7, 13238.0], [39.8, 13238.0], [39.9, 13238.0], [40.0, 14067.0], [40.1, 14067.0], [40.2, 14067.0], [40.3, 14067.0], [40.4, 14067.0], [40.5, 14067.0], [40.6, 14438.0], [40.7, 14438.0], [40.8, 14438.0], [40.9, 14438.0], [41.0, 14438.0], [41.1, 14438.0], [41.2, 14440.0], [41.3, 14440.0], [41.4, 14440.0], [41.5, 14440.0], [41.6, 14440.0], [41.7, 14440.0], [41.8, 14503.0], [41.9, 14503.0], [42.0, 14503.0], [42.1, 14503.0], [42.2, 14503.0], [42.3, 14514.0], [42.4, 14514.0], [42.5, 14514.0], [42.6, 14514.0], [42.7, 14514.0], [42.8, 14514.0], [42.9, 14549.0], [43.0, 14549.0], [43.1, 14549.0], [43.2, 14549.0], [43.3, 14549.0], [43.4, 14549.0], [43.5, 14574.0], [43.6, 14574.0], [43.7, 14574.0], [43.8, 14574.0], [43.9, 14574.0], [44.0, 14608.0], [44.1, 14608.0], [44.2, 14608.0], [44.3, 14608.0], [44.4, 14608.0], [44.5, 14608.0], [44.6, 14815.0], [44.7, 14815.0], [44.8, 14815.0], [44.9, 14815.0], [45.0, 14815.0], [45.1, 14815.0], [45.2, 14832.0], [45.3, 14832.0], [45.4, 14832.0], [45.5, 14832.0], [45.6, 14832.0], [45.7, 14832.0], [45.8, 14845.0], [45.9, 14845.0], [46.0, 14845.0], [46.1, 14845.0], [46.2, 14845.0], [46.3, 14852.0], [46.4, 14852.0], [46.5, 14852.0], [46.6, 14852.0], [46.7, 14852.0], [46.8, 14852.0], [46.9, 14856.0], [47.0, 14856.0], [47.1, 14856.0], [47.2, 14856.0], [47.3, 14856.0], [47.4, 14856.0], [47.5, 14880.0], [47.6, 14880.0], [47.7, 14880.0], [47.8, 14880.0], [47.9, 14880.0], [48.0, 14893.0], [48.1, 14893.0], [48.2, 14893.0], [48.3, 14893.0], [48.4, 14893.0], [48.5, 14893.0], [48.6, 14947.0], [48.7, 14947.0], [48.8, 14947.0], [48.9, 14947.0], [49.0, 14947.0], [49.1, 14947.0], [49.2, 14947.0], [49.3, 14947.0], [49.4, 14947.0], [49.5, 14947.0], [49.6, 14947.0], [49.7, 14947.0], [49.8, 14948.0], [49.9, 14948.0], [50.0, 14948.0], [50.1, 14948.0], [50.2, 14948.0], [50.3, 14955.0], [50.4, 14955.0], [50.5, 14955.0], [50.6, 14955.0], [50.7, 14955.0], [50.8, 14955.0], [50.9, 14964.0], [51.0, 14964.0], [51.1, 14964.0], [51.2, 14964.0], [51.3, 14964.0], [51.4, 14964.0], [51.5, 14965.0], [51.6, 14965.0], [51.7, 14965.0], [51.8, 14965.0], [51.9, 14965.0], [52.0, 14984.0], [52.1, 14984.0], [52.2, 14984.0], [52.3, 14984.0], [52.4, 14984.0], [52.5, 14984.0], [52.6, 14985.0], [52.7, 14985.0], [52.8, 14985.0], [52.9, 14985.0], [53.0, 14985.0], [53.1, 14985.0], [53.2, 15001.0], [53.3, 15001.0], [53.4, 15001.0], [53.5, 15001.0], [53.6, 15001.0], [53.7, 15001.0], [53.8, 15025.0], [53.9, 15025.0], [54.0, 15025.0], [54.1, 15025.0], [54.2, 15025.0], [54.3, 15053.0], [54.4, 15053.0], [54.5, 15053.0], [54.6, 15053.0], [54.7, 15053.0], [54.8, 15053.0], [54.9, 15053.0], [55.0, 15053.0], [55.1, 15053.0], [55.2, 15053.0], [55.3, 15053.0], [55.4, 15053.0], [55.5, 15100.0], [55.6, 15100.0], [55.7, 15100.0], [55.8, 15100.0], [55.9, 15100.0], [56.0, 15157.0], [56.1, 15157.0], [56.2, 15157.0], [56.3, 15157.0], [56.4, 15157.0], [56.5, 15157.0], [56.6, 15265.0], [56.7, 15265.0], [56.8, 15265.0], [56.9, 15265.0], [57.0, 15265.0], [57.1, 15265.0], [57.2, 15310.0], [57.3, 15310.0], [57.4, 15310.0], [57.5, 15310.0], [57.6, 15310.0], [57.7, 15310.0], [57.8, 15322.0], [57.9, 15322.0], [58.0, 15322.0], [58.1, 15322.0], [58.2, 15322.0], [58.3, 15355.0], [58.4, 15355.0], [58.5, 15355.0], [58.6, 15355.0], [58.7, 15355.0], [58.8, 15355.0], [58.9, 15357.0], [59.0, 15357.0], [59.1, 15357.0], [59.2, 15357.0], [59.3, 15357.0], [59.4, 15357.0], [59.5, 15358.0], [59.6, 15358.0], [59.7, 15358.0], [59.8, 15358.0], [59.9, 15358.0], [60.0, 15439.0], [60.1, 15439.0], [60.2, 15439.0], [60.3, 15439.0], [60.4, 15439.0], [60.5, 15439.0], [60.6, 15465.0], [60.7, 15465.0], [60.8, 15465.0], [60.9, 15465.0], [61.0, 15465.0], [61.1, 15465.0], [61.2, 15515.0], [61.3, 15515.0], [61.4, 15515.0], [61.5, 15515.0], [61.6, 15515.0], [61.7, 15515.0], [61.8, 15517.0], [61.9, 15517.0], [62.0, 15517.0], [62.1, 15517.0], [62.2, 15517.0], [62.3, 15535.0], [62.4, 15535.0], [62.5, 15535.0], [62.6, 15535.0], [62.7, 15535.0], [62.8, 15535.0], [62.9, 15540.0], [63.0, 15540.0], [63.1, 15540.0], [63.2, 15540.0], [63.3, 15540.0], [63.4, 15540.0], [63.5, 15558.0], [63.6, 15558.0], [63.7, 15558.0], [63.8, 15558.0], [63.9, 15558.0], [64.0, 15559.0], [64.1, 15559.0], [64.2, 15559.0], [64.3, 15559.0], [64.4, 15559.0], [64.5, 15559.0], [64.6, 15641.0], [64.7, 15641.0], [64.8, 15641.0], [64.9, 15641.0], [65.0, 15641.0], [65.1, 15641.0], [65.2, 15662.0], [65.3, 15662.0], [65.4, 15662.0], [65.5, 15662.0], [65.6, 15662.0], [65.7, 15662.0], [65.8, 15664.0], [65.9, 15664.0], [66.0, 15664.0], [66.1, 15664.0], [66.2, 15664.0], [66.3, 15665.0], [66.4, 15665.0], [66.5, 15665.0], [66.6, 15665.0], [66.7, 15665.0], [66.8, 15665.0], [66.9, 15697.0], [67.0, 15697.0], [67.1, 15697.0], [67.2, 15697.0], [67.3, 15697.0], [67.4, 15697.0], [67.5, 15698.0], [67.6, 15698.0], [67.7, 15698.0], [67.8, 15698.0], [67.9, 15698.0], [68.0, 15740.0], [68.1, 15740.0], [68.2, 15740.0], [68.3, 15740.0], [68.4, 15740.0], [68.5, 15740.0], [68.6, 15757.0], [68.7, 15757.0], [68.8, 15757.0], [68.9, 15757.0], [69.0, 15757.0], [69.1, 15757.0], [69.2, 15764.0], [69.3, 15764.0], [69.4, 15764.0], [69.5, 15764.0], [69.6, 15764.0], [69.7, 15764.0], [69.8, 15766.0], [69.9, 15766.0], [70.0, 15766.0], [70.1, 15766.0], [70.2, 15766.0], [70.3, 15768.0], [70.4, 15768.0], [70.5, 15768.0], [70.6, 15768.0], [70.7, 15768.0], [70.8, 15768.0], [70.9, 15769.0], [71.0, 15769.0], [71.1, 15769.0], [71.2, 15769.0], [71.3, 15769.0], [71.4, 15769.0], [71.5, 15770.0], [71.6, 15770.0], [71.7, 15770.0], [71.8, 15770.0], [71.9, 15770.0], [72.0, 15770.0], [72.1, 15770.0], [72.2, 15770.0], [72.3, 15770.0], [72.4, 15770.0], [72.5, 15770.0], [72.6, 15770.0], [72.7, 15770.0], [72.8, 15770.0], [72.9, 15770.0], [73.0, 15770.0], [73.1, 15770.0], [73.2, 15771.0], [73.3, 15771.0], [73.4, 15771.0], [73.5, 15771.0], [73.6, 15771.0], [73.7, 15771.0], [73.8, 15775.0], [73.9, 15775.0], [74.0, 15775.0], [74.1, 15775.0], [74.2, 15775.0], [74.3, 15775.0], [74.4, 15775.0], [74.5, 15775.0], [74.6, 15775.0], [74.7, 15775.0], [74.8, 15775.0], [74.9, 15776.0], [75.0, 15776.0], [75.1, 15776.0], [75.2, 15776.0], [75.3, 15776.0], [75.4, 15776.0], [75.5, 15779.0], [75.6, 15779.0], [75.7, 15779.0], [75.8, 15779.0], [75.9, 15779.0], [76.0, 15812.0], [76.1, 15812.0], [76.2, 15812.0], [76.3, 15812.0], [76.4, 15812.0], [76.5, 15812.0], [76.6, 15832.0], [76.7, 15832.0], [76.8, 15832.0], [76.9, 15832.0], [77.0, 15832.0], [77.1, 15832.0], [77.2, 15870.0], [77.3, 15870.0], [77.4, 15870.0], [77.5, 15870.0], [77.6, 15870.0], [77.7, 15870.0], [77.8, 15871.0], [77.9, 15871.0], [78.0, 15871.0], [78.1, 15871.0], [78.2, 15871.0], [78.3, 15875.0], [78.4, 15875.0], [78.5, 15875.0], [78.6, 15875.0], [78.7, 15875.0], [78.8, 15875.0], [78.9, 15964.0], [79.0, 15964.0], [79.1, 15964.0], [79.2, 15964.0], [79.3, 15964.0], [79.4, 15964.0], [79.5, 15986.0], [79.6, 15986.0], [79.7, 15986.0], [79.8, 15986.0], [79.9, 15986.0], [80.0, 15989.0], [80.1, 15989.0], [80.2, 15989.0], [80.3, 15989.0], [80.4, 15989.0], [80.5, 15989.0], [80.6, 16076.0], [80.7, 16076.0], [80.8, 16076.0], [80.9, 16076.0], [81.0, 16076.0], [81.1, 16076.0], [81.2, 16079.0], [81.3, 16079.0], [81.4, 16079.0], [81.5, 16079.0], [81.6, 16079.0], [81.7, 16079.0], [81.8, 16176.0], [81.9, 16176.0], [82.0, 16176.0], [82.1, 16176.0], [82.2, 16176.0], [82.3, 16177.0], [82.4, 16177.0], [82.5, 16177.0], [82.6, 16177.0], [82.7, 16177.0], [82.8, 16177.0], [82.9, 16235.0], [83.0, 16235.0], [83.1, 16235.0], [83.2, 16235.0], [83.3, 16235.0], [83.4, 16235.0], [83.5, 16284.0], [83.6, 16284.0], [83.7, 16284.0], [83.8, 16284.0], [83.9, 16284.0], [84.0, 16285.0], [84.1, 16285.0], [84.2, 16285.0], [84.3, 16285.0], [84.4, 16285.0], [84.5, 16285.0], [84.6, 16349.0], [84.7, 16349.0], [84.8, 16349.0], [84.9, 16349.0], [85.0, 16349.0], [85.1, 16349.0], [85.2, 16351.0], [85.3, 16351.0], [85.4, 16351.0], [85.5, 16351.0], [85.6, 16351.0], [85.7, 16351.0], [85.8, 16385.0], [85.9, 16385.0], [86.0, 16385.0], [86.1, 16385.0], [86.2, 16385.0], [86.3, 16387.0], [86.4, 16387.0], [86.5, 16387.0], [86.6, 16387.0], [86.7, 16387.0], [86.8, 16387.0], [86.9, 16396.0], [87.0, 16396.0], [87.1, 16396.0], [87.2, 16396.0], [87.3, 16396.0], [87.4, 16396.0], [87.5, 16488.0], [87.6, 16488.0], [87.7, 16488.0], [87.8, 16488.0], [87.9, 16488.0], [88.0, 16588.0], [88.1, 16588.0], [88.2, 16588.0], [88.3, 16588.0], [88.4, 16588.0], [88.5, 16588.0], [88.6, 16646.0], [88.7, 16646.0], [88.8, 16646.0], [88.9, 16646.0], [89.0, 16646.0], [89.1, 16646.0], [89.2, 16690.0], [89.3, 16690.0], [89.4, 16690.0], [89.5, 16690.0], [89.6, 16690.0], [89.7, 16690.0], [89.8, 16714.0], [89.9, 16714.0], [90.0, 16714.0], [90.1, 16714.0], [90.2, 16714.0], [90.3, 16747.0], [90.4, 16747.0], [90.5, 16747.0], [90.6, 16747.0], [90.7, 16747.0], [90.8, 16747.0], [90.9, 16773.0], [91.0, 16773.0], [91.1, 16773.0], [91.2, 16773.0], [91.3, 16773.0], [91.4, 16773.0], [91.5, 16779.0], [91.6, 16779.0], [91.7, 16779.0], [91.8, 16779.0], [91.9, 16779.0], [92.0, 16797.0], [92.1, 16797.0], [92.2, 16797.0], [92.3, 16797.0], [92.4, 16797.0], [92.5, 16797.0], [92.6, 16818.0], [92.7, 16818.0], [92.8, 16818.0], [92.9, 16818.0], [93.0, 16818.0], [93.1, 16818.0], [93.2, 16870.0], [93.3, 16870.0], [93.4, 16870.0], [93.5, 16870.0], [93.6, 16870.0], [93.7, 16870.0], [93.8, 16874.0], [93.9, 16874.0], [94.0, 16874.0], [94.1, 16874.0], [94.2, 16874.0], [94.3, 16881.0], [94.4, 16881.0], [94.5, 16881.0], [94.6, 16881.0], [94.7, 16881.0], [94.8, 16881.0], [94.9, 16887.0], [95.0, 16887.0], [95.1, 16887.0], [95.2, 16887.0], [95.3, 16887.0], [95.4, 16887.0], [95.5, 16891.0], [95.6, 16891.0], [95.7, 16891.0], [95.8, 16891.0], [95.9, 16891.0], [96.0, 16891.0], [96.1, 16891.0], [96.2, 16891.0], [96.3, 16891.0], [96.4, 16891.0], [96.5, 16891.0], [96.6, 16892.0], [96.7, 16892.0], [96.8, 16892.0], [96.9, 16892.0], [97.0, 16892.0], [97.1, 16892.0], [97.2, 16892.0], [97.3, 16892.0], [97.4, 16892.0], [97.5, 16892.0], [97.6, 16892.0], [97.7, 16892.0], [97.8, 16893.0], [97.9, 16893.0], [98.0, 16893.0], [98.1, 16893.0], [98.2, 16893.0], [98.3, 16893.0], [98.4, 16893.0], [98.5, 16893.0], [98.6, 16893.0], [98.7, 16893.0], [98.8, 16893.0], [98.9, 16895.0], [99.0, 16895.0], [99.1, 16895.0], [99.2, 16895.0], [99.3, 16895.0], [99.4, 16895.0], [99.5, 16994.0], [99.6, 16994.0], [99.7, 16994.0], [99.8, 16994.0], [99.9, 16994.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 3300.0, "maxY": 14.0, "series": [{"data": [[3300.0, 2.0], [3400.0, 5.0], [3500.0, 2.0], [3600.0, 8.0], [3700.0, 12.0], [3800.0, 4.0], [3900.0, 2.0], [4100.0, 3.0], [4200.0, 1.0], [4600.0, 1.0], [4900.0, 1.0], [5900.0, 1.0], [6900.0, 1.0], [7400.0, 2.0], [7600.0, 5.0], [7500.0, 3.0], [7700.0, 4.0], [7800.0, 5.0], [7900.0, 2.0], [8100.0, 1.0], [9000.0, 1.0], [10200.0, 1.0], [11000.0, 1.0], [11900.0, 1.0], [13200.0, 1.0], [14000.0, 1.0], [14800.0, 7.0], [14500.0, 4.0], [14600.0, 1.0], [14400.0, 2.0], [15300.0, 5.0], [15200.0, 1.0], [15100.0, 2.0], [15000.0, 4.0], [14900.0, 8.0], [15700.0, 14.0], [15500.0, 6.0], [15800.0, 5.0], [15600.0, 6.0], [15400.0, 2.0], [15900.0, 3.0], [16100.0, 2.0], [16200.0, 3.0], [16300.0, 5.0], [16000.0, 2.0], [16400.0, 1.0], [16700.0, 5.0], [16800.0, 12.0], [16600.0, 2.0], [16500.0, 1.0], [16900.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 16900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 175.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 175.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 175.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.4615384615384617, "minX": 1.58912544E12, "maxY": 15.951612903225806, "series": [{"data": [[1.58912562E12, 7.0], [1.58912544E12, 3.4615384615384617], [1.5891255E12, 13.770491803278686], [1.58912556E12, 15.951612903225806]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58912562E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4501.150000000001, "minX": 1.0, "maxY": 16881.0, "series": [{"data": [[2.0, 4674.833333333333], [8.0, 7014.90909090909], [9.0, 15770.0], [10.0, 16588.0], [11.0, 15740.0], [12.0, 15515.0], [3.0, 16076.0], [13.0, 16881.0], [14.0, 14856.0], [15.0, 15769.0], [1.0, 5696.666666666666], [4.0, 4501.150000000001], [16.0, 14779.721153846158], [5.0, 15771.0], [6.0, 15662.0], [7.0, 16690.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.742857142857147, 11697.36]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 16.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 67.6, "minX": 1.58912544E12, "maxY": 65267.76666666667, "series": [{"data": [[1.58912562E12, 67.6], [1.58912544E12, 202.8], [1.5891255E12, 317.2], [1.58912556E12, 322.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58912562E12, 13685.583333333334], [1.58912544E12, 41054.95], [1.5891255E12, 64213.23333333333], [1.58912556E12, 65267.76666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58912562E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3756.1025641025635, "minX": 1.58912544E12, "maxY": 16185.384615384615, "series": [{"data": [[1.58912562E12, 16185.384615384615], [1.58912544E12, 3756.1025641025635], [1.5891255E12, 11741.016393442622], [1.58912556E12, 15708.677419354839]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58912562E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3755.948717948719, "minX": 1.58912544E12, "maxY": 16185.307692307693, "series": [{"data": [[1.58912562E12, 16185.307692307693], [1.58912544E12, 3755.948717948719], [1.5891255E12, 11740.983606557378], [1.58912556E12, 15708.596774193551]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58912562E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.076923076923077, "minX": 1.58912544E12, "maxY": 2.282051282051283, "series": [{"data": [[1.58912562E12, 1.076923076923077], [1.58912544E12, 2.282051282051283], [1.5891255E12, 1.6229508196721314], [1.58912556E12, 1.0967741935483872]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58912562E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3350.0, "minX": 1.58912544E12, "maxY": 16994.0, "series": [{"data": [[1.58912562E12, 16994.0], [1.58912544E12, 4664.0], [1.5891255E12, 16797.0], [1.58912556E12, 16895.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58912562E12, 15515.0], [1.58912544E12, 3350.0], [1.5891255E12, 4120.0], [1.58912556E12, 14438.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58912562E12, 16948.8], [1.58912544E12, 4150.0], [1.5891255E12, 16176.8], [1.58912556E12, 16891.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58912562E12, 16994.0], [1.58912544E12, 4664.0], [1.5891255E12, 16797.0], [1.58912556E12, 16895.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58912562E12, 16994.0], [1.58912544E12, 4200.0], [1.5891255E12, 16376.8], [1.58912556E12, 16892.85]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58912562E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 8472.5, "minX": 1.0, "maxY": 15355.0, "series": [{"data": [[1.0, 8472.5], [2.0, 14974.5], [3.0, 15355.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 8472.5, "minX": 1.0, "maxY": 15355.0, "series": [{"data": [[1.0, 8472.5], [2.0, 14974.5], [3.0, 15355.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.58912538E12, "maxY": 1.15, "series": [{"data": [[1.58912544E12, 0.7666666666666667], [1.5891255E12, 1.15], [1.58912538E12, 0.016666666666666666], [1.58912556E12, 0.9833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58912556E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.58912544E12, "maxY": 1.0333333333333334, "series": [{"data": [[1.58912562E12, 0.21666666666666667], [1.58912544E12, 0.65], [1.5891255E12, 1.0166666666666666], [1.58912556E12, 1.0333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58912562E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.58912544E12, "maxY": 1.0333333333333334, "series": [{"data": [[1.58912562E12, 0.21666666666666667], [1.58912544E12, 0.65], [1.5891255E12, 1.0166666666666666], [1.58912556E12, 1.0333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58912562E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.58912544E12, "maxY": 1.0333333333333334, "series": [{"data": [[1.58912562E12, 0.21666666666666667], [1.58912544E12, 0.65], [1.5891255E12, 1.0166666666666666], [1.58912556E12, 1.0333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58912562E12, "title": "Total Transactions Per Second"}},
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

