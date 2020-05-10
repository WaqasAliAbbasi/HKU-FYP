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
        data: {"result": {"minY": 3275.0, "minX": 0.0, "maxY": 23451.0, "series": [{"data": [[0.0, 3275.0], [0.1, 3275.0], [0.2, 3275.0], [0.3, 3275.0], [0.4, 3275.0], [0.5, 3275.0], [0.6, 3275.0], [0.7, 3275.0], [0.8, 3343.0], [0.9, 3343.0], [1.0, 3343.0], [1.1, 3343.0], [1.2, 3343.0], [1.3, 3343.0], [1.4, 3343.0], [1.5, 3343.0], [1.6, 3362.0], [1.7, 3362.0], [1.8, 3362.0], [1.9, 3362.0], [2.0, 3362.0], [2.1, 3362.0], [2.2, 3362.0], [2.3, 3377.0], [2.4, 3377.0], [2.5, 3377.0], [2.6, 3377.0], [2.7, 3377.0], [2.8, 3377.0], [2.9, 3377.0], [3.0, 3377.0], [3.1, 3378.0], [3.2, 3378.0], [3.3, 3378.0], [3.4, 3378.0], [3.5, 3378.0], [3.6, 3378.0], [3.7, 3378.0], [3.8, 3380.0], [3.9, 3380.0], [4.0, 3380.0], [4.1, 3380.0], [4.2, 3380.0], [4.3, 3380.0], [4.4, 3380.0], [4.5, 3380.0], [4.6, 3381.0], [4.7, 3381.0], [4.8, 3381.0], [4.9, 3381.0], [5.0, 3381.0], [5.1, 3381.0], [5.2, 3381.0], [5.3, 3381.0], [5.4, 3481.0], [5.5, 3481.0], [5.6, 3481.0], [5.7, 3481.0], [5.8, 3481.0], [5.9, 3481.0], [6.0, 3481.0], [6.1, 3512.0], [6.2, 3512.0], [6.3, 3512.0], [6.4, 3512.0], [6.5, 3512.0], [6.6, 3512.0], [6.7, 3512.0], [6.8, 3512.0], [6.9, 3582.0], [7.0, 3582.0], [7.1, 3582.0], [7.2, 3582.0], [7.3, 3582.0], [7.4, 3582.0], [7.5, 3582.0], [7.6, 3583.0], [7.7, 3583.0], [7.8, 3583.0], [7.9, 3583.0], [8.0, 3583.0], [8.1, 3583.0], [8.2, 3583.0], [8.3, 3583.0], [8.4, 3583.0], [8.5, 3583.0], [8.6, 3583.0], [8.7, 3583.0], [8.8, 3583.0], [8.9, 3583.0], [9.0, 3583.0], [9.1, 3584.0], [9.2, 3584.0], [9.3, 3584.0], [9.4, 3584.0], [9.5, 3584.0], [9.6, 3584.0], [9.7, 3584.0], [9.8, 3584.0], [9.9, 3584.0], [10.0, 3584.0], [10.1, 3584.0], [10.2, 3584.0], [10.3, 3584.0], [10.4, 3584.0], [10.5, 3584.0], [10.6, 3584.0], [10.7, 3587.0], [10.8, 3587.0], [10.9, 3587.0], [11.0, 3587.0], [11.1, 3587.0], [11.2, 3587.0], [11.3, 3587.0], [11.4, 3684.0], [11.5, 3684.0], [11.6, 3684.0], [11.7, 3684.0], [11.8, 3684.0], [11.9, 3684.0], [12.0, 3684.0], [12.1, 3684.0], [12.2, 3686.0], [12.3, 3686.0], [12.4, 3686.0], [12.5, 3686.0], [12.6, 3686.0], [12.7, 3686.0], [12.8, 3686.0], [12.9, 3686.0], [13.0, 3686.0], [13.1, 3686.0], [13.2, 3686.0], [13.3, 3686.0], [13.4, 3686.0], [13.5, 3686.0], [13.6, 3686.0], [13.7, 4123.0], [13.8, 4123.0], [13.9, 4123.0], [14.0, 4123.0], [14.1, 4123.0], [14.2, 4123.0], [14.3, 4123.0], [14.4, 5016.0], [14.5, 5016.0], [14.6, 5016.0], [14.7, 5016.0], [14.8, 5016.0], [14.9, 5016.0], [15.0, 5016.0], [15.1, 5016.0], [15.2, 5230.0], [15.3, 5230.0], [15.4, 5230.0], [15.5, 5230.0], [15.6, 5230.0], [15.7, 5230.0], [15.8, 5230.0], [15.9, 5230.0], [16.0, 5324.0], [16.1, 5324.0], [16.2, 5324.0], [16.3, 5324.0], [16.4, 5324.0], [16.5, 5324.0], [16.6, 5324.0], [16.7, 5528.0], [16.8, 5528.0], [16.9, 5528.0], [17.0, 5528.0], [17.1, 5528.0], [17.2, 5528.0], [17.3, 5528.0], [17.4, 5528.0], [17.5, 5528.0], [17.6, 5528.0], [17.7, 5528.0], [17.8, 5528.0], [17.9, 5528.0], [18.0, 5528.0], [18.1, 5528.0], [18.2, 5558.0], [18.3, 5558.0], [18.4, 5558.0], [18.5, 5558.0], [18.6, 5558.0], [18.7, 5558.0], [18.8, 5558.0], [18.9, 5558.0], [19.0, 5602.0], [19.1, 5602.0], [19.2, 5602.0], [19.3, 5602.0], [19.4, 5602.0], [19.5, 5602.0], [19.6, 5602.0], [19.7, 5604.0], [19.8, 5604.0], [19.9, 5604.0], [20.0, 5604.0], [20.1, 5604.0], [20.2, 5604.0], [20.3, 5604.0], [20.4, 5604.0], [20.5, 5630.0], [20.6, 5630.0], [20.7, 5630.0], [20.8, 5630.0], [20.9, 5630.0], [21.0, 5630.0], [21.1, 5630.0], [21.2, 5630.0], [21.3, 5633.0], [21.4, 5633.0], [21.5, 5633.0], [21.6, 5633.0], [21.7, 5633.0], [21.8, 5633.0], [21.9, 5633.0], [22.0, 5662.0], [22.1, 5662.0], [22.2, 5662.0], [22.3, 5662.0], [22.4, 5662.0], [22.5, 5662.0], [22.6, 5662.0], [22.7, 5662.0], [22.8, 5702.0], [22.9, 5702.0], [23.0, 5702.0], [23.1, 5702.0], [23.2, 5702.0], [23.3, 5702.0], [23.4, 5702.0], [23.5, 5828.0], [23.6, 5828.0], [23.7, 5828.0], [23.8, 5828.0], [23.9, 5828.0], [24.0, 5828.0], [24.1, 5828.0], [24.2, 5828.0], [24.3, 5938.0], [24.4, 5938.0], [24.5, 5938.0], [24.6, 5938.0], [24.7, 5938.0], [24.8, 5938.0], [24.9, 5938.0], [25.0, 5938.0], [25.1, 6038.0], [25.2, 6038.0], [25.3, 6038.0], [25.4, 6038.0], [25.5, 6038.0], [25.6, 6038.0], [25.7, 6038.0], [25.8, 6623.0], [25.9, 6623.0], [26.0, 6623.0], [26.1, 6623.0], [26.2, 6623.0], [26.3, 6623.0], [26.4, 6623.0], [26.5, 6623.0], [26.6, 7542.0], [26.7, 7542.0], [26.8, 7542.0], [26.9, 7542.0], [27.0, 7542.0], [27.1, 7542.0], [27.2, 7542.0], [27.3, 9490.0], [27.4, 9490.0], [27.5, 9490.0], [27.6, 9490.0], [27.7, 9490.0], [27.8, 9490.0], [27.9, 9490.0], [28.0, 9490.0], [28.1, 10410.0], [28.2, 10410.0], [28.3, 10410.0], [28.4, 10410.0], [28.5, 10410.0], [28.6, 10410.0], [28.7, 10410.0], [28.8, 11367.0], [28.9, 11367.0], [29.0, 11367.0], [29.1, 11367.0], [29.2, 11367.0], [29.3, 11367.0], [29.4, 11367.0], [29.5, 11367.0], [29.6, 11438.0], [29.7, 11438.0], [29.8, 11438.0], [29.9, 11438.0], [30.0, 11438.0], [30.1, 11438.0], [30.2, 11438.0], [30.3, 11438.0], [30.4, 11442.0], [30.5, 11442.0], [30.6, 11442.0], [30.7, 11442.0], [30.8, 11442.0], [30.9, 11442.0], [31.0, 11442.0], [31.1, 11446.0], [31.2, 11446.0], [31.3, 11446.0], [31.4, 11446.0], [31.5, 11446.0], [31.6, 11446.0], [31.7, 11446.0], [31.8, 11446.0], [31.9, 11454.0], [32.0, 11454.0], [32.1, 11454.0], [32.2, 11454.0], [32.3, 11454.0], [32.4, 11454.0], [32.5, 11454.0], [32.6, 11464.0], [32.7, 11464.0], [32.8, 11464.0], [32.9, 11464.0], [33.0, 11464.0], [33.1, 11464.0], [33.2, 11464.0], [33.3, 11464.0], [33.4, 11466.0], [33.5, 11466.0], [33.6, 11466.0], [33.7, 11466.0], [33.8, 11466.0], [33.9, 11466.0], [34.0, 11466.0], [34.1, 11480.0], [34.2, 11480.0], [34.3, 11480.0], [34.4, 11480.0], [34.5, 11480.0], [34.6, 11480.0], [34.7, 11480.0], [34.8, 11480.0], [34.9, 11483.0], [35.0, 11483.0], [35.1, 11483.0], [35.2, 11483.0], [35.3, 11483.0], [35.4, 11483.0], [35.5, 11483.0], [35.6, 11483.0], [35.7, 11494.0], [35.8, 11494.0], [35.9, 11494.0], [36.0, 11494.0], [36.1, 11494.0], [36.2, 11494.0], [36.3, 11494.0], [36.4, 11567.0], [36.5, 11567.0], [36.6, 11567.0], [36.7, 11567.0], [36.8, 11567.0], [36.9, 11567.0], [37.0, 11567.0], [37.1, 11567.0], [37.2, 11571.0], [37.3, 11571.0], [37.4, 11571.0], [37.5, 11571.0], [37.6, 11571.0], [37.7, 11571.0], [37.8, 11571.0], [37.9, 11573.0], [38.0, 11573.0], [38.1, 11573.0], [38.2, 11573.0], [38.3, 11573.0], [38.4, 11573.0], [38.5, 11573.0], [38.6, 11573.0], [38.7, 11800.0], [38.8, 11800.0], [38.9, 11800.0], [39.0, 11800.0], [39.1, 11800.0], [39.2, 11800.0], [39.3, 11800.0], [39.4, 12741.0], [39.5, 12741.0], [39.6, 12741.0], [39.7, 12741.0], [39.8, 12741.0], [39.9, 12741.0], [40.0, 12741.0], [40.1, 12741.0], [40.2, 13655.0], [40.3, 13655.0], [40.4, 13655.0], [40.5, 13655.0], [40.6, 13655.0], [40.7, 13655.0], [40.8, 13655.0], [40.9, 13655.0], [41.0, 15601.0], [41.1, 15601.0], [41.2, 15601.0], [41.3, 15601.0], [41.4, 15601.0], [41.5, 15601.0], [41.6, 15601.0], [41.7, 16523.0], [41.8, 16523.0], [41.9, 16523.0], [42.0, 16523.0], [42.1, 16523.0], [42.2, 16523.0], [42.3, 16523.0], [42.4, 16523.0], [42.5, 18508.0], [42.6, 18508.0], [42.7, 18508.0], [42.8, 18508.0], [42.9, 18508.0], [43.0, 18508.0], [43.1, 18508.0], [43.2, 19379.0], [43.3, 19379.0], [43.4, 19379.0], [43.5, 19379.0], [43.6, 19379.0], [43.7, 19379.0], [43.8, 19379.0], [43.9, 19379.0], [44.0, 21372.0], [44.1, 21372.0], [44.2, 21372.0], [44.3, 21372.0], [44.4, 21372.0], [44.5, 21372.0], [44.6, 21372.0], [44.7, 21605.0], [44.8, 21605.0], [44.9, 21605.0], [45.0, 21605.0], [45.1, 21605.0], [45.2, 21605.0], [45.3, 21605.0], [45.4, 21605.0], [45.5, 21700.0], [45.6, 21700.0], [45.7, 21700.0], [45.8, 21700.0], [45.9, 21700.0], [46.0, 21700.0], [46.1, 21700.0], [46.2, 21700.0], [46.3, 21706.0], [46.4, 21706.0], [46.5, 21706.0], [46.6, 21706.0], [46.7, 21706.0], [46.8, 21706.0], [46.9, 21706.0], [47.0, 21707.0], [47.1, 21707.0], [47.2, 21707.0], [47.3, 21707.0], [47.4, 21707.0], [47.5, 21707.0], [47.6, 21707.0], [47.7, 21707.0], [47.8, 21709.0], [47.9, 21709.0], [48.0, 21709.0], [48.1, 21709.0], [48.2, 21709.0], [48.3, 21709.0], [48.4, 21709.0], [48.5, 21711.0], [48.6, 21711.0], [48.7, 21711.0], [48.8, 21711.0], [48.9, 21711.0], [49.0, 21711.0], [49.1, 21711.0], [49.2, 21711.0], [49.3, 21724.0], [49.4, 21724.0], [49.5, 21724.0], [49.6, 21724.0], [49.7, 21724.0], [49.8, 21724.0], [49.9, 21724.0], [50.0, 21724.0], [50.1, 21786.0], [50.2, 21786.0], [50.3, 21786.0], [50.4, 21786.0], [50.5, 21786.0], [50.6, 21786.0], [50.7, 21786.0], [50.8, 21793.0], [50.9, 21793.0], [51.0, 21793.0], [51.1, 21793.0], [51.2, 21793.0], [51.3, 21793.0], [51.4, 21793.0], [51.5, 21793.0], [51.6, 21801.0], [51.7, 21801.0], [51.8, 21801.0], [51.9, 21801.0], [52.0, 21801.0], [52.1, 21801.0], [52.2, 21801.0], [52.3, 21808.0], [52.4, 21808.0], [52.5, 21808.0], [52.6, 21808.0], [52.7, 21808.0], [52.8, 21808.0], [52.9, 21808.0], [53.0, 21808.0], [53.1, 21808.0], [53.2, 21808.0], [53.3, 21808.0], [53.4, 21808.0], [53.5, 21808.0], [53.6, 21808.0], [53.7, 21808.0], [53.8, 21808.0], [53.9, 21808.0], [54.0, 21808.0], [54.1, 21808.0], [54.2, 21808.0], [54.3, 21808.0], [54.4, 21808.0], [54.5, 21808.0], [54.6, 21809.0], [54.7, 21809.0], [54.8, 21809.0], [54.9, 21809.0], [55.0, 21809.0], [55.1, 21809.0], [55.2, 21809.0], [55.3, 21809.0], [55.4, 21811.0], [55.5, 21811.0], [55.6, 21811.0], [55.7, 21811.0], [55.8, 21811.0], [55.9, 21811.0], [56.0, 21811.0], [56.1, 21811.0], [56.2, 21811.0], [56.3, 21811.0], [56.4, 21811.0], [56.5, 21811.0], [56.6, 21811.0], [56.7, 21811.0], [56.8, 21811.0], [56.9, 21812.0], [57.0, 21812.0], [57.1, 21812.0], [57.2, 21812.0], [57.3, 21812.0], [57.4, 21812.0], [57.5, 21812.0], [57.6, 21813.0], [57.7, 21813.0], [57.8, 21813.0], [57.9, 21813.0], [58.0, 21813.0], [58.1, 21813.0], [58.2, 21813.0], [58.3, 21813.0], [58.4, 21813.0], [58.5, 21813.0], [58.6, 21813.0], [58.7, 21813.0], [58.8, 21813.0], [58.9, 21813.0], [59.0, 21813.0], [59.1, 21815.0], [59.2, 21815.0], [59.3, 21815.0], [59.4, 21815.0], [59.5, 21815.0], [59.6, 21815.0], [59.7, 21815.0], [59.8, 21815.0], [59.9, 21819.0], [60.0, 21819.0], [60.1, 21819.0], [60.2, 21819.0], [60.3, 21819.0], [60.4, 21819.0], [60.5, 21819.0], [60.6, 21819.0], [60.7, 21823.0], [60.8, 21823.0], [60.9, 21823.0], [61.0, 21823.0], [61.1, 21823.0], [61.2, 21823.0], [61.3, 21823.0], [61.4, 21824.0], [61.5, 21824.0], [61.6, 21824.0], [61.7, 21824.0], [61.8, 21824.0], [61.9, 21824.0], [62.0, 21824.0], [62.1, 21824.0], [62.2, 21895.0], [62.3, 21895.0], [62.4, 21895.0], [62.5, 21895.0], [62.6, 21895.0], [62.7, 21895.0], [62.8, 21895.0], [62.9, 21896.0], [63.0, 21896.0], [63.1, 21896.0], [63.2, 21896.0], [63.3, 21896.0], [63.4, 21896.0], [63.5, 21896.0], [63.6, 21896.0], [63.7, 21905.0], [63.8, 21905.0], [63.9, 21905.0], [64.0, 21905.0], [64.1, 21905.0], [64.2, 21905.0], [64.3, 21905.0], [64.4, 21917.0], [64.5, 21917.0], [64.6, 21917.0], [64.7, 21917.0], [64.8, 21917.0], [64.9, 21917.0], [65.0, 21917.0], [65.1, 21917.0], [65.2, 22002.0], [65.3, 22002.0], [65.4, 22002.0], [65.5, 22002.0], [65.6, 22002.0], [65.7, 22002.0], [65.8, 22002.0], [65.9, 22002.0], [66.0, 22010.0], [66.1, 22010.0], [66.2, 22010.0], [66.3, 22010.0], [66.4, 22010.0], [66.5, 22010.0], [66.6, 22010.0], [66.7, 22011.0], [66.8, 22011.0], [66.9, 22011.0], [67.0, 22011.0], [67.1, 22011.0], [67.2, 22011.0], [67.3, 22011.0], [67.4, 22011.0], [67.5, 22017.0], [67.6, 22017.0], [67.7, 22017.0], [67.8, 22017.0], [67.9, 22017.0], [68.0, 22017.0], [68.1, 22017.0], [68.2, 22017.0], [68.3, 22017.0], [68.4, 22017.0], [68.5, 22017.0], [68.6, 22017.0], [68.7, 22017.0], [68.8, 22017.0], [68.9, 22017.0], [69.0, 22019.0], [69.1, 22019.0], [69.2, 22019.0], [69.3, 22019.0], [69.4, 22019.0], [69.5, 22019.0], [69.6, 22019.0], [69.7, 22023.0], [69.8, 22023.0], [69.9, 22023.0], [70.0, 22023.0], [70.1, 22023.0], [70.2, 22023.0], [70.3, 22023.0], [70.4, 22023.0], [70.5, 22034.0], [70.6, 22034.0], [70.7, 22034.0], [70.8, 22034.0], [70.9, 22034.0], [71.0, 22034.0], [71.1, 22034.0], [71.2, 22034.0], [71.3, 22038.0], [71.4, 22038.0], [71.5, 22038.0], [71.6, 22038.0], [71.7, 22038.0], [71.8, 22038.0], [71.9, 22038.0], [72.0, 22065.0], [72.1, 22065.0], [72.2, 22065.0], [72.3, 22065.0], [72.4, 22065.0], [72.5, 22065.0], [72.6, 22065.0], [72.7, 22065.0], [72.8, 22089.0], [72.9, 22089.0], [73.0, 22089.0], [73.1, 22089.0], [73.2, 22089.0], [73.3, 22089.0], [73.4, 22089.0], [73.5, 22095.0], [73.6, 22095.0], [73.7, 22095.0], [73.8, 22095.0], [73.9, 22095.0], [74.0, 22095.0], [74.1, 22095.0], [74.2, 22095.0], [74.3, 22118.0], [74.4, 22118.0], [74.5, 22118.0], [74.6, 22118.0], [74.7, 22118.0], [74.8, 22118.0], [74.9, 22118.0], [75.0, 22118.0], [75.1, 22118.0], [75.2, 22118.0], [75.3, 22118.0], [75.4, 22118.0], [75.5, 22118.0], [75.6, 22118.0], [75.7, 22118.0], [75.8, 22122.0], [75.9, 22122.0], [76.0, 22122.0], [76.1, 22122.0], [76.2, 22122.0], [76.3, 22122.0], [76.4, 22122.0], [76.5, 22122.0], [76.6, 22135.0], [76.7, 22135.0], [76.8, 22135.0], [76.9, 22135.0], [77.0, 22135.0], [77.1, 22135.0], [77.2, 22135.0], [77.3, 22184.0], [77.4, 22184.0], [77.5, 22184.0], [77.6, 22184.0], [77.7, 22184.0], [77.8, 22184.0], [77.9, 22184.0], [78.0, 22184.0], [78.1, 22221.0], [78.2, 22221.0], [78.3, 22221.0], [78.4, 22221.0], [78.5, 22221.0], [78.6, 22221.0], [78.7, 22221.0], [78.8, 22222.0], [78.9, 22222.0], [79.0, 22222.0], [79.1, 22222.0], [79.2, 22222.0], [79.3, 22222.0], [79.4, 22222.0], [79.5, 22222.0], [79.6, 22250.0], [79.7, 22250.0], [79.8, 22250.0], [79.9, 22250.0], [80.0, 22250.0], [80.1, 22250.0], [80.2, 22250.0], [80.3, 22250.0], [80.4, 22258.0], [80.5, 22258.0], [80.6, 22258.0], [80.7, 22258.0], [80.8, 22258.0], [80.9, 22258.0], [81.0, 22258.0], [81.1, 22272.0], [81.2, 22272.0], [81.3, 22272.0], [81.4, 22272.0], [81.5, 22272.0], [81.6, 22272.0], [81.7, 22272.0], [81.8, 22272.0], [81.9, 22298.0], [82.0, 22298.0], [82.1, 22298.0], [82.2, 22298.0], [82.3, 22298.0], [82.4, 22298.0], [82.5, 22298.0], [82.6, 22424.0], [82.7, 22424.0], [82.8, 22424.0], [82.9, 22424.0], [83.0, 22424.0], [83.1, 22424.0], [83.2, 22424.0], [83.3, 22424.0], [83.4, 22439.0], [83.5, 22439.0], [83.6, 22439.0], [83.7, 22439.0], [83.8, 22439.0], [83.9, 22439.0], [84.0, 22439.0], [84.1, 22501.0], [84.2, 22501.0], [84.3, 22501.0], [84.4, 22501.0], [84.5, 22501.0], [84.6, 22501.0], [84.7, 22501.0], [84.8, 22501.0], [84.9, 22526.0], [85.0, 22526.0], [85.1, 22526.0], [85.2, 22526.0], [85.3, 22526.0], [85.4, 22526.0], [85.5, 22526.0], [85.6, 22526.0], [85.7, 22601.0], [85.8, 22601.0], [85.9, 22601.0], [86.0, 22601.0], [86.1, 22601.0], [86.2, 22601.0], [86.3, 22601.0], [86.4, 22733.0], [86.5, 22733.0], [86.6, 22733.0], [86.7, 22733.0], [86.8, 22733.0], [86.9, 22733.0], [87.0, 22733.0], [87.1, 22733.0], [87.2, 22834.0], [87.3, 22834.0], [87.4, 22834.0], [87.5, 22834.0], [87.6, 22834.0], [87.7, 22834.0], [87.8, 22834.0], [87.9, 22899.0], [88.0, 22899.0], [88.1, 22899.0], [88.2, 22899.0], [88.3, 22899.0], [88.4, 22899.0], [88.5, 22899.0], [88.6, 22899.0], [88.7, 22912.0], [88.8, 22912.0], [88.9, 22912.0], [89.0, 22912.0], [89.1, 22912.0], [89.2, 22912.0], [89.3, 22912.0], [89.4, 22937.0], [89.5, 22937.0], [89.6, 22937.0], [89.7, 22937.0], [89.8, 22937.0], [89.9, 22937.0], [90.0, 22937.0], [90.1, 22937.0], [90.2, 23025.0], [90.3, 23025.0], [90.4, 23025.0], [90.5, 23025.0], [90.6, 23025.0], [90.7, 23025.0], [90.8, 23025.0], [90.9, 23025.0], [91.0, 23041.0], [91.1, 23041.0], [91.2, 23041.0], [91.3, 23041.0], [91.4, 23041.0], [91.5, 23041.0], [91.6, 23041.0], [91.7, 23041.0], [91.8, 23041.0], [91.9, 23041.0], [92.0, 23041.0], [92.1, 23041.0], [92.2, 23041.0], [92.3, 23041.0], [92.4, 23041.0], [92.5, 23165.0], [92.6, 23165.0], [92.7, 23165.0], [92.8, 23165.0], [92.9, 23165.0], [93.0, 23165.0], [93.1, 23165.0], [93.2, 23176.0], [93.3, 23176.0], [93.4, 23176.0], [93.5, 23176.0], [93.6, 23176.0], [93.7, 23176.0], [93.8, 23176.0], [93.9, 23176.0], [94.0, 23244.0], [94.1, 23244.0], [94.2, 23244.0], [94.3, 23244.0], [94.4, 23244.0], [94.5, 23244.0], [94.6, 23244.0], [94.7, 23246.0], [94.8, 23246.0], [94.9, 23246.0], [95.0, 23246.0], [95.1, 23246.0], [95.2, 23246.0], [95.3, 23246.0], [95.4, 23246.0], [95.5, 23331.0], [95.6, 23331.0], [95.7, 23331.0], [95.8, 23331.0], [95.9, 23331.0], [96.0, 23331.0], [96.1, 23331.0], [96.2, 23331.0], [96.3, 23349.0], [96.4, 23349.0], [96.5, 23349.0], [96.6, 23349.0], [96.7, 23349.0], [96.8, 23349.0], [96.9, 23349.0], [97.0, 23362.0], [97.1, 23362.0], [97.2, 23362.0], [97.3, 23362.0], [97.4, 23362.0], [97.5, 23362.0], [97.6, 23362.0], [97.7, 23362.0], [97.8, 23399.0], [97.9, 23399.0], [98.0, 23399.0], [98.1, 23399.0], [98.2, 23399.0], [98.3, 23399.0], [98.4, 23399.0], [98.5, 23448.0], [98.6, 23448.0], [98.7, 23448.0], [98.8, 23448.0], [98.9, 23448.0], [99.0, 23448.0], [99.1, 23448.0], [99.2, 23448.0], [99.3, 23451.0], [99.4, 23451.0], [99.5, 23451.0], [99.6, 23451.0], [99.7, 23451.0], [99.8, 23451.0], [99.9, 23451.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 3200.0, "maxY": 16.0, "series": [{"data": [[9400.0, 1.0], [10400.0, 1.0], [11400.0, 9.0], [11300.0, 1.0], [11500.0, 3.0], [11800.0, 1.0], [12700.0, 1.0], [13600.0, 1.0], [15600.0, 1.0], [16500.0, 1.0], [18500.0, 1.0], [19300.0, 1.0], [21300.0, 1.0], [21700.0, 8.0], [22200.0, 6.0], [22500.0, 2.0], [22400.0, 2.0], [22100.0, 5.0], [22000.0, 12.0], [21800.0, 16.0], [21900.0, 2.0], [21600.0, 1.0], [23400.0, 2.0], [23300.0, 4.0], [23200.0, 2.0], [23100.0, 2.0], [23000.0, 3.0], [22900.0, 2.0], [22700.0, 1.0], [22800.0, 2.0], [22600.0, 1.0], [3300.0, 6.0], [3200.0, 1.0], [3400.0, 1.0], [3500.0, 7.0], [3600.0, 3.0], [4100.0, 1.0], [5000.0, 1.0], [5200.0, 1.0], [5300.0, 1.0], [5600.0, 5.0], [5500.0, 3.0], [5800.0, 1.0], [5700.0, 1.0], [6000.0, 1.0], [5900.0, 1.0], [6600.0, 1.0], [7500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 23400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 132.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 132.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 132.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.5891252E12, "maxY": 16.0, "series": [{"data": [[1.58912532E12, 16.0], [1.58912538E12, 12.923076923076922], [1.58912526E12, 6.899999999999999], [1.5891252E12, 1.5]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58912538E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 5088.25, "minX": 1.0, "maxY": 22019.0, "series": [{"data": [[2.0, 5088.25], [8.0, 9793.666666666666], [9.0, 21793.0], [10.0, 21896.0], [11.0, 21812.0], [12.0, 21811.0], [3.0, 22019.0], [13.0, 21786.0], [14.0, 21706.0], [15.0, 21709.0], [1.0, 6476.166666666666], [4.0, 6296.733333333334], [16.0, 20664.232876712333], [5.0, 21813.0], [6.0, 21895.0], [7.0, 22011.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.234848484848484, 15833.424242424238]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 16.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 52.0, "minX": 1.5891252E12, "maxY": 45264.63333333333, "series": [{"data": [[1.58912532E12, 223.6], [1.58912538E12, 202.8], [1.58912526E12, 208.0], [1.5891252E12, 52.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58912532E12, 45264.63333333333], [1.58912538E12, 41055.0], [1.58912526E12, 42106.78333333333], [1.5891252E12, 10525.833333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58912538E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3438.0, "minX": 1.5891252E12, "maxY": 21878.461538461543, "series": [{"data": [[1.58912532E12, 21254.25581395349], [1.58912538E12, 21878.461538461543], [1.58912526E12, 7210.975], [1.5891252E12, 3438.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58912538E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3437.8, "minX": 1.5891252E12, "maxY": 21878.461538461543, "series": [{"data": [[1.58912532E12, 21254.186046511626], [1.58912538E12, 21878.461538461543], [1.58912526E12, 7210.900000000001], [1.5891252E12, 3437.8]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58912538E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.5891252E12, "maxY": 4.5, "series": [{"data": [[1.58912532E12, 1.5116279069767444], [1.58912538E12, 1.0], [1.58912526E12, 1.05], [1.5891252E12, 4.5]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58912538E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3275.0, "minX": 1.5891252E12, "maxY": 23451.0, "series": [{"data": [[1.58912532E12, 23451.0], [1.58912538E12, 22118.0], [1.58912526E12, 11573.0], [1.5891252E12, 3587.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58912532E12, 11483.0], [1.58912538E12, 21605.0], [1.58912526E12, 3381.0], [1.5891252E12, 3275.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58912532E12, 23356.8], [1.58912538E12, 22065.0], [1.58912526E12, 11492.6], [1.5891252E12, 3586.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58912532E12, 23451.0], [1.58912538E12, 22118.0], [1.58912526E12, 11573.0], [1.5891252E12, 3587.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58912532E12, 23438.2], [1.58912538E12, 22095.0], [1.58912526E12, 11570.8], [1.5891252E12, 3587.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58912538E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 5463.0, "minX": 1.0, "maxY": 21808.0, "series": [{"data": [[1.0, 21808.0], [2.0, 5463.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 5463.0, "minX": 1.0, "maxY": 21808.0, "series": [{"data": [[1.0, 21808.0], [2.0, 5463.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.5891252E12, "maxY": 0.9, "series": [{"data": [[1.58912532E12, 0.7166666666666667], [1.58912538E12, 0.38333333333333336], [1.58912526E12, 0.9], [1.5891252E12, 0.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58912538E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.5891252E12, "maxY": 0.7166666666666667, "series": [{"data": [[1.58912532E12, 0.7166666666666667], [1.58912538E12, 0.65], [1.58912526E12, 0.6666666666666666], [1.5891252E12, 0.16666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58912538E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.5891252E12, "maxY": 0.7166666666666667, "series": [{"data": [[1.58912532E12, 0.7166666666666667], [1.58912538E12, 0.65], [1.58912526E12, 0.6666666666666666], [1.5891252E12, 0.16666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58912538E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.5891252E12, "maxY": 0.7166666666666667, "series": [{"data": [[1.58912532E12, 0.7166666666666667], [1.58912538E12, 0.65], [1.58912526E12, 0.6666666666666666], [1.5891252E12, 0.16666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58912538E12, "title": "Total Transactions Per Second"}},
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

