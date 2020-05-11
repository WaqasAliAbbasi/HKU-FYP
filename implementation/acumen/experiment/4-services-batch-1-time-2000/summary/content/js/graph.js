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
        data: {"result": {"minY": 3406.0, "minX": 0.0, "maxY": 62066.0, "series": [{"data": [[0.0, 3406.0], [0.1, 3406.0], [0.2, 3406.0], [0.3, 3406.0], [0.4, 3406.0], [0.5, 3448.0], [0.6, 3448.0], [0.7, 3448.0], [0.8, 3448.0], [0.9, 3448.0], [1.0, 3448.0], [1.1, 3448.0], [1.2, 3448.0], [1.3, 3448.0], [1.4, 3448.0], [1.5, 3466.0], [1.6, 3466.0], [1.7, 3466.0], [1.8, 3466.0], [1.9, 3466.0], [2.0, 3477.0], [2.1, 3477.0], [2.2, 3477.0], [2.3, 3477.0], [2.4, 3477.0], [2.5, 3479.0], [2.6, 3479.0], [2.7, 3479.0], [2.8, 3479.0], [2.9, 3479.0], [3.0, 3483.0], [3.1, 3483.0], [3.2, 3483.0], [3.3, 3483.0], [3.4, 3483.0], [3.5, 3484.0], [3.6, 3484.0], [3.7, 3484.0], [3.8, 3484.0], [3.9, 3484.0], [4.0, 3579.0], [4.1, 3579.0], [4.2, 3579.0], [4.3, 3579.0], [4.4, 3582.0], [4.5, 3582.0], [4.6, 3582.0], [4.7, 3582.0], [4.8, 3582.0], [4.9, 3582.0], [5.0, 3582.0], [5.1, 3582.0], [5.2, 3582.0], [5.3, 3582.0], [5.4, 3583.0], [5.5, 3583.0], [5.6, 3583.0], [5.7, 3583.0], [5.8, 3583.0], [5.9, 3583.0], [6.0, 3583.0], [6.1, 3583.0], [6.2, 3583.0], [6.3, 3583.0], [6.4, 3584.0], [6.5, 3584.0], [6.6, 3584.0], [6.7, 3584.0], [6.8, 3584.0], [6.9, 3585.0], [7.0, 3585.0], [7.1, 3585.0], [7.2, 3585.0], [7.3, 3585.0], [7.4, 3633.0], [7.5, 3633.0], [7.6, 3633.0], [7.7, 3633.0], [7.8, 3633.0], [7.9, 3668.0], [8.0, 3668.0], [8.1, 3668.0], [8.2, 3668.0], [8.3, 3682.0], [8.4, 3682.0], [8.5, 3682.0], [8.6, 3682.0], [8.7, 3682.0], [8.8, 3683.0], [8.9, 3683.0], [9.0, 3683.0], [9.1, 3683.0], [9.2, 3683.0], [9.3, 3685.0], [9.4, 3685.0], [9.5, 3685.0], [9.6, 3685.0], [9.7, 3685.0], [9.8, 3686.0], [9.9, 3686.0], [10.0, 3686.0], [10.1, 3686.0], [10.2, 3686.0], [10.3, 3686.0], [10.4, 3686.0], [10.5, 3686.0], [10.6, 3686.0], [10.7, 3686.0], [10.8, 3686.0], [10.9, 3686.0], [11.0, 3686.0], [11.1, 3686.0], [11.2, 3686.0], [11.3, 3688.0], [11.4, 3688.0], [11.5, 3688.0], [11.6, 3688.0], [11.7, 3688.0], [11.8, 3688.0], [11.9, 3688.0], [12.0, 3688.0], [12.1, 3688.0], [12.2, 3688.0], [12.3, 3688.0], [12.4, 3688.0], [12.5, 3688.0], [12.6, 3688.0], [12.7, 3690.0], [12.8, 3690.0], [12.9, 3690.0], [13.0, 3690.0], [13.1, 3690.0], [13.2, 3691.0], [13.3, 3691.0], [13.4, 3691.0], [13.5, 3691.0], [13.6, 3691.0], [13.7, 3701.0], [13.8, 3701.0], [13.9, 3701.0], [14.0, 3701.0], [14.1, 3701.0], [14.2, 3733.0], [14.3, 3733.0], [14.4, 3733.0], [14.5, 3733.0], [14.6, 3733.0], [14.7, 3741.0], [14.8, 3741.0], [14.9, 3741.0], [15.0, 3741.0], [15.1, 3741.0], [15.2, 3747.0], [15.3, 3747.0], [15.4, 3747.0], [15.5, 3747.0], [15.6, 3747.0], [15.7, 3756.0], [15.8, 3756.0], [15.9, 3756.0], [16.0, 3756.0], [16.1, 3786.0], [16.2, 3786.0], [16.3, 3786.0], [16.4, 3786.0], [16.5, 3786.0], [16.6, 3787.0], [16.7, 3787.0], [16.8, 3787.0], [16.9, 3787.0], [17.0, 3787.0], [17.1, 3792.0], [17.2, 3792.0], [17.3, 3792.0], [17.4, 3792.0], [17.5, 3792.0], [17.6, 3805.0], [17.7, 3805.0], [17.8, 3805.0], [17.9, 3805.0], [18.0, 3805.0], [18.1, 3824.0], [18.2, 3824.0], [18.3, 3824.0], [18.4, 3824.0], [18.5, 3824.0], [18.6, 3834.0], [18.7, 3834.0], [18.8, 3834.0], [18.9, 3834.0], [19.0, 3834.0], [19.1, 3881.0], [19.2, 3881.0], [19.3, 3881.0], [19.4, 3881.0], [19.5, 3881.0], [19.6, 4610.0], [19.7, 4610.0], [19.8, 4610.0], [19.9, 4610.0], [20.0, 4610.0], [20.1, 5732.0], [20.2, 5732.0], [20.3, 5732.0], [20.4, 5732.0], [20.5, 5732.0], [20.6, 5732.0], [20.7, 5732.0], [20.8, 5732.0], [20.9, 5732.0], [21.0, 5735.0], [21.1, 5735.0], [21.2, 5735.0], [21.3, 5735.0], [21.4, 5735.0], [21.5, 5836.0], [21.6, 5836.0], [21.7, 5836.0], [21.8, 5836.0], [21.9, 5836.0], [22.0, 5837.0], [22.1, 5837.0], [22.2, 5837.0], [22.3, 5837.0], [22.4, 5837.0], [22.5, 5840.0], [22.6, 5840.0], [22.7, 5840.0], [22.8, 5840.0], [22.9, 5840.0], [23.0, 5843.0], [23.1, 5843.0], [23.2, 5843.0], [23.3, 5843.0], [23.4, 5843.0], [23.5, 5855.0], [23.6, 5855.0], [23.7, 5855.0], [23.8, 5855.0], [23.9, 5855.0], [24.0, 5864.0], [24.1, 5864.0], [24.2, 5864.0], [24.3, 5864.0], [24.4, 5876.0], [24.5, 5876.0], [24.6, 5876.0], [24.7, 5876.0], [24.8, 5876.0], [24.9, 5914.0], [25.0, 5914.0], [25.1, 5914.0], [25.2, 5914.0], [25.3, 5914.0], [25.4, 5936.0], [25.5, 5936.0], [25.6, 5936.0], [25.7, 5936.0], [25.8, 5936.0], [25.9, 5937.0], [26.0, 5937.0], [26.1, 5937.0], [26.2, 5937.0], [26.3, 5937.0], [26.4, 5938.0], [26.5, 5938.0], [26.6, 5938.0], [26.7, 5938.0], [26.8, 5938.0], [26.9, 5939.0], [27.0, 5939.0], [27.1, 5939.0], [27.2, 5939.0], [27.3, 5939.0], [27.4, 5951.0], [27.5, 5951.0], [27.6, 5951.0], [27.7, 5951.0], [27.8, 5951.0], [27.9, 5981.0], [28.0, 5981.0], [28.1, 5981.0], [28.2, 5981.0], [28.3, 6007.0], [28.4, 6007.0], [28.5, 6007.0], [28.6, 6007.0], [28.7, 6007.0], [28.8, 6258.0], [28.9, 6258.0], [29.0, 6258.0], [29.1, 6258.0], [29.2, 6258.0], [29.3, 6274.0], [29.4, 6274.0], [29.5, 6274.0], [29.6, 6274.0], [29.7, 6274.0], [29.8, 6275.0], [29.9, 6275.0], [30.0, 6275.0], [30.1, 6275.0], [30.2, 6275.0], [30.3, 6738.0], [30.4, 6738.0], [30.5, 6738.0], [30.6, 6738.0], [30.7, 6738.0], [30.8, 6842.0], [30.9, 6842.0], [31.0, 6842.0], [31.1, 6842.0], [31.2, 6842.0], [31.3, 6855.0], [31.4, 6855.0], [31.5, 6855.0], [31.6, 6855.0], [31.7, 6855.0], [31.8, 7073.0], [31.9, 7073.0], [32.0, 7073.0], [32.1, 7073.0], [32.2, 7727.0], [32.3, 7727.0], [32.4, 7727.0], [32.5, 7727.0], [32.6, 7727.0], [32.7, 7752.0], [32.8, 7752.0], [32.9, 7752.0], [33.0, 7752.0], [33.1, 7752.0], [33.2, 7881.0], [33.3, 7881.0], [33.4, 7881.0], [33.5, 7881.0], [33.6, 7881.0], [33.7, 7898.0], [33.8, 7898.0], [33.9, 7898.0], [34.0, 7898.0], [34.1, 7898.0], [34.2, 7926.0], [34.3, 7926.0], [34.4, 7926.0], [34.5, 7926.0], [34.6, 7926.0], [34.7, 8203.0], [34.8, 8203.0], [34.9, 8203.0], [35.0, 8203.0], [35.1, 8203.0], [35.2, 8777.0], [35.3, 8777.0], [35.4, 8777.0], [35.5, 8777.0], [35.6, 8777.0], [35.7, 10003.0], [35.8, 10003.0], [35.9, 10003.0], [36.0, 10003.0], [36.1, 10867.0], [36.2, 10867.0], [36.3, 10867.0], [36.4, 10867.0], [36.5, 10867.0], [36.6, 10972.0], [36.7, 10972.0], [36.8, 10972.0], [36.9, 10972.0], [37.0, 10972.0], [37.1, 11567.0], [37.2, 11567.0], [37.3, 11567.0], [37.4, 11567.0], [37.5, 11567.0], [37.6, 11670.0], [37.7, 11670.0], [37.8, 11670.0], [37.9, 11670.0], [38.0, 11670.0], [38.1, 11670.0], [38.2, 11670.0], [38.3, 11670.0], [38.4, 11670.0], [38.5, 11670.0], [38.6, 11681.0], [38.7, 11681.0], [38.8, 11681.0], [38.9, 11681.0], [39.0, 11681.0], [39.1, 11737.0], [39.2, 11737.0], [39.3, 11737.0], [39.4, 11737.0], [39.5, 11737.0], [39.6, 11753.0], [39.7, 11753.0], [39.8, 11753.0], [39.9, 11753.0], [40.0, 11753.0], [40.1, 11753.0], [40.2, 11753.0], [40.3, 11753.0], [40.4, 11753.0], [40.5, 11769.0], [40.6, 11769.0], [40.7, 11769.0], [40.8, 11769.0], [40.9, 11769.0], [41.0, 11771.0], [41.1, 11771.0], [41.2, 11771.0], [41.3, 11771.0], [41.4, 11771.0], [41.5, 11773.0], [41.6, 11773.0], [41.7, 11773.0], [41.8, 11773.0], [41.9, 11773.0], [42.0, 11786.0], [42.1, 11786.0], [42.2, 11786.0], [42.3, 11786.0], [42.4, 11786.0], [42.5, 11820.0], [42.6, 11820.0], [42.7, 11820.0], [42.8, 11820.0], [42.9, 11820.0], [43.0, 11842.0], [43.1, 11842.0], [43.2, 11842.0], [43.3, 11842.0], [43.4, 11842.0], [43.5, 11848.0], [43.6, 11848.0], [43.7, 11848.0], [43.8, 11848.0], [43.9, 11848.0], [44.0, 11875.0], [44.1, 11875.0], [44.2, 11875.0], [44.3, 11875.0], [44.4, 11879.0], [44.5, 11879.0], [44.6, 11879.0], [44.7, 11879.0], [44.8, 11879.0], [44.9, 11924.0], [45.0, 11924.0], [45.1, 11924.0], [45.2, 11924.0], [45.3, 11924.0], [45.4, 11946.0], [45.5, 11946.0], [45.6, 11946.0], [45.7, 11946.0], [45.8, 11946.0], [45.9, 11963.0], [46.0, 11963.0], [46.1, 11963.0], [46.2, 11963.0], [46.3, 11963.0], [46.4, 11965.0], [46.5, 11965.0], [46.6, 11965.0], [46.7, 11965.0], [46.8, 11965.0], [46.9, 11974.0], [47.0, 11974.0], [47.1, 11974.0], [47.2, 11974.0], [47.3, 11974.0], [47.4, 11976.0], [47.5, 11976.0], [47.6, 11976.0], [47.7, 11976.0], [47.8, 11976.0], [47.9, 11976.0], [48.0, 11976.0], [48.1, 11976.0], [48.2, 11976.0], [48.3, 11978.0], [48.4, 11978.0], [48.5, 11978.0], [48.6, 11978.0], [48.7, 11978.0], [48.8, 11982.0], [48.9, 11982.0], [49.0, 11982.0], [49.1, 11982.0], [49.2, 11982.0], [49.3, 11986.0], [49.4, 11986.0], [49.5, 11986.0], [49.6, 11986.0], [49.7, 11986.0], [49.8, 11989.0], [49.9, 11989.0], [50.0, 11989.0], [50.1, 11989.0], [50.2, 11989.0], [50.3, 12046.0], [50.4, 12046.0], [50.5, 12046.0], [50.6, 12046.0], [50.7, 12046.0], [50.8, 12435.0], [50.9, 12435.0], [51.0, 12435.0], [51.1, 12435.0], [51.2, 12435.0], [51.3, 13462.0], [51.4, 13462.0], [51.5, 13462.0], [51.6, 13462.0], [51.7, 13462.0], [51.8, 14384.0], [51.9, 14384.0], [52.0, 14384.0], [52.1, 14384.0], [52.2, 14491.0], [52.3, 14491.0], [52.4, 14491.0], [52.5, 14491.0], [52.6, 14491.0], [52.7, 15403.0], [52.8, 15403.0], [52.9, 15403.0], [53.0, 15403.0], [53.1, 15403.0], [53.2, 16324.0], [53.3, 16324.0], [53.4, 16324.0], [53.5, 16324.0], [53.6, 16324.0], [53.7, 17353.0], [53.8, 17353.0], [53.9, 17353.0], [54.0, 17353.0], [54.1, 17353.0], [54.2, 17447.0], [54.3, 17447.0], [54.4, 17447.0], [54.5, 17447.0], [54.6, 17447.0], [54.7, 18271.0], [54.8, 18271.0], [54.9, 18271.0], [55.0, 18271.0], [55.1, 18271.0], [55.2, 19312.0], [55.3, 19312.0], [55.4, 19312.0], [55.5, 19312.0], [55.6, 19312.0], [55.7, 20210.0], [55.8, 20210.0], [55.9, 20210.0], [56.0, 20210.0], [56.1, 20367.0], [56.2, 20367.0], [56.3, 20367.0], [56.4, 20367.0], [56.5, 20367.0], [56.6, 21118.0], [56.7, 21118.0], [56.8, 21118.0], [56.9, 21118.0], [57.0, 21118.0], [57.1, 22451.0], [57.2, 22451.0], [57.3, 22451.0], [57.4, 22451.0], [57.5, 22451.0], [57.6, 23185.0], [57.7, 23185.0], [57.8, 23185.0], [57.9, 23185.0], [58.0, 23185.0], [58.1, 23289.0], [58.2, 23289.0], [58.3, 23289.0], [58.4, 23289.0], [58.5, 23289.0], [58.6, 23310.0], [58.7, 23310.0], [58.8, 23310.0], [58.9, 23310.0], [59.0, 23310.0], [59.1, 23346.0], [59.2, 23346.0], [59.3, 23346.0], [59.4, 23346.0], [59.5, 23346.0], [59.6, 23347.0], [59.7, 23347.0], [59.8, 23347.0], [59.9, 23347.0], [60.0, 23349.0], [60.1, 23349.0], [60.2, 23349.0], [60.3, 23349.0], [60.4, 23349.0], [60.5, 23367.0], [60.6, 23367.0], [60.7, 23367.0], [60.8, 23367.0], [60.9, 23367.0], [61.0, 23402.0], [61.1, 23402.0], [61.2, 23402.0], [61.3, 23402.0], [61.4, 23402.0], [61.5, 23442.0], [61.6, 23442.0], [61.7, 23442.0], [61.8, 23442.0], [61.9, 23442.0], [62.0, 23448.0], [62.1, 23448.0], [62.2, 23448.0], [62.3, 23448.0], [62.4, 23448.0], [62.5, 23469.0], [62.6, 23469.0], [62.7, 23469.0], [62.8, 23469.0], [62.9, 23469.0], [63.0, 23482.0], [63.1, 23482.0], [63.2, 23482.0], [63.3, 23482.0], [63.4, 23482.0], [63.5, 23486.0], [63.6, 23486.0], [63.7, 23486.0], [63.8, 23486.0], [63.9, 23486.0], [64.0, 23505.0], [64.1, 23505.0], [64.2, 23505.0], [64.3, 23505.0], [64.4, 23521.0], [64.5, 23521.0], [64.6, 23521.0], [64.7, 23521.0], [64.8, 23521.0], [64.9, 23552.0], [65.0, 23552.0], [65.1, 23552.0], [65.2, 23552.0], [65.3, 23552.0], [65.4, 23555.0], [65.5, 23555.0], [65.6, 23555.0], [65.7, 23555.0], [65.8, 23555.0], [65.9, 23555.0], [66.0, 23555.0], [66.1, 23555.0], [66.2, 23555.0], [66.3, 23555.0], [66.4, 23588.0], [66.5, 23588.0], [66.6, 23588.0], [66.7, 23588.0], [66.8, 23588.0], [66.9, 23657.0], [67.0, 23657.0], [67.1, 23657.0], [67.2, 23657.0], [67.3, 23657.0], [67.4, 23698.0], [67.5, 23698.0], [67.6, 23698.0], [67.7, 23698.0], [67.8, 23698.0], [67.9, 23749.0], [68.0, 23749.0], [68.1, 23749.0], [68.2, 23749.0], [68.3, 23757.0], [68.4, 23757.0], [68.5, 23757.0], [68.6, 23757.0], [68.7, 23757.0], [68.8, 23793.0], [68.9, 23793.0], [69.0, 23793.0], [69.1, 23793.0], [69.2, 23793.0], [69.3, 23859.0], [69.4, 23859.0], [69.5, 23859.0], [69.6, 23859.0], [69.7, 23859.0], [69.8, 23859.0], [69.9, 23859.0], [70.0, 23859.0], [70.1, 23859.0], [70.2, 23859.0], [70.3, 23861.0], [70.4, 23861.0], [70.5, 23861.0], [70.6, 23861.0], [70.7, 23861.0], [70.8, 23878.0], [70.9, 23878.0], [71.0, 23878.0], [71.1, 23878.0], [71.2, 23878.0], [71.3, 24074.0], [71.4, 24074.0], [71.5, 24074.0], [71.6, 24074.0], [71.7, 24074.0], [71.8, 24076.0], [71.9, 24076.0], [72.0, 24076.0], [72.1, 24076.0], [72.2, 24992.0], [72.3, 24992.0], [72.4, 24992.0], [72.5, 24992.0], [72.6, 24992.0], [72.7, 26069.0], [72.8, 26069.0], [72.9, 26069.0], [73.0, 26069.0], [73.1, 26069.0], [73.2, 26933.0], [73.3, 26933.0], [73.4, 26933.0], [73.5, 26933.0], [73.6, 26933.0], [73.7, 26966.0], [73.8, 26966.0], [73.9, 26966.0], [74.0, 26966.0], [74.1, 26966.0], [74.2, 27960.0], [74.3, 27960.0], [74.4, 27960.0], [74.5, 27960.0], [74.6, 27960.0], [74.7, 29088.0], [74.8, 29088.0], [74.9, 29088.0], [75.0, 29088.0], [75.1, 29088.0], [75.2, 30004.0], [75.3, 30004.0], [75.4, 30004.0], [75.5, 30004.0], [75.6, 30004.0], [75.7, 30925.0], [75.8, 30925.0], [75.9, 30925.0], [76.0, 30925.0], [76.1, 31947.0], [76.2, 31947.0], [76.3, 31947.0], [76.4, 31947.0], [76.5, 31947.0], [76.6, 33079.0], [76.7, 33079.0], [76.8, 33079.0], [76.9, 33079.0], [77.0, 33079.0], [77.1, 33993.0], [77.2, 33993.0], [77.3, 33993.0], [77.4, 33993.0], [77.5, 33993.0], [77.6, 35017.0], [77.7, 35017.0], [77.8, 35017.0], [77.9, 35017.0], [78.0, 35017.0], [78.1, 36139.0], [78.2, 36139.0], [78.3, 36139.0], [78.4, 36139.0], [78.5, 36139.0], [78.6, 37065.0], [78.7, 37065.0], [78.8, 37065.0], [78.9, 37065.0], [79.0, 37065.0], [79.1, 38100.0], [79.2, 38100.0], [79.3, 38100.0], [79.4, 38100.0], [79.5, 38100.0], [79.6, 39118.0], [79.7, 39118.0], [79.8, 39118.0], [79.9, 39118.0], [80.0, 40131.0], [80.1, 40131.0], [80.2, 40131.0], [80.3, 40131.0], [80.4, 40131.0], [80.5, 41138.0], [80.6, 41138.0], [80.7, 41138.0], [80.8, 41138.0], [80.9, 41138.0], [81.0, 42164.0], [81.1, 42164.0], [81.2, 42164.0], [81.3, 42164.0], [81.4, 42164.0], [81.5, 43186.0], [81.6, 43186.0], [81.7, 43186.0], [81.8, 43186.0], [81.9, 43186.0], [82.0, 44112.0], [82.1, 44112.0], [82.2, 44112.0], [82.3, 44112.0], [82.4, 44112.0], [82.5, 45137.0], [82.6, 45137.0], [82.7, 45137.0], [82.8, 45137.0], [82.9, 45137.0], [83.0, 46153.0], [83.1, 46153.0], [83.2, 46153.0], [83.3, 46153.0], [83.4, 46153.0], [83.5, 47149.0], [83.6, 47149.0], [83.7, 47149.0], [83.8, 47149.0], [83.9, 47149.0], [84.0, 48200.0], [84.1, 48200.0], [84.2, 48200.0], [84.3, 48200.0], [84.4, 49043.0], [84.5, 49043.0], [84.6, 49043.0], [84.7, 49043.0], [84.8, 49043.0], [84.9, 50098.0], [85.0, 50098.0], [85.1, 50098.0], [85.2, 50098.0], [85.3, 50098.0], [85.4, 51272.0], [85.5, 51272.0], [85.6, 51272.0], [85.7, 51272.0], [85.8, 51272.0], [85.9, 52419.0], [86.0, 52419.0], [86.1, 52419.0], [86.2, 52419.0], [86.3, 52419.0], [86.4, 53286.0], [86.5, 53286.0], [86.6, 53286.0], [86.7, 53286.0], [86.8, 53286.0], [86.9, 54045.0], [87.0, 54045.0], [87.1, 54045.0], [87.2, 54045.0], [87.3, 54045.0], [87.4, 54885.0], [87.5, 54885.0], [87.6, 54885.0], [87.7, 54885.0], [87.8, 54885.0], [87.9, 54907.0], [88.0, 54907.0], [88.1, 54907.0], [88.2, 54907.0], [88.3, 54922.0], [88.4, 54922.0], [88.5, 54922.0], [88.6, 54922.0], [88.7, 54922.0], [88.8, 55194.0], [88.9, 55194.0], [89.0, 55194.0], [89.1, 55194.0], [89.2, 55194.0], [89.3, 55966.0], [89.4, 55966.0], [89.5, 55966.0], [89.6, 55966.0], [89.7, 55966.0], [89.8, 56112.0], [89.9, 56112.0], [90.0, 56112.0], [90.1, 56112.0], [90.2, 56112.0], [90.3, 56158.0], [90.4, 56158.0], [90.5, 56158.0], [90.6, 56158.0], [90.7, 56158.0], [90.8, 56191.0], [90.9, 56191.0], [91.0, 56191.0], [91.1, 56191.0], [91.2, 56191.0], [91.3, 57124.0], [91.4, 57124.0], [91.5, 57124.0], [91.6, 57124.0], [91.7, 57124.0], [91.8, 57138.0], [91.9, 57138.0], [92.0, 57138.0], [92.1, 57138.0], [92.2, 57208.0], [92.3, 57208.0], [92.4, 57208.0], [92.5, 57208.0], [92.6, 57208.0], [92.7, 57213.0], [92.8, 57213.0], [92.9, 57213.0], [93.0, 57213.0], [93.1, 57213.0], [93.2, 58316.0], [93.3, 58316.0], [93.4, 58316.0], [93.5, 58316.0], [93.6, 58316.0], [93.7, 58368.0], [93.8, 58368.0], [93.9, 58368.0], [94.0, 58368.0], [94.1, 58368.0], [94.2, 58440.0], [94.3, 58440.0], [94.4, 58440.0], [94.5, 58440.0], [94.6, 58440.0], [94.7, 58609.0], [94.8, 58609.0], [94.9, 58609.0], [95.0, 58609.0], [95.1, 58609.0], [95.2, 59286.0], [95.3, 59286.0], [95.4, 59286.0], [95.5, 59286.0], [95.6, 59286.0], [95.7, 59460.0], [95.8, 59460.0], [95.9, 59460.0], [96.0, 59460.0], [96.1, 59551.0], [96.2, 59551.0], [96.3, 59551.0], [96.4, 59551.0], [96.5, 59551.0], [96.6, 59578.0], [96.7, 59578.0], [96.8, 59578.0], [96.9, 59578.0], [97.0, 59578.0], [97.1, 60318.0], [97.2, 60318.0], [97.3, 60318.0], [97.4, 60318.0], [97.5, 60318.0], [97.6, 60365.0], [97.7, 60365.0], [97.8, 60365.0], [97.9, 60365.0], [98.0, 60365.0], [98.1, 60517.0], [98.2, 60517.0], [98.3, 60517.0], [98.4, 60517.0], [98.5, 60517.0], [98.6, 60673.0], [98.7, 60673.0], [98.8, 60673.0], [98.9, 60673.0], [99.0, 60673.0], [99.1, 61337.0], [99.2, 61337.0], [99.3, 61337.0], [99.4, 61337.0], [99.5, 61337.0], [99.6, 62066.0], [99.7, 62066.0], [99.8, 62066.0], [99.9, 62066.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 3400.0, "maxY": 13.0, "series": [{"data": [[33900.0, 1.0], [36100.0, 1.0], [38100.0, 1.0], [39100.0, 1.0], [40100.0, 1.0], [41100.0, 1.0], [42100.0, 1.0], [43100.0, 1.0], [44100.0, 1.0], [45100.0, 1.0], [46100.0, 1.0], [47100.0, 1.0], [54900.0, 2.0], [55100.0, 1.0], [55900.0, 1.0], [56100.0, 3.0], [57100.0, 2.0], [58300.0, 2.0], [59500.0, 2.0], [60300.0, 2.0], [60500.0, 1.0], [61300.0, 1.0], [3400.0, 8.0], [3500.0, 7.0], [3600.0, 13.0], [3700.0, 8.0], [3800.0, 4.0], [4600.0, 1.0], [5800.0, 7.0], [5700.0, 3.0], [5900.0, 7.0], [6000.0, 1.0], [6200.0, 3.0], [6700.0, 1.0], [6800.0, 2.0], [7000.0, 1.0], [7700.0, 2.0], [7800.0, 2.0], [7900.0, 1.0], [8200.0, 1.0], [8700.0, 1.0], [10000.0, 1.0], [10800.0, 1.0], [10900.0, 1.0], [11700.0, 7.0], [11500.0, 1.0], [11600.0, 3.0], [11900.0, 11.0], [12000.0, 1.0], [11800.0, 5.0], [12400.0, 1.0], [13400.0, 1.0], [14300.0, 1.0], [14400.0, 1.0], [15400.0, 1.0], [16300.0, 1.0], [17300.0, 1.0], [17400.0, 1.0], [18200.0, 1.0], [19300.0, 1.0], [20200.0, 1.0], [20300.0, 1.0], [21100.0, 1.0], [22400.0, 1.0], [23200.0, 1.0], [23300.0, 5.0], [23500.0, 6.0], [23400.0, 6.0], [23100.0, 1.0], [23600.0, 2.0], [23800.0, 4.0], [23700.0, 3.0], [24000.0, 2.0], [24900.0, 1.0], [26000.0, 1.0], [26900.0, 2.0], [27900.0, 1.0], [29000.0, 1.0], [30000.0, 1.0], [30900.0, 1.0], [31900.0, 1.0], [33000.0, 1.0], [35000.0, 1.0], [37000.0, 1.0], [48200.0, 1.0], [49000.0, 1.0], [50000.0, 1.0], [51200.0, 1.0], [52400.0, 1.0], [53200.0, 1.0], [54000.0, 1.0], [54800.0, 1.0], [57200.0, 2.0], [58600.0, 1.0], [58400.0, 1.0], [59200.0, 1.0], [59400.0, 1.0], [60600.0, 1.0], [62000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 62000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 205.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 205.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 205.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.7499999999999996, "minX": 1.58916852E12, "maxY": 51.29166666666666, "series": [{"data": [[1.58916858E12, 15.421052631578943], [1.58916864E12, 51.29166666666666], [1.5891687E12, 15.0], [1.58916852E12, 2.7499999999999996]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5891687E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 6157.173913043478, "minX": 1.0, "maxY": 60673.0, "series": [{"data": [[2.0, 8774.272727272728], [3.0, 60517.0], [4.0, 6157.173913043478], [5.0, 60673.0], [6.0, 60365.0], [7.0, 59578.0], [8.0, 8152.120000000001], [9.0, 59551.0], [10.0, 59460.0], [11.0, 58440.0], [12.0, 58368.0], [13.0, 58609.0], [14.0, 58316.0], [15.0, 57208.0], [16.0, 11105.821428571426], [17.0, 57213.0], [18.0, 57124.0], [19.0, 56158.0], [20.0, 56112.0], [21.0, 56191.0], [22.0, 55966.0], [23.0, 54907.0], [24.0, 54885.0], [25.0, 55194.0], [26.0, 54922.0], [27.0, 54045.0], [28.0, 53286.0], [29.0, 52419.0], [30.0, 51272.0], [31.0, 50098.0], [32.0, 14687.962962962965], [33.0, 48200.0], [35.0, 46153.0], [34.0, 47149.0], [37.0, 44112.0], [36.0, 45137.0], [39.0, 42164.0], [38.0, 43186.0], [41.0, 40131.0], [40.0, 41138.0], [43.0, 38100.0], [42.0, 39118.0], [45.0, 36139.0], [44.0, 37065.0], [47.0, 33993.0], [46.0, 35017.0], [49.0, 31947.0], [48.0, 33079.0], [51.0, 30004.0], [50.0, 30925.0], [53.0, 27960.0], [52.0, 29088.0], [55.0, 26933.0], [54.0, 26966.0], [57.0, 24992.0], [56.0, 26069.0], [59.0, 24074.0], [58.0, 24076.0], [61.0, 23757.0], [60.0, 23793.0], [63.0, 23698.0], [62.0, 23878.0], [64.0, 23154.607142857145], [1.0, 13531.666666666668]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[26.22926829268293, 21453.219512195123]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 64.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 145.6, "minX": 1.58916852E12, "maxY": 80002.53333333334, "series": [{"data": [[1.58916858E12, 395.2], [1.58916864E12, 374.4], [1.5891687E12, 150.8], [1.58916852E12, 145.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58916858E12, 80002.53333333334], [1.58916864E12, 75793.5], [1.5891687E12, 30529.166666666668], [1.58916852E12, 29475.633333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5891687E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3654.1428571428573, "minX": 1.58916852E12, "maxY": 57574.20689655172, "series": [{"data": [[1.58916858E12, 8161.539473684209], [1.58916864E12, 27856.45833333334], [1.5891687E12, 57574.20689655172], [1.58916852E12, 3654.1428571428573]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5891687E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3653.9285714285716, "minX": 1.58916852E12, "maxY": 57574.20689655172, "series": [{"data": [[1.58916858E12, 8161.486842105262], [1.58916864E12, 27856.402777777785], [1.5891687E12, 57574.20689655172], [1.58916852E12, 3653.9285714285716]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5891687E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.4210526315789476, "minX": 1.58916852E12, "maxY": 4.7638888888888875, "series": [{"data": [[1.58916858E12, 1.4210526315789476], [1.58916864E12, 4.7638888888888875], [1.5891687E12, 2.275862068965518], [1.58916852E12, 2.607142857142857]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5891687E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3406.0, "minX": 1.58916852E12, "maxY": 62066.0, "series": [{"data": [[1.58916858E12, 12046.0], [1.58916864E12, 51272.0], [1.5891687E12, 62066.0], [1.58916852E12, 4610.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58916858E12, 3668.0], [1.58916864E12, 12435.0], [1.5891687E12, 52419.0], [1.58916852E12, 3406.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58916858E12, 11974.6], [1.58916864E12, 44829.5], [1.5891687E12, 60673.0], [1.58916852E12, 3838.7000000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58916858E12, 12046.0], [1.58916864E12, 51272.0], [1.5891687E12, 62066.0], [1.58916852E12, 4610.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58916858E12, 11982.6], [1.58916864E12, 48495.049999999996], [1.5891687E12, 61701.5], [1.58916852E12, 4281.949999999998]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5891687E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 6061.0, "minX": 1.0, "maxY": 23555.0, "series": [{"data": [[1.0, 23555.0], [2.0, 15922.0], [3.0, 6061.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 6061.0, "minX": 1.0, "maxY": 23554.0, "series": [{"data": [[1.0, 23554.0], [2.0, 15922.0], [3.0, 6061.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5333333333333333, "minX": 1.58916852E12, "maxY": 1.7333333333333334, "series": [{"data": [[1.58916858E12, 1.7333333333333334], [1.58916864E12, 1.15], [1.58916852E12, 0.5333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58916864E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.58916852E12, "maxY": 1.2666666666666666, "series": [{"data": [[1.58916858E12, 1.2666666666666666], [1.58916864E12, 1.2], [1.5891687E12, 0.48333333333333334], [1.58916852E12, 0.4666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5891687E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.58916852E12, "maxY": 1.2666666666666666, "series": [{"data": [[1.58916858E12, 1.2666666666666666], [1.58916864E12, 1.2], [1.5891687E12, 0.48333333333333334], [1.58916852E12, 0.4666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5891687E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.58916852E12, "maxY": 1.2666666666666666, "series": [{"data": [[1.58916858E12, 1.2666666666666666], [1.58916864E12, 1.2], [1.5891687E12, 0.48333333333333334], [1.58916852E12, 0.4666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5891687E12, "title": "Total Transactions Per Second"}},
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

