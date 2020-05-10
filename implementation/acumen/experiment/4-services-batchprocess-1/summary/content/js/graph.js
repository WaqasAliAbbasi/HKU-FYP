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
        data: {"result": {"minY": 3458.0, "minX": 0.0, "maxY": 13148.0, "series": [{"data": [[0.0, 3458.0], [0.1, 3458.0], [0.2, 3458.0], [0.3, 3458.0], [0.4, 3458.0], [0.5, 3477.0], [0.6, 3477.0], [0.7, 3477.0], [0.8, 3477.0], [0.9, 3477.0], [1.0, 3487.0], [1.1, 3487.0], [1.2, 3487.0], [1.3, 3487.0], [1.4, 3487.0], [1.5, 3564.0], [1.6, 3564.0], [1.7, 3564.0], [1.8, 3564.0], [1.9, 3564.0], [2.0, 3577.0], [2.1, 3577.0], [2.2, 3577.0], [2.3, 3577.0], [2.4, 3577.0], [2.5, 3577.0], [2.6, 3577.0], [2.7, 3577.0], [2.8, 3577.0], [2.9, 3577.0], [3.0, 3577.0], [3.1, 3577.0], [3.2, 3577.0], [3.3, 3577.0], [3.4, 3583.0], [3.5, 3583.0], [3.6, 3583.0], [3.7, 3583.0], [3.8, 3583.0], [3.9, 3585.0], [4.0, 3585.0], [4.1, 3585.0], [4.2, 3585.0], [4.3, 3585.0], [4.4, 3591.0], [4.5, 3591.0], [4.6, 3591.0], [4.7, 3591.0], [4.8, 3591.0], [4.9, 3603.0], [5.0, 3603.0], [5.1, 3603.0], [5.2, 3603.0], [5.3, 3618.0], [5.4, 3618.0], [5.5, 3618.0], [5.6, 3618.0], [5.7, 3618.0], [5.8, 3644.0], [5.9, 3644.0], [6.0, 3644.0], [6.1, 3644.0], [6.2, 3644.0], [6.3, 3676.0], [6.4, 3676.0], [6.5, 3676.0], [6.6, 3676.0], [6.7, 3676.0], [6.8, 3681.0], [6.9, 3681.0], [7.0, 3681.0], [7.1, 3681.0], [7.2, 3681.0], [7.3, 3686.0], [7.4, 3686.0], [7.5, 3686.0], [7.6, 3686.0], [7.7, 3687.0], [7.8, 3687.0], [7.9, 3687.0], [8.0, 3687.0], [8.1, 3687.0], [8.2, 3696.0], [8.3, 3696.0], [8.4, 3696.0], [8.5, 3696.0], [8.6, 3696.0], [8.7, 3769.0], [8.8, 3769.0], [8.9, 3769.0], [9.0, 3769.0], [9.1, 3769.0], [9.2, 3782.0], [9.3, 3782.0], [9.4, 3782.0], [9.5, 3782.0], [9.6, 3782.0], [9.7, 3789.0], [9.8, 3789.0], [9.9, 3789.0], [10.0, 3789.0], [10.1, 3792.0], [10.2, 3792.0], [10.3, 3792.0], [10.4, 3792.0], [10.5, 3792.0], [10.6, 3802.0], [10.7, 3802.0], [10.8, 3802.0], [10.9, 3802.0], [11.0, 3802.0], [11.1, 3812.0], [11.2, 3812.0], [11.3, 3812.0], [11.4, 3812.0], [11.5, 3812.0], [11.6, 3814.0], [11.7, 3814.0], [11.8, 3814.0], [11.9, 3814.0], [12.0, 3814.0], [12.1, 3817.0], [12.2, 3817.0], [12.3, 3817.0], [12.4, 3817.0], [12.5, 3820.0], [12.6, 3820.0], [12.7, 3820.0], [12.8, 3820.0], [12.9, 3820.0], [13.0, 3825.0], [13.1, 3825.0], [13.2, 3825.0], [13.3, 3825.0], [13.4, 3825.0], [13.5, 3854.0], [13.6, 3854.0], [13.7, 3854.0], [13.8, 3854.0], [13.9, 3854.0], [14.0, 3875.0], [14.1, 3875.0], [14.2, 3875.0], [14.3, 3875.0], [14.4, 3875.0], [14.5, 3878.0], [14.6, 3878.0], [14.7, 3878.0], [14.8, 3878.0], [14.9, 3878.0], [15.0, 3879.0], [15.1, 3879.0], [15.2, 3879.0], [15.3, 3879.0], [15.4, 3885.0], [15.5, 3885.0], [15.6, 3885.0], [15.7, 3885.0], [15.8, 3885.0], [15.9, 3886.0], [16.0, 3886.0], [16.1, 3886.0], [16.2, 3886.0], [16.3, 3886.0], [16.4, 3889.0], [16.5, 3889.0], [16.6, 3889.0], [16.7, 3889.0], [16.8, 3889.0], [16.9, 3891.0], [17.0, 3891.0], [17.1, 3891.0], [17.2, 3891.0], [17.3, 3891.0], [17.4, 3891.0], [17.5, 3891.0], [17.6, 3891.0], [17.7, 3891.0], [17.8, 3892.0], [17.9, 3892.0], [18.0, 3892.0], [18.1, 3892.0], [18.2, 3892.0], [18.3, 3896.0], [18.4, 3896.0], [18.5, 3896.0], [18.6, 3896.0], [18.7, 3896.0], [18.8, 4006.0], [18.9, 4006.0], [19.0, 4006.0], [19.1, 4006.0], [19.2, 4006.0], [19.3, 4128.0], [19.4, 4128.0], [19.5, 4128.0], [19.6, 4128.0], [19.7, 4128.0], [19.8, 5150.0], [19.9, 5150.0], [20.0, 5150.0], [20.1, 5150.0], [20.2, 5733.0], [20.3, 5733.0], [20.4, 5733.0], [20.5, 5733.0], [20.6, 5733.0], [20.7, 5837.0], [20.8, 5837.0], [20.9, 5837.0], [21.0, 5837.0], [21.1, 5837.0], [21.2, 5854.0], [21.3, 5854.0], [21.4, 5854.0], [21.5, 5854.0], [21.6, 5854.0], [21.7, 5917.0], [21.8, 5917.0], [21.9, 5917.0], [22.0, 5917.0], [22.1, 5917.0], [22.2, 5918.0], [22.3, 5918.0], [22.4, 5918.0], [22.5, 5918.0], [22.6, 5939.0], [22.7, 5939.0], [22.8, 5939.0], [22.9, 5939.0], [23.0, 5939.0], [23.1, 5941.0], [23.2, 5941.0], [23.3, 5941.0], [23.4, 5941.0], [23.5, 5941.0], [23.6, 6039.0], [23.7, 6039.0], [23.8, 6039.0], [23.9, 6039.0], [24.0, 6039.0], [24.1, 6040.0], [24.2, 6040.0], [24.3, 6040.0], [24.4, 6040.0], [24.5, 6040.0], [24.6, 6040.0], [24.7, 6040.0], [24.8, 6040.0], [24.9, 6040.0], [25.0, 6042.0], [25.1, 6042.0], [25.2, 6042.0], [25.3, 6042.0], [25.4, 6042.0], [25.5, 6043.0], [25.6, 6043.0], [25.7, 6043.0], [25.8, 6043.0], [25.9, 6043.0], [26.0, 6044.0], [26.1, 6044.0], [26.2, 6044.0], [26.3, 6044.0], [26.4, 6044.0], [26.5, 6044.0], [26.6, 6044.0], [26.7, 6044.0], [26.8, 6044.0], [26.9, 6044.0], [27.0, 6045.0], [27.1, 6045.0], [27.2, 6045.0], [27.3, 6045.0], [27.4, 6045.0], [27.5, 6070.0], [27.6, 6070.0], [27.7, 6070.0], [27.8, 6070.0], [27.9, 6075.0], [28.0, 6075.0], [28.1, 6075.0], [28.2, 6075.0], [28.3, 6075.0], [28.4, 6103.0], [28.5, 6103.0], [28.6, 6103.0], [28.7, 6103.0], [28.8, 6103.0], [28.9, 6344.0], [29.0, 6344.0], [29.1, 6344.0], [29.2, 6344.0], [29.3, 6344.0], [29.4, 6826.0], [29.5, 6826.0], [29.6, 6826.0], [29.7, 6826.0], [29.8, 6826.0], [29.9, 6961.0], [30.0, 6961.0], [30.1, 6961.0], [30.2, 6961.0], [30.3, 6974.0], [30.4, 6974.0], [30.5, 6974.0], [30.6, 6974.0], [30.7, 6974.0], [30.8, 6989.0], [30.9, 6989.0], [31.0, 6989.0], [31.1, 6989.0], [31.2, 6989.0], [31.3, 7083.0], [31.4, 7083.0], [31.5, 7083.0], [31.6, 7083.0], [31.7, 7083.0], [31.8, 7089.0], [31.9, 7089.0], [32.0, 7089.0], [32.1, 7089.0], [32.2, 7089.0], [32.3, 7168.0], [32.4, 7168.0], [32.5, 7168.0], [32.6, 7168.0], [32.7, 7352.0], [32.8, 7352.0], [32.9, 7352.0], [33.0, 7352.0], [33.1, 7352.0], [33.2, 7409.0], [33.3, 7409.0], [33.4, 7409.0], [33.5, 7409.0], [33.6, 7409.0], [33.7, 8260.0], [33.8, 8260.0], [33.9, 8260.0], [34.0, 8260.0], [34.1, 8260.0], [34.2, 8340.0], [34.3, 8340.0], [34.4, 8340.0], [34.5, 8340.0], [34.6, 8340.0], [34.7, 9110.0], [34.8, 9110.0], [34.9, 9110.0], [35.0, 9110.0], [35.1, 10474.0], [35.2, 10474.0], [35.3, 10474.0], [35.4, 10474.0], [35.5, 10474.0], [35.6, 11340.0], [35.7, 11340.0], [35.8, 11340.0], [35.9, 11340.0], [36.0, 11340.0], [36.1, 11358.0], [36.2, 11358.0], [36.3, 11358.0], [36.4, 11358.0], [36.5, 11358.0], [36.6, 11695.0], [36.7, 11695.0], [36.8, 11695.0], [36.9, 11695.0], [37.0, 11695.0], [37.1, 11747.0], [37.2, 11747.0], [37.3, 11747.0], [37.4, 11747.0], [37.5, 11771.0], [37.6, 11771.0], [37.7, 11771.0], [37.8, 11771.0], [37.9, 11771.0], [38.0, 11771.0], [38.1, 11771.0], [38.2, 11771.0], [38.3, 11771.0], [38.4, 11771.0], [38.5, 11771.0], [38.6, 11771.0], [38.7, 11771.0], [38.8, 11771.0], [38.9, 11771.0], [39.0, 11772.0], [39.1, 11772.0], [39.2, 11772.0], [39.3, 11772.0], [39.4, 11772.0], [39.5, 11773.0], [39.6, 11773.0], [39.7, 11773.0], [39.8, 11773.0], [39.9, 11773.0], [40.0, 11773.0], [40.1, 11773.0], [40.2, 11773.0], [40.3, 11773.0], [40.4, 11774.0], [40.5, 11774.0], [40.6, 11774.0], [40.7, 11774.0], [40.8, 11774.0], [40.9, 11775.0], [41.0, 11775.0], [41.1, 11775.0], [41.2, 11775.0], [41.3, 11775.0], [41.4, 11775.0], [41.5, 11775.0], [41.6, 11775.0], [41.7, 11775.0], [41.8, 11775.0], [41.9, 11778.0], [42.0, 11778.0], [42.1, 11778.0], [42.2, 11778.0], [42.3, 11778.0], [42.4, 11798.0], [42.5, 11798.0], [42.6, 11798.0], [42.7, 11798.0], [42.8, 11820.0], [42.9, 11820.0], [43.0, 11820.0], [43.1, 11820.0], [43.2, 11820.0], [43.3, 11828.0], [43.4, 11828.0], [43.5, 11828.0], [43.6, 11828.0], [43.7, 11828.0], [43.8, 11830.0], [43.9, 11830.0], [44.0, 11830.0], [44.1, 11830.0], [44.2, 11830.0], [44.3, 11835.0], [44.4, 11835.0], [44.5, 11835.0], [44.6, 11835.0], [44.7, 11835.0], [44.8, 11841.0], [44.9, 11841.0], [45.0, 11841.0], [45.1, 11841.0], [45.2, 11854.0], [45.3, 11854.0], [45.4, 11854.0], [45.5, 11854.0], [45.6, 11854.0], [45.7, 11867.0], [45.8, 11867.0], [45.9, 11867.0], [46.0, 11867.0], [46.1, 11867.0], [46.2, 11874.0], [46.3, 11874.0], [46.4, 11874.0], [46.5, 11874.0], [46.6, 11874.0], [46.7, 11876.0], [46.8, 11876.0], [46.9, 11876.0], [47.0, 11876.0], [47.1, 11876.0], [47.2, 11877.0], [47.3, 11877.0], [47.4, 11877.0], [47.5, 11877.0], [47.6, 11878.0], [47.7, 11878.0], [47.8, 11878.0], [47.9, 11878.0], [48.0, 11878.0], [48.1, 11878.0], [48.2, 11878.0], [48.3, 11878.0], [48.4, 11878.0], [48.5, 11878.0], [48.6, 11878.0], [48.7, 11878.0], [48.8, 11878.0], [48.9, 11878.0], [49.0, 11878.0], [49.1, 11879.0], [49.2, 11879.0], [49.3, 11879.0], [49.4, 11879.0], [49.5, 11879.0], [49.6, 11880.0], [49.7, 11880.0], [49.8, 11880.0], [49.9, 11880.0], [50.0, 11880.0], [50.1, 11880.0], [50.2, 11880.0], [50.3, 11880.0], [50.4, 11880.0], [50.5, 11882.0], [50.6, 11882.0], [50.7, 11882.0], [50.8, 11882.0], [50.9, 11882.0], [51.0, 11883.0], [51.1, 11883.0], [51.2, 11883.0], [51.3, 11883.0], [51.4, 11883.0], [51.5, 11895.0], [51.6, 11895.0], [51.7, 11895.0], [51.8, 11895.0], [51.9, 11895.0], [52.0, 11913.0], [52.1, 11913.0], [52.2, 11913.0], [52.3, 11913.0], [52.4, 11913.0], [52.5, 11917.0], [52.6, 11917.0], [52.7, 11917.0], [52.8, 11917.0], [52.9, 11926.0], [53.0, 11926.0], [53.1, 11926.0], [53.2, 11926.0], [53.3, 11926.0], [53.4, 11929.0], [53.5, 11929.0], [53.6, 11929.0], [53.7, 11929.0], [53.8, 11929.0], [53.9, 11933.0], [54.0, 11933.0], [54.1, 11933.0], [54.2, 11933.0], [54.3, 11933.0], [54.4, 11942.0], [54.5, 11942.0], [54.6, 11942.0], [54.7, 11942.0], [54.8, 11942.0], [54.9, 11942.0], [55.0, 11942.0], [55.1, 11942.0], [55.2, 11942.0], [55.3, 11958.0], [55.4, 11958.0], [55.5, 11958.0], [55.6, 11958.0], [55.7, 11958.0], [55.8, 11974.0], [55.9, 11974.0], [56.0, 11974.0], [56.1, 11974.0], [56.2, 11974.0], [56.3, 11978.0], [56.4, 11978.0], [56.5, 11978.0], [56.6, 11978.0], [56.7, 11978.0], [56.8, 11978.0], [56.9, 11978.0], [57.0, 11978.0], [57.1, 11978.0], [57.2, 11978.0], [57.3, 11980.0], [57.4, 11980.0], [57.5, 11980.0], [57.6, 11980.0], [57.7, 11980.0], [57.8, 11980.0], [57.9, 11980.0], [58.0, 11980.0], [58.1, 11980.0], [58.2, 11982.0], [58.3, 11982.0], [58.4, 11982.0], [58.5, 11982.0], [58.6, 11982.0], [58.7, 11982.0], [58.8, 11982.0], [58.9, 11982.0], [59.0, 11982.0], [59.1, 11982.0], [59.2, 11983.0], [59.3, 11983.0], [59.4, 11983.0], [59.5, 11983.0], [59.6, 11983.0], [59.7, 11985.0], [59.8, 11985.0], [59.9, 11985.0], [60.0, 11985.0], [60.1, 11986.0], [60.2, 11986.0], [60.3, 11986.0], [60.4, 11986.0], [60.5, 11986.0], [60.6, 11989.0], [60.7, 11989.0], [60.8, 11989.0], [60.9, 11989.0], [61.0, 11989.0], [61.1, 11997.0], [61.2, 11997.0], [61.3, 11997.0], [61.4, 11997.0], [61.5, 11997.0], [61.6, 12004.0], [61.7, 12004.0], [61.8, 12004.0], [61.9, 12004.0], [62.0, 12004.0], [62.1, 12008.0], [62.2, 12008.0], [62.3, 12008.0], [62.4, 12008.0], [62.5, 12008.0], [62.6, 12052.0], [62.7, 12052.0], [62.8, 12052.0], [62.9, 12052.0], [63.0, 12056.0], [63.1, 12056.0], [63.2, 12056.0], [63.3, 12056.0], [63.4, 12056.0], [63.5, 12058.0], [63.6, 12058.0], [63.7, 12058.0], [63.8, 12058.0], [63.9, 12058.0], [64.0, 12059.0], [64.1, 12059.0], [64.2, 12059.0], [64.3, 12059.0], [64.4, 12059.0], [64.5, 12065.0], [64.6, 12065.0], [64.7, 12065.0], [64.8, 12065.0], [64.9, 12065.0], [65.0, 12075.0], [65.1, 12075.0], [65.2, 12075.0], [65.3, 12075.0], [65.4, 12082.0], [65.5, 12082.0], [65.6, 12082.0], [65.7, 12082.0], [65.8, 12082.0], [65.9, 12082.0], [66.0, 12082.0], [66.1, 12082.0], [66.2, 12082.0], [66.3, 12082.0], [66.4, 12083.0], [66.5, 12083.0], [66.6, 12083.0], [66.7, 12083.0], [66.8, 12083.0], [66.9, 12085.0], [67.0, 12085.0], [67.1, 12085.0], [67.2, 12085.0], [67.3, 12085.0], [67.4, 12085.0], [67.5, 12085.0], [67.6, 12085.0], [67.7, 12085.0], [67.8, 12102.0], [67.9, 12102.0], [68.0, 12102.0], [68.1, 12102.0], [68.2, 12102.0], [68.3, 12119.0], [68.4, 12119.0], [68.5, 12119.0], [68.6, 12119.0], [68.7, 12119.0], [68.8, 12146.0], [68.9, 12146.0], [69.0, 12146.0], [69.1, 12146.0], [69.2, 12146.0], [69.3, 12148.0], [69.4, 12148.0], [69.5, 12148.0], [69.6, 12148.0], [69.7, 12148.0], [69.8, 12152.0], [69.9, 12152.0], [70.0, 12152.0], [70.1, 12152.0], [70.2, 12170.0], [70.3, 12170.0], [70.4, 12170.0], [70.5, 12170.0], [70.6, 12170.0], [70.7, 12170.0], [70.8, 12170.0], [70.9, 12170.0], [71.0, 12170.0], [71.1, 12170.0], [71.2, 12180.0], [71.3, 12180.0], [71.4, 12180.0], [71.5, 12180.0], [71.6, 12180.0], [71.7, 12184.0], [71.8, 12184.0], [71.9, 12184.0], [72.0, 12184.0], [72.1, 12184.0], [72.2, 12184.0], [72.3, 12184.0], [72.4, 12184.0], [72.5, 12184.0], [72.6, 12185.0], [72.7, 12185.0], [72.8, 12185.0], [72.9, 12185.0], [73.0, 12185.0], [73.1, 12186.0], [73.2, 12186.0], [73.3, 12186.0], [73.4, 12186.0], [73.5, 12186.0], [73.6, 12187.0], [73.7, 12187.0], [73.8, 12187.0], [73.9, 12187.0], [74.0, 12187.0], [74.1, 12187.0], [74.2, 12187.0], [74.3, 12187.0], [74.4, 12187.0], [74.5, 12187.0], [74.6, 12190.0], [74.7, 12190.0], [74.8, 12190.0], [74.9, 12190.0], [75.0, 12190.0], [75.1, 12197.0], [75.2, 12197.0], [75.3, 12197.0], [75.4, 12197.0], [75.5, 12205.0], [75.6, 12205.0], [75.7, 12205.0], [75.8, 12205.0], [75.9, 12205.0], [76.0, 12210.0], [76.1, 12210.0], [76.2, 12210.0], [76.3, 12210.0], [76.4, 12210.0], [76.5, 12210.0], [76.6, 12210.0], [76.7, 12210.0], [76.8, 12210.0], [76.9, 12210.0], [77.0, 12214.0], [77.1, 12214.0], [77.2, 12214.0], [77.3, 12214.0], [77.4, 12214.0], [77.5, 12216.0], [77.6, 12216.0], [77.7, 12216.0], [77.8, 12216.0], [77.9, 12223.0], [78.0, 12223.0], [78.1, 12223.0], [78.2, 12223.0], [78.3, 12223.0], [78.4, 12257.0], [78.5, 12257.0], [78.6, 12257.0], [78.7, 12257.0], [78.8, 12257.0], [78.9, 12271.0], [79.0, 12271.0], [79.1, 12271.0], [79.2, 12271.0], [79.3, 12271.0], [79.4, 12286.0], [79.5, 12286.0], [79.6, 12286.0], [79.7, 12286.0], [79.8, 12286.0], [79.9, 12287.0], [80.0, 12287.0], [80.1, 12287.0], [80.2, 12287.0], [80.3, 12287.0], [80.4, 12287.0], [80.5, 12287.0], [80.6, 12287.0], [80.7, 12287.0], [80.8, 12287.0], [80.9, 12287.0], [81.0, 12287.0], [81.1, 12287.0], [81.2, 12287.0], [81.3, 12288.0], [81.4, 12288.0], [81.5, 12288.0], [81.6, 12288.0], [81.7, 12288.0], [81.8, 12289.0], [81.9, 12289.0], [82.0, 12289.0], [82.1, 12289.0], [82.2, 12289.0], [82.3, 12293.0], [82.4, 12293.0], [82.5, 12293.0], [82.6, 12293.0], [82.7, 12304.0], [82.8, 12304.0], [82.9, 12304.0], [83.0, 12304.0], [83.1, 12304.0], [83.2, 12321.0], [83.3, 12321.0], [83.4, 12321.0], [83.5, 12321.0], [83.6, 12321.0], [83.7, 12323.0], [83.8, 12323.0], [83.9, 12323.0], [84.0, 12323.0], [84.1, 12323.0], [84.2, 12323.0], [84.3, 12323.0], [84.4, 12323.0], [84.5, 12323.0], [84.6, 12323.0], [84.7, 12346.0], [84.8, 12346.0], [84.9, 12346.0], [85.0, 12346.0], [85.1, 12349.0], [85.2, 12349.0], [85.3, 12349.0], [85.4, 12349.0], [85.5, 12349.0], [85.6, 12351.0], [85.7, 12351.0], [85.8, 12351.0], [85.9, 12351.0], [86.0, 12351.0], [86.1, 12369.0], [86.2, 12369.0], [86.3, 12369.0], [86.4, 12369.0], [86.5, 12369.0], [86.6, 12380.0], [86.7, 12380.0], [86.8, 12380.0], [86.9, 12380.0], [87.0, 12380.0], [87.1, 12380.0], [87.2, 12380.0], [87.3, 12380.0], [87.4, 12380.0], [87.5, 12387.0], [87.6, 12387.0], [87.7, 12387.0], [87.8, 12387.0], [87.9, 12387.0], [88.0, 12390.0], [88.1, 12390.0], [88.2, 12390.0], [88.3, 12390.0], [88.4, 12390.0], [88.5, 12391.0], [88.6, 12391.0], [88.7, 12391.0], [88.8, 12391.0], [88.9, 12391.0], [89.0, 12391.0], [89.1, 12391.0], [89.2, 12391.0], [89.3, 12391.0], [89.4, 12391.0], [89.5, 12392.0], [89.6, 12392.0], [89.7, 12392.0], [89.8, 12392.0], [89.9, 12392.0], [90.0, 12394.0], [90.1, 12394.0], [90.2, 12394.0], [90.3, 12394.0], [90.4, 12395.0], [90.5, 12395.0], [90.6, 12395.0], [90.7, 12395.0], [90.8, 12395.0], [90.9, 12445.0], [91.0, 12445.0], [91.1, 12445.0], [91.2, 12445.0], [91.3, 12445.0], [91.4, 12495.0], [91.5, 12495.0], [91.6, 12495.0], [91.7, 12495.0], [91.8, 12495.0], [91.9, 12495.0], [92.0, 12495.0], [92.1, 12495.0], [92.2, 12495.0], [92.3, 12495.0], [92.4, 12497.0], [92.5, 12497.0], [92.6, 12497.0], [92.7, 12497.0], [92.8, 12570.0], [92.9, 12570.0], [93.0, 12570.0], [93.1, 12570.0], [93.2, 12570.0], [93.3, 12592.0], [93.4, 12592.0], [93.5, 12592.0], [93.6, 12592.0], [93.7, 12592.0], [93.8, 12594.0], [93.9, 12594.0], [94.0, 12594.0], [94.1, 12594.0], [94.2, 12594.0], [94.3, 12596.0], [94.4, 12596.0], [94.5, 12596.0], [94.6, 12596.0], [94.7, 12596.0], [94.8, 12607.0], [94.9, 12607.0], [95.0, 12607.0], [95.1, 12607.0], [95.2, 12620.0], [95.3, 12620.0], [95.4, 12620.0], [95.5, 12620.0], [95.6, 12620.0], [95.7, 12716.0], [95.8, 12716.0], [95.9, 12716.0], [96.0, 12716.0], [96.1, 12716.0], [96.2, 12794.0], [96.3, 12794.0], [96.4, 12794.0], [96.5, 12794.0], [96.6, 12794.0], [96.7, 12795.0], [96.8, 12795.0], [96.9, 12795.0], [97.0, 12795.0], [97.1, 12795.0], [97.2, 12806.0], [97.3, 12806.0], [97.4, 12806.0], [97.5, 12806.0], [97.6, 12842.0], [97.7, 12842.0], [97.8, 12842.0], [97.9, 12842.0], [98.0, 12842.0], [98.1, 12893.0], [98.2, 12893.0], [98.3, 12893.0], [98.4, 12893.0], [98.5, 12893.0], [98.6, 13006.0], [98.7, 13006.0], [98.8, 13006.0], [98.9, 13006.0], [99.0, 13006.0], [99.1, 13080.0], [99.2, 13080.0], [99.3, 13080.0], [99.4, 13080.0], [99.5, 13080.0], [99.6, 13148.0], [99.7, 13148.0], [99.8, 13148.0], [99.9, 13148.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 3400.0, "maxY": 20.0, "series": [{"data": [[8200.0, 1.0], [8300.0, 1.0], [9100.0, 1.0], [10400.0, 1.0], [11300.0, 2.0], [11700.0, 12.0], [11600.0, 1.0], [12100.0, 16.0], [12000.0, 13.0], [12200.0, 15.0], [11900.0, 20.0], [11800.0, 19.0], [12400.0, 4.0], [12300.0, 17.0], [12700.0, 3.0], [12500.0, 4.0], [12600.0, 2.0], [12800.0, 3.0], [13100.0, 1.0], [13000.0, 2.0], [3400.0, 3.0], [3500.0, 7.0], [3600.0, 8.0], [3700.0, 4.0], [3800.0, 17.0], [4000.0, 1.0], [4100.0, 1.0], [5100.0, 1.0], [5700.0, 1.0], [5800.0, 2.0], [6000.0, 10.0], [5900.0, 4.0], [6100.0, 1.0], [6300.0, 1.0], [6900.0, 3.0], [6800.0, 1.0], [7000.0, 2.0], [7100.0, 1.0], [7300.0, 1.0], [7400.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 13100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 208.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 208.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 208.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.6874999999999998, "minX": 1.58912562E12, "maxY": 16.0, "series": [{"data": [[1.58912562E12, 1.6874999999999998], [1.5891258E12, 12.999999999999998], [1.58912568E12, 10.082191780821919], [1.58912574E12, 16.0]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5891258E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4220.619047619048, "minX": 1.0, "maxY": 11989.0, "series": [{"data": [[2.0, 4310.583333333334], [8.0, 5849.240000000001], [9.0, 11841.0], [10.0, 11882.0], [11.0, 11772.0], [12.0, 11877.0], [3.0, 11989.0], [13.0, 11828.0], [14.0, 11867.0], [15.0, 11878.0], [1.0, 4953.666666666667], [4.0, 4220.619047619048], [16.0, 11680.075187969924], [5.0, 11985.0], [6.0, 11880.0], [7.0, 11771.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[12.245192307692303, 9616.985576923074]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 16.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 83.2, "minX": 1.58912562E12, "maxY": 83164.63333333333, "series": [{"data": [[1.58912562E12, 83.2], [1.5891258E12, 208.0], [1.58912568E12, 379.6], [1.58912574E12, 410.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58912562E12, 16843.983333333334], [1.5891258E12, 42106.433333333334], [1.58912568E12, 76847.13333333333], [1.58912574E12, 83164.63333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5891258E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3596.625, "minX": 1.58912562E12, "maxY": 12222.822784810121, "series": [{"data": [[1.58912562E12, 3596.625], [1.5891258E12, 12002.300000000003], [1.58912568E12, 6809.479452054796], [1.58912574E12, 12222.822784810121]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5891258E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3596.5, "minX": 1.58912562E12, "maxY": 12222.784810126577, "series": [{"data": [[1.58912562E12, 3596.5], [1.5891258E12, 12002.225], [1.58912568E12, 6809.41095890411], [1.58912574E12, 12222.784810126577]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5891258E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.1, "minX": 1.58912562E12, "maxY": 3.7499999999999996, "series": [{"data": [[1.58912562E12, 3.7499999999999996], [1.5891258E12, 1.1], [1.58912568E12, 1.7397260273972606], [1.58912574E12, 1.10126582278481]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5891258E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3458.0, "minX": 1.58912562E12, "maxY": 13148.0, "series": [{"data": [[1.58912562E12, 3696.0], [1.5891258E12, 12806.0], [1.58912568E12, 12445.0], [1.58912574E12, 13148.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58912562E12, 3458.0], [1.5891258E12, 11695.0], [1.58912568E12, 3577.0], [1.58912574E12, 11747.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58912562E12, 3689.7], [1.5891258E12, 12553.4], [1.58912568E12, 12201.8], [1.58912574E12, 12716.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58912562E12, 3696.0], [1.5891258E12, 12806.0], [1.58912568E12, 12445.0], [1.58912574E12, 13148.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58912562E12, 3696.0], [1.5891258E12, 12619.35], [1.58912568E12, 12297.8], [1.58912574E12, 12893.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5891258E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3882.5, "minX": 1.0, "maxY": 12082.0, "series": [{"data": [[1.0, 11776.5], [2.0, 12082.0], [3.0, 3882.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3882.5, "minX": 1.0, "maxY": 12082.0, "series": [{"data": [[1.0, 11776.5], [2.0, 12082.0], [3.0, 3882.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.58912562E12, "maxY": 1.4166666666666667, "series": [{"data": [[1.58912562E12, 0.3333333333333333], [1.5891258E12, 0.4], [1.58912568E12, 1.4166666666666667], [1.58912574E12, 1.3166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5891258E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.58912562E12, "maxY": 1.3166666666666667, "series": [{"data": [[1.58912562E12, 0.26666666666666666], [1.5891258E12, 0.6666666666666666], [1.58912568E12, 1.2166666666666666], [1.58912574E12, 1.3166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5891258E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.58912562E12, "maxY": 1.3166666666666667, "series": [{"data": [[1.58912562E12, 0.26666666666666666], [1.5891258E12, 0.6666666666666666], [1.58912568E12, 1.2166666666666666], [1.58912574E12, 1.3166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5891258E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.58912562E12, "maxY": 1.3166666666666667, "series": [{"data": [[1.58912562E12, 0.26666666666666666], [1.5891258E12, 0.6666666666666666], [1.58912568E12, 1.2166666666666666], [1.58912574E12, 1.3166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5891258E12, "title": "Total Transactions Per Second"}},
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

