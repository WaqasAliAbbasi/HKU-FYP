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
        data: {"result": {"minY": 3479.0, "minX": 0.0, "maxY": 63399.0, "series": [{"data": [[0.0, 3479.0], [0.1, 3479.0], [0.2, 3479.0], [0.3, 3479.0], [0.4, 3479.0], [0.5, 3479.0], [0.6, 3505.0], [0.7, 3505.0], [0.8, 3505.0], [0.9, 3505.0], [1.0, 3505.0], [1.1, 3550.0], [1.2, 3550.0], [1.3, 3550.0], [1.4, 3550.0], [1.5, 3550.0], [1.6, 3550.0], [1.7, 3573.0], [1.8, 3573.0], [1.9, 3573.0], [2.0, 3573.0], [2.1, 3573.0], [2.2, 3580.0], [2.3, 3580.0], [2.4, 3580.0], [2.5, 3580.0], [2.6, 3580.0], [2.7, 3580.0], [2.8, 3582.0], [2.9, 3582.0], [3.0, 3582.0], [3.1, 3582.0], [3.2, 3582.0], [3.3, 3582.0], [3.4, 3582.0], [3.5, 3582.0], [3.6, 3582.0], [3.7, 3582.0], [3.8, 3583.0], [3.9, 3583.0], [4.0, 3583.0], [4.1, 3583.0], [4.2, 3583.0], [4.3, 3583.0], [4.4, 3584.0], [4.5, 3584.0], [4.6, 3584.0], [4.7, 3584.0], [4.8, 3584.0], [4.9, 3584.0], [5.0, 3584.0], [5.1, 3584.0], [5.2, 3584.0], [5.3, 3584.0], [5.4, 3584.0], [5.5, 3584.0], [5.6, 3584.0], [5.7, 3584.0], [5.8, 3584.0], [5.9, 3584.0], [6.0, 3584.0], [6.1, 3584.0], [6.2, 3584.0], [6.3, 3584.0], [6.4, 3584.0], [6.5, 3609.0], [6.6, 3609.0], [6.7, 3609.0], [6.8, 3609.0], [6.9, 3609.0], [7.0, 3609.0], [7.1, 3612.0], [7.2, 3612.0], [7.3, 3612.0], [7.4, 3612.0], [7.5, 3612.0], [7.6, 3618.0], [7.7, 3618.0], [7.8, 3618.0], [7.9, 3618.0], [8.0, 3618.0], [8.1, 3618.0], [8.2, 3625.0], [8.3, 3625.0], [8.4, 3625.0], [8.5, 3625.0], [8.6, 3625.0], [8.7, 3646.0], [8.8, 3646.0], [8.9, 3646.0], [9.0, 3646.0], [9.1, 3646.0], [9.2, 3670.0], [9.3, 3670.0], [9.4, 3670.0], [9.5, 3670.0], [9.6, 3670.0], [9.7, 3670.0], [9.8, 3683.0], [9.9, 3683.0], [10.0, 3683.0], [10.1, 3683.0], [10.2, 3683.0], [10.3, 3686.0], [10.4, 3686.0], [10.5, 3686.0], [10.6, 3686.0], [10.7, 3686.0], [10.8, 3686.0], [10.9, 3686.0], [11.0, 3686.0], [11.1, 3686.0], [11.2, 3686.0], [11.3, 3686.0], [11.4, 3687.0], [11.5, 3687.0], [11.6, 3687.0], [11.7, 3687.0], [11.8, 3687.0], [11.9, 3689.0], [12.0, 3689.0], [12.1, 3689.0], [12.2, 3689.0], [12.3, 3689.0], [12.4, 3689.0], [12.5, 3757.0], [12.6, 3757.0], [12.7, 3757.0], [12.8, 3757.0], [12.9, 3757.0], [13.0, 3758.0], [13.1, 3758.0], [13.2, 3758.0], [13.3, 3758.0], [13.4, 3758.0], [13.5, 3758.0], [13.6, 3763.0], [13.7, 3763.0], [13.8, 3763.0], [13.9, 3763.0], [14.0, 3763.0], [14.1, 3777.0], [14.2, 3777.0], [14.3, 3777.0], [14.4, 3777.0], [14.5, 3777.0], [14.6, 3785.0], [14.7, 3785.0], [14.8, 3785.0], [14.9, 3785.0], [15.0, 3785.0], [15.1, 3785.0], [15.2, 3790.0], [15.3, 3790.0], [15.4, 3790.0], [15.5, 3790.0], [15.6, 3790.0], [15.7, 3797.0], [15.8, 3797.0], [15.9, 3797.0], [16.0, 3797.0], [16.1, 3797.0], [16.2, 3797.0], [16.3, 3878.0], [16.4, 3878.0], [16.5, 3878.0], [16.6, 3878.0], [16.7, 3878.0], [16.8, 3893.0], [16.9, 3893.0], [17.0, 3893.0], [17.1, 3893.0], [17.2, 3893.0], [17.3, 3894.0], [17.4, 3894.0], [17.5, 3894.0], [17.6, 3894.0], [17.7, 3894.0], [17.8, 3894.0], [17.9, 3953.0], [18.0, 3953.0], [18.1, 3953.0], [18.2, 3953.0], [18.3, 3953.0], [18.4, 3992.0], [18.5, 3992.0], [18.6, 3992.0], [18.7, 3992.0], [18.8, 3992.0], [18.9, 3992.0], [19.0, 3997.0], [19.1, 3997.0], [19.2, 3997.0], [19.3, 3997.0], [19.4, 3997.0], [19.5, 4194.0], [19.6, 4194.0], [19.7, 4194.0], [19.8, 4194.0], [19.9, 4194.0], [20.0, 4305.0], [20.1, 4305.0], [20.2, 4305.0], [20.3, 4305.0], [20.4, 4305.0], [20.5, 4305.0], [20.6, 4440.0], [20.7, 4440.0], [20.8, 4440.0], [20.9, 4440.0], [21.0, 4440.0], [21.1, 5118.0], [21.2, 5118.0], [21.3, 5118.0], [21.4, 5118.0], [21.5, 5118.0], [21.6, 5118.0], [21.7, 5223.0], [21.8, 5223.0], [21.9, 5223.0], [22.0, 5223.0], [22.1, 5223.0], [22.2, 6043.0], [22.3, 6043.0], [22.4, 6043.0], [22.5, 6043.0], [22.6, 6043.0], [22.7, 6043.0], [22.8, 6958.0], [22.9, 6958.0], [23.0, 6958.0], [23.1, 6958.0], [23.2, 6958.0], [23.3, 7269.0], [23.4, 7269.0], [23.5, 7269.0], [23.6, 7269.0], [23.7, 7269.0], [23.8, 7271.0], [23.9, 7271.0], [24.0, 7271.0], [24.1, 7271.0], [24.2, 7271.0], [24.3, 7271.0], [24.4, 7368.0], [24.5, 7368.0], [24.6, 7368.0], [24.7, 7368.0], [24.8, 7368.0], [24.9, 7370.0], [25.0, 7370.0], [25.1, 7370.0], [25.2, 7370.0], [25.3, 7370.0], [25.4, 7370.0], [25.5, 7405.0], [25.6, 7405.0], [25.7, 7405.0], [25.8, 7405.0], [25.9, 7405.0], [26.0, 7437.0], [26.1, 7437.0], [26.2, 7437.0], [26.3, 7437.0], [26.4, 7437.0], [26.5, 7442.0], [26.6, 7442.0], [26.7, 7442.0], [26.8, 7442.0], [26.9, 7442.0], [27.0, 7442.0], [27.1, 7470.0], [27.2, 7470.0], [27.3, 7470.0], [27.4, 7470.0], [27.5, 7470.0], [27.6, 7471.0], [27.7, 7471.0], [27.8, 7471.0], [27.9, 7471.0], [28.0, 7471.0], [28.1, 7471.0], [28.2, 7473.0], [28.3, 7473.0], [28.4, 7473.0], [28.5, 7473.0], [28.6, 7473.0], [28.7, 7476.0], [28.8, 7476.0], [28.9, 7476.0], [29.0, 7476.0], [29.1, 7476.0], [29.2, 7476.0], [29.3, 7476.0], [29.4, 7476.0], [29.5, 7476.0], [29.6, 7476.0], [29.7, 7476.0], [29.8, 7479.0], [29.9, 7479.0], [30.0, 7479.0], [30.1, 7479.0], [30.2, 7479.0], [30.3, 7574.0], [30.4, 7574.0], [30.5, 7574.0], [30.6, 7574.0], [30.7, 7574.0], [30.8, 7574.0], [30.9, 7574.0], [31.0, 7574.0], [31.1, 7574.0], [31.2, 7574.0], [31.3, 7574.0], [31.4, 7575.0], [31.5, 7575.0], [31.6, 7575.0], [31.7, 7575.0], [31.8, 7575.0], [31.9, 7577.0], [32.0, 7577.0], [32.1, 7577.0], [32.2, 7577.0], [32.3, 7577.0], [32.4, 7577.0], [32.5, 7577.0], [32.6, 7577.0], [32.7, 7577.0], [32.8, 7577.0], [32.9, 7577.0], [33.0, 7580.0], [33.1, 7580.0], [33.2, 7580.0], [33.3, 7580.0], [33.4, 7580.0], [33.5, 7580.0], [33.6, 7580.0], [33.7, 7580.0], [33.8, 7580.0], [33.9, 7580.0], [34.0, 7580.0], [34.1, 7584.0], [34.2, 7584.0], [34.3, 7584.0], [34.4, 7584.0], [34.5, 7584.0], [34.6, 7603.0], [34.7, 7603.0], [34.8, 7603.0], [34.9, 7603.0], [35.0, 7603.0], [35.1, 7603.0], [35.2, 8389.0], [35.3, 8389.0], [35.4, 8389.0], [35.5, 8389.0], [35.6, 8389.0], [35.7, 9279.0], [35.8, 9279.0], [35.9, 9279.0], [36.0, 9279.0], [36.1, 9279.0], [36.2, 9279.0], [36.3, 10197.0], [36.4, 10197.0], [36.5, 10197.0], [36.6, 10197.0], [36.7, 10197.0], [36.8, 11215.0], [36.9, 11215.0], [37.0, 11215.0], [37.1, 11215.0], [37.2, 11215.0], [37.3, 12132.0], [37.4, 12132.0], [37.5, 12132.0], [37.6, 12132.0], [37.7, 12132.0], [37.8, 12132.0], [37.9, 13061.0], [38.0, 13061.0], [38.1, 13061.0], [38.2, 13061.0], [38.3, 13061.0], [38.4, 13975.0], [38.5, 13975.0], [38.6, 13975.0], [38.7, 13975.0], [38.8, 13975.0], [38.9, 13975.0], [39.0, 14740.0], [39.1, 14740.0], [39.2, 14740.0], [39.3, 14740.0], [39.4, 14740.0], [39.5, 14743.0], [39.6, 14743.0], [39.7, 14743.0], [39.8, 14743.0], [39.9, 14743.0], [40.0, 14744.0], [40.1, 14744.0], [40.2, 14744.0], [40.3, 14744.0], [40.4, 14744.0], [40.5, 14744.0], [40.6, 14746.0], [40.7, 14746.0], [40.8, 14746.0], [40.9, 14746.0], [41.0, 14746.0], [41.1, 14753.0], [41.2, 14753.0], [41.3, 14753.0], [41.4, 14753.0], [41.5, 14753.0], [41.6, 14753.0], [41.7, 14757.0], [41.8, 14757.0], [41.9, 14757.0], [42.0, 14757.0], [42.1, 14757.0], [42.2, 14820.0], [42.3, 14820.0], [42.4, 14820.0], [42.5, 14820.0], [42.6, 14820.0], [42.7, 14820.0], [42.8, 14846.0], [42.9, 14846.0], [43.0, 14846.0], [43.1, 14846.0], [43.2, 14846.0], [43.3, 14847.0], [43.4, 14847.0], [43.5, 14847.0], [43.6, 14847.0], [43.7, 14847.0], [43.8, 14849.0], [43.9, 14849.0], [44.0, 14849.0], [44.1, 14849.0], [44.2, 14849.0], [44.3, 14849.0], [44.4, 14850.0], [44.5, 14850.0], [44.6, 14850.0], [44.7, 14850.0], [44.8, 14850.0], [44.9, 14850.0], [45.0, 14850.0], [45.1, 14850.0], [45.2, 14850.0], [45.3, 14850.0], [45.4, 14850.0], [45.5, 14855.0], [45.6, 14855.0], [45.7, 14855.0], [45.8, 14855.0], [45.9, 14855.0], [46.0, 14919.0], [46.1, 14919.0], [46.2, 14919.0], [46.3, 14919.0], [46.4, 14919.0], [46.5, 14947.0], [46.6, 14947.0], [46.7, 14947.0], [46.8, 14947.0], [46.9, 14947.0], [47.0, 14947.0], [47.1, 14961.0], [47.2, 14961.0], [47.3, 14961.0], [47.4, 14961.0], [47.5, 14961.0], [47.6, 14968.0], [47.7, 14968.0], [47.8, 14968.0], [47.9, 14968.0], [48.0, 14968.0], [48.1, 14968.0], [48.2, 15041.0], [48.3, 15041.0], [48.4, 15041.0], [48.5, 15041.0], [48.6, 15041.0], [48.7, 15047.0], [48.8, 15047.0], [48.9, 15047.0], [49.0, 15047.0], [49.1, 15047.0], [49.2, 15054.0], [49.3, 15054.0], [49.4, 15054.0], [49.5, 15054.0], [49.6, 15054.0], [49.7, 15054.0], [49.8, 15054.0], [49.9, 15054.0], [50.0, 15054.0], [50.1, 15054.0], [50.2, 15054.0], [50.3, 15056.0], [50.4, 15056.0], [50.5, 15056.0], [50.6, 15056.0], [50.7, 15056.0], [50.8, 15056.0], [50.9, 15293.0], [51.0, 15293.0], [51.1, 15293.0], [51.2, 15293.0], [51.3, 15293.0], [51.4, 16423.0], [51.5, 16423.0], [51.6, 16423.0], [51.7, 16423.0], [51.8, 16423.0], [51.9, 17269.0], [52.0, 17269.0], [52.1, 17269.0], [52.2, 17269.0], [52.3, 17269.0], [52.4, 17269.0], [52.5, 18263.0], [52.6, 18263.0], [52.7, 18263.0], [52.8, 18263.0], [52.9, 18263.0], [53.0, 19187.0], [53.1, 19187.0], [53.2, 19187.0], [53.3, 19187.0], [53.4, 19187.0], [53.5, 19187.0], [53.6, 20094.0], [53.7, 20094.0], [53.8, 20094.0], [53.9, 20094.0], [54.0, 20094.0], [54.1, 21024.0], [54.2, 21024.0], [54.3, 21024.0], [54.4, 21024.0], [54.5, 21024.0], [54.6, 21947.0], [54.7, 21947.0], [54.8, 21947.0], [54.9, 21947.0], [55.0, 21947.0], [55.1, 21947.0], [55.2, 22875.0], [55.3, 22875.0], [55.4, 22875.0], [55.5, 22875.0], [55.6, 22875.0], [55.7, 23787.0], [55.8, 23787.0], [55.9, 23787.0], [56.0, 23787.0], [56.1, 23787.0], [56.2, 23787.0], [56.3, 24707.0], [56.4, 24707.0], [56.5, 24707.0], [56.6, 24707.0], [56.7, 24707.0], [56.8, 25635.0], [56.9, 25635.0], [57.0, 25635.0], [57.1, 25635.0], [57.2, 25635.0], [57.3, 26549.0], [57.4, 26549.0], [57.5, 26549.0], [57.6, 26549.0], [57.7, 26549.0], [57.8, 26549.0], [57.9, 27464.0], [58.0, 27464.0], [58.1, 27464.0], [58.2, 27464.0], [58.3, 27464.0], [58.4, 28409.0], [58.5, 28409.0], [58.6, 28409.0], [58.7, 28409.0], [58.8, 28409.0], [58.9, 28409.0], [59.0, 29302.0], [59.1, 29302.0], [59.2, 29302.0], [59.3, 29302.0], [59.4, 29302.0], [59.5, 29571.0], [59.6, 29571.0], [59.7, 29571.0], [59.8, 29571.0], [59.9, 29571.0], [60.0, 29594.0], [60.1, 29594.0], [60.2, 29594.0], [60.3, 29594.0], [60.4, 29594.0], [60.5, 29594.0], [60.6, 29680.0], [60.7, 29680.0], [60.8, 29680.0], [60.9, 29680.0], [61.0, 29680.0], [61.1, 29689.0], [61.2, 29689.0], [61.3, 29689.0], [61.4, 29689.0], [61.5, 29689.0], [61.6, 29689.0], [61.7, 29693.0], [61.8, 29693.0], [61.9, 29693.0], [62.0, 29693.0], [62.1, 29693.0], [62.2, 29694.0], [62.3, 29694.0], [62.4, 29694.0], [62.5, 29694.0], [62.6, 29694.0], [62.7, 29694.0], [62.8, 29694.0], [62.9, 29694.0], [63.0, 29694.0], [63.1, 29694.0], [63.2, 29694.0], [63.3, 29708.0], [63.4, 29708.0], [63.5, 29708.0], [63.6, 29708.0], [63.7, 29708.0], [63.8, 29708.0], [63.9, 29708.0], [64.0, 29708.0], [64.1, 29708.0], [64.2, 29708.0], [64.3, 29708.0], [64.4, 29735.0], [64.5, 29735.0], [64.6, 29735.0], [64.7, 29735.0], [64.8, 29735.0], [64.9, 29794.0], [65.0, 29794.0], [65.1, 29794.0], [65.2, 29794.0], [65.3, 29794.0], [65.4, 29794.0], [65.5, 29801.0], [65.6, 29801.0], [65.7, 29801.0], [65.8, 29801.0], [65.9, 29801.0], [66.0, 29820.0], [66.1, 29820.0], [66.2, 29820.0], [66.3, 29820.0], [66.4, 29820.0], [66.5, 29869.0], [66.6, 29869.0], [66.7, 29869.0], [66.8, 29869.0], [66.9, 29869.0], [67.0, 29869.0], [67.1, 29900.0], [67.2, 29900.0], [67.3, 29900.0], [67.4, 29900.0], [67.5, 29900.0], [67.6, 29906.0], [67.7, 29906.0], [67.8, 29906.0], [67.9, 29906.0], [68.0, 29906.0], [68.1, 29906.0], [68.2, 29906.0], [68.3, 29906.0], [68.4, 29906.0], [68.5, 29906.0], [68.6, 29906.0], [68.7, 29915.0], [68.8, 29915.0], [68.9, 29915.0], [69.0, 29915.0], [69.1, 29915.0], [69.2, 29919.0], [69.3, 29919.0], [69.4, 29919.0], [69.5, 29919.0], [69.6, 29919.0], [69.7, 29919.0], [69.8, 29991.0], [69.9, 29991.0], [70.0, 29991.0], [70.1, 29991.0], [70.2, 29991.0], [70.3, 30000.0], [70.4, 30000.0], [70.5, 30000.0], [70.6, 30000.0], [70.7, 30000.0], [70.8, 30000.0], [70.9, 30031.0], [71.0, 30031.0], [71.1, 30031.0], [71.2, 30031.0], [71.3, 30031.0], [71.4, 30932.0], [71.5, 30932.0], [71.6, 30932.0], [71.7, 30932.0], [71.8, 30932.0], [71.9, 31848.0], [72.0, 31848.0], [72.1, 31848.0], [72.2, 31848.0], [72.3, 31848.0], [72.4, 31848.0], [72.5, 32773.0], [72.6, 32773.0], [72.7, 32773.0], [72.8, 32773.0], [72.9, 32773.0], [73.0, 33690.0], [73.1, 33690.0], [73.2, 33690.0], [73.3, 33690.0], [73.4, 33690.0], [73.5, 33690.0], [73.6, 34605.0], [73.7, 34605.0], [73.8, 34605.0], [73.9, 34605.0], [74.0, 34605.0], [74.1, 35642.0], [74.2, 35642.0], [74.3, 35642.0], [74.4, 35642.0], [74.5, 35642.0], [74.6, 36652.0], [74.7, 36652.0], [74.8, 36652.0], [74.9, 36652.0], [75.0, 36652.0], [75.1, 36652.0], [75.2, 37618.0], [75.3, 37618.0], [75.4, 37618.0], [75.5, 37618.0], [75.6, 37618.0], [75.7, 38706.0], [75.8, 38706.0], [75.9, 38706.0], [76.0, 38706.0], [76.1, 38706.0], [76.2, 38706.0], [76.3, 39509.0], [76.4, 39509.0], [76.5, 39509.0], [76.6, 39509.0], [76.7, 39509.0], [76.8, 40449.0], [76.9, 40449.0], [77.0, 40449.0], [77.1, 40449.0], [77.2, 40449.0], [77.3, 41528.0], [77.4, 41528.0], [77.5, 41528.0], [77.6, 41528.0], [77.7, 41528.0], [77.8, 41528.0], [77.9, 42275.0], [78.0, 42275.0], [78.1, 42275.0], [78.2, 42275.0], [78.3, 42275.0], [78.4, 43185.0], [78.5, 43185.0], [78.6, 43185.0], [78.7, 43185.0], [78.8, 43185.0], [78.9, 43185.0], [79.0, 44311.0], [79.1, 44311.0], [79.2, 44311.0], [79.3, 44311.0], [79.4, 44311.0], [79.5, 45233.0], [79.6, 45233.0], [79.7, 45233.0], [79.8, 45233.0], [79.9, 45233.0], [80.0, 45233.0], [80.1, 46417.0], [80.2, 46417.0], [80.3, 46417.0], [80.4, 46417.0], [80.5, 46417.0], [80.6, 47478.0], [80.7, 47478.0], [80.8, 47478.0], [80.9, 47478.0], [81.0, 47478.0], [81.1, 48405.0], [81.2, 48405.0], [81.3, 48405.0], [81.4, 48405.0], [81.5, 48405.0], [81.6, 48405.0], [81.7, 49419.0], [81.8, 49419.0], [81.9, 49419.0], [82.0, 49419.0], [82.1, 49419.0], [82.2, 50545.0], [82.3, 50545.0], [82.4, 50545.0], [82.5, 50545.0], [82.6, 50545.0], [82.7, 50545.0], [82.8, 51458.0], [82.9, 51458.0], [83.0, 51458.0], [83.1, 51458.0], [83.2, 51458.0], [83.3, 52473.0], [83.4, 52473.0], [83.5, 52473.0], [83.6, 52473.0], [83.7, 52473.0], [83.8, 53406.0], [83.9, 53406.0], [84.0, 53406.0], [84.1, 53406.0], [84.2, 53406.0], [84.3, 53406.0], [84.4, 54426.0], [84.5, 54426.0], [84.6, 54426.0], [84.7, 54426.0], [84.8, 54426.0], [84.9, 55450.0], [85.0, 55450.0], [85.1, 55450.0], [85.2, 55450.0], [85.3, 55450.0], [85.4, 55450.0], [85.5, 56575.0], [85.6, 56575.0], [85.7, 56575.0], [85.8, 56575.0], [85.9, 56575.0], [86.0, 57492.0], [86.1, 57492.0], [86.2, 57492.0], [86.3, 57492.0], [86.4, 57492.0], [86.5, 58411.0], [86.6, 58411.0], [86.7, 58411.0], [86.8, 58411.0], [86.9, 58411.0], [87.0, 58411.0], [87.1, 59538.0], [87.2, 59538.0], [87.3, 59538.0], [87.4, 59538.0], [87.5, 59538.0], [87.6, 60460.0], [87.7, 60460.0], [87.8, 60460.0], [87.9, 60460.0], [88.0, 60460.0], [88.1, 60460.0], [88.2, 61654.0], [88.3, 61654.0], [88.4, 61654.0], [88.5, 61654.0], [88.6, 61654.0], [88.7, 61697.0], [88.8, 61697.0], [88.9, 61697.0], [89.0, 61697.0], [89.1, 61697.0], [89.2, 61747.0], [89.3, 61747.0], [89.4, 61747.0], [89.5, 61747.0], [89.6, 61747.0], [89.7, 61747.0], [89.8, 61948.0], [89.9, 61948.0], [90.0, 61948.0], [90.1, 61948.0], [90.2, 61948.0], [90.3, 61956.0], [90.4, 61956.0], [90.5, 61956.0], [90.6, 61956.0], [90.7, 61956.0], [90.8, 61956.0], [90.9, 62152.0], [91.0, 62152.0], [91.1, 62152.0], [91.2, 62152.0], [91.3, 62152.0], [91.4, 62160.0], [91.5, 62160.0], [91.6, 62160.0], [91.7, 62160.0], [91.8, 62160.0], [91.9, 62260.0], [92.0, 62260.0], [92.1, 62260.0], [92.2, 62260.0], [92.3, 62260.0], [92.4, 62260.0], [92.5, 62456.0], [92.6, 62456.0], [92.7, 62456.0], [92.8, 62456.0], [92.9, 62456.0], [93.0, 62462.0], [93.1, 62462.0], [93.2, 62462.0], [93.3, 62462.0], [93.4, 62462.0], [93.5, 62462.0], [93.6, 62564.0], [93.7, 62564.0], [93.8, 62564.0], [93.9, 62564.0], [94.0, 62564.0], [94.1, 62583.0], [94.2, 62583.0], [94.3, 62583.0], [94.4, 62583.0], [94.5, 62583.0], [94.6, 62849.0], [94.7, 62849.0], [94.8, 62849.0], [94.9, 62849.0], [95.0, 62849.0], [95.1, 62849.0], [95.2, 62873.0], [95.3, 62873.0], [95.4, 62873.0], [95.5, 62873.0], [95.6, 62873.0], [95.7, 62932.0], [95.8, 62932.0], [95.9, 62932.0], [96.0, 62932.0], [96.1, 62932.0], [96.2, 62932.0], [96.3, 63072.0], [96.4, 63072.0], [96.5, 63072.0], [96.6, 63072.0], [96.7, 63072.0], [96.8, 63094.0], [96.9, 63094.0], [97.0, 63094.0], [97.1, 63094.0], [97.2, 63094.0], [97.3, 63178.0], [97.4, 63178.0], [97.5, 63178.0], [97.6, 63178.0], [97.7, 63178.0], [97.8, 63178.0], [97.9, 63202.0], [98.0, 63202.0], [98.1, 63202.0], [98.2, 63202.0], [98.3, 63202.0], [98.4, 63287.0], [98.5, 63287.0], [98.6, 63287.0], [98.7, 63287.0], [98.8, 63287.0], [98.9, 63287.0], [99.0, 63323.0], [99.1, 63323.0], [99.2, 63323.0], [99.3, 63323.0], [99.4, 63323.0], [99.5, 63399.0], [99.6, 63399.0], [99.7, 63399.0], [99.8, 63399.0], [99.9, 63399.0], [100.0, 63399.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 3400.0, "maxY": 11.0, "series": [{"data": [[3400.0, 1.0], [3500.0, 11.0], [3600.0, 11.0], [3700.0, 7.0], [3800.0, 3.0], [3900.0, 3.0], [4300.0, 1.0], [4100.0, 1.0], [4400.0, 1.0], [5100.0, 1.0], [5200.0, 1.0], [6000.0, 1.0], [6900.0, 1.0], [7400.0, 9.0], [7300.0, 2.0], [7200.0, 2.0], [7500.0, 8.0], [7600.0, 1.0], [8300.0, 1.0], [9200.0, 1.0], [10100.0, 1.0], [11200.0, 1.0], [12100.0, 1.0], [13000.0, 1.0], [13900.0, 1.0], [14700.0, 6.0], [14800.0, 7.0], [14900.0, 4.0], [15000.0, 5.0], [15200.0, 1.0], [16400.0, 1.0], [17200.0, 1.0], [18200.0, 1.0], [19100.0, 1.0], [20000.0, 1.0], [21000.0, 1.0], [21900.0, 1.0], [22800.0, 1.0], [23700.0, 1.0], [24700.0, 1.0], [25600.0, 1.0], [26500.0, 1.0], [27400.0, 1.0], [28400.0, 1.0], [29300.0, 1.0], [29600.0, 5.0], [29500.0, 2.0], [29900.0, 6.0], [29800.0, 3.0], [30000.0, 2.0], [29700.0, 4.0], [30900.0, 1.0], [31800.0, 1.0], [32700.0, 1.0], [33600.0, 1.0], [34600.0, 1.0], [35600.0, 1.0], [36600.0, 1.0], [37600.0, 1.0], [38700.0, 1.0], [39500.0, 1.0], [40400.0, 1.0], [41500.0, 1.0], [42200.0, 1.0], [43100.0, 1.0], [44300.0, 1.0], [45200.0, 1.0], [46400.0, 1.0], [47400.0, 1.0], [48400.0, 1.0], [49400.0, 1.0], [50500.0, 1.0], [51400.0, 1.0], [52400.0, 1.0], [53400.0, 1.0], [54400.0, 1.0], [55400.0, 1.0], [56500.0, 1.0], [57400.0, 1.0], [58400.0, 1.0], [59500.0, 1.0], [60400.0, 1.0], [61700.0, 1.0], [61600.0, 2.0], [61900.0, 2.0], [63000.0, 2.0], [63200.0, 2.0], [63100.0, 1.0], [63300.0, 2.0], [62100.0, 2.0], [62200.0, 1.0], [62400.0, 2.0], [62500.0, 2.0], [62800.0, 2.0], [62900.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 63300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 185.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 185.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 185.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.58916828E12, "maxY": 35.95081967213113, "series": [{"data": [[1.5891684E12, 35.692307692307686], [1.58916846E12, 35.95081967213113], [1.58916828E12, 1.0], [1.58916834E12, 5.08], [1.58916852E12, 3.0]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58916852E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 6611.476190476191, "minX": 1.0, "maxY": 63287.0, "series": [{"data": [[2.0, 8563.0], [3.0, 63287.0], [4.0, 6611.476190476191], [5.0, 63094.0], [6.0, 63202.0], [7.0, 63072.0], [8.0, 9011.136363636362], [9.0, 62873.0], [10.0, 62849.0], [11.0, 62564.0], [12.0, 62583.0], [13.0, 62456.0], [14.0, 62462.0], [15.0, 62260.0], [16.0, 12876.478260869564], [17.0, 62160.0], [18.0, 61956.0], [19.0, 61948.0], [20.0, 61747.0], [21.0, 61697.0], [22.0, 61654.0], [23.0, 60460.0], [24.0, 59538.0], [25.0, 58411.0], [26.0, 57492.0], [27.0, 56575.0], [28.0, 55450.0], [29.0, 54426.0], [30.0, 53406.0], [31.0, 52473.0], [32.0, 17106.18181818182], [33.0, 50545.0], [35.0, 48405.0], [34.0, 49419.0], [37.0, 46417.0], [36.0, 47478.0], [39.0, 44311.0], [38.0, 45233.0], [41.0, 42275.0], [40.0, 43185.0], [43.0, 40449.0], [42.0, 41528.0], [45.0, 38706.0], [44.0, 39509.0], [47.0, 36652.0], [46.0, 37618.0], [49.0, 34605.0], [48.0, 35642.0], [51.0, 32773.0], [50.0, 33690.0], [53.0, 30932.0], [52.0, 31848.0], [55.0, 29794.0], [54.0, 29906.0], [57.0, 29869.0], [56.0, 29735.0], [59.0, 29915.0], [58.0, 29693.0], [61.0, 29689.0], [60.0, 29919.0], [63.0, 29708.0], [62.0, 30031.0], [64.0, 27354.4347826087], [1.0, 16032.4]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[25.870270270270264, 24547.162162162156]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 64.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 20.8, "minX": 1.58916828E12, "maxY": 68425.56666666667, "series": [{"data": [[1.5891684E12, 338.0], [1.58916846E12, 317.2], [1.58916828E12, 20.8], [1.58916834E12, 260.0], [1.58916852E12, 26.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5891684E12, 68425.56666666667], [1.58916846E12, 64213.933333333334], [1.58916828E12, 4210.933333333333], [1.58916834E12, 52634.46666666667], [1.58916852E12, 5263.666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58916852E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4190.75, "minX": 1.58916828E12, "maxY": 63256.2, "series": [{"data": [[1.5891684E12, 17135.49230769231], [1.58916846E12, 46870.72131147542], [1.58916828E12, 4190.75], [1.58916834E12, 4705.200000000001], [1.58916852E12, 63256.2]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58916852E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4190.0, "minX": 1.58916828E12, "maxY": 63256.2, "series": [{"data": [[1.5891684E12, 17135.46153846154], [1.58916846E12, 46870.67213114754], [1.58916828E12, 4190.0], [1.58916834E12, 4705.14], [1.58916852E12, 63256.2]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58916852E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.8, "minX": 1.58916828E12, "maxY": 10.25, "series": [{"data": [[1.5891684E12, 2.738461538461539], [1.58916846E12, 2.885245901639345], [1.58916828E12, 10.25], [1.58916834E12, 1.0200000000000005], [1.58916852E12, 0.8]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58916852E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3479.0, "minX": 1.58916828E12, "maxY": 63399.0, "series": [{"data": [[1.5891684E12, 30000.0], [1.58916846E12, 63202.0], [1.58916828E12, 5223.0], [1.58916834E12, 7603.0], [1.58916852E12, 63399.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5891684E12, 7269.0], [1.58916846E12, 29689.0], [1.58916828E12, 3670.0], [1.58916834E12, 3479.0], [1.58916852E12, 63094.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5891684E12, 29691.2], [1.58916846E12, 62579.2], [1.58916828E12, 5223.0], [1.58916834E12, 7564.5], [1.58916852E12, 63399.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5891684E12, 30000.0], [1.58916846E12, 63202.0], [1.58916828E12, 5223.0], [1.58916834E12, 7603.0], [1.58916852E12, 63399.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5891684E12, 29876.0], [1.58916846E12, 62926.1], [1.58916828E12, 5223.0], [1.58916834E12, 7578.35], [1.58916852E12, 63399.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58916852E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 8431.5, "minX": 1.0, "maxY": 21024.0, "series": [{"data": [[1.0, 21024.0], [2.0, 8431.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 8431.5, "minX": 1.0, "maxY": 21024.0, "series": [{"data": [[1.0, 21024.0], [2.0, 8431.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.58916828E12, "maxY": 2.0166666666666666, "series": [{"data": [[1.5891684E12, 2.0166666666666666], [1.58916846E12, 0.03333333333333333], [1.58916828E12, 0.08333333333333333], [1.58916834E12, 0.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58916846E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.58916828E12, "maxY": 1.0833333333333333, "series": [{"data": [[1.5891684E12, 1.0833333333333333], [1.58916846E12, 1.0166666666666666], [1.58916828E12, 0.06666666666666667], [1.58916834E12, 0.8333333333333334], [1.58916852E12, 0.08333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58916852E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.58916828E12, "maxY": 1.0833333333333333, "series": [{"data": [[1.5891684E12, 1.0833333333333333], [1.58916846E12, 1.0166666666666666], [1.58916828E12, 0.06666666666666667], [1.58916834E12, 0.8333333333333334], [1.58916852E12, 0.08333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58916852E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.58916828E12, "maxY": 1.0833333333333333, "series": [{"data": [[1.5891684E12, 1.0833333333333333], [1.58916846E12, 1.0166666666666666], [1.58916828E12, 0.06666666666666667], [1.58916834E12, 0.8333333333333334], [1.58916852E12, 0.08333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58916852E12, "title": "Total Transactions Per Second"}},
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

