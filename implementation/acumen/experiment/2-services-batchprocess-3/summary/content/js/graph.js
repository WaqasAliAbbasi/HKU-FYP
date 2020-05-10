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
        data: {"result": {"minY": 6615.0, "minX": 0.0, "maxY": 20685.0, "series": [{"data": [[0.0, 6615.0], [0.1, 6615.0], [0.2, 6615.0], [0.3, 6615.0], [0.4, 6615.0], [0.5, 6615.0], [0.6, 6615.0], [0.7, 6615.0], [0.8, 6656.0], [0.9, 6656.0], [1.0, 6656.0], [1.1, 6656.0], [1.2, 6656.0], [1.3, 6656.0], [1.4, 6656.0], [1.5, 6656.0], [1.6, 6721.0], [1.7, 6721.0], [1.8, 6721.0], [1.9, 6721.0], [2.0, 6721.0], [2.1, 6721.0], [2.2, 6721.0], [2.3, 7882.0], [2.4, 7882.0], [2.5, 7882.0], [2.6, 7882.0], [2.7, 7882.0], [2.8, 7882.0], [2.9, 7882.0], [3.0, 7882.0], [3.1, 7883.0], [3.2, 7883.0], [3.3, 7883.0], [3.4, 7883.0], [3.5, 7883.0], [3.6, 7883.0], [3.7, 7883.0], [3.8, 7945.0], [3.9, 7945.0], [4.0, 7945.0], [4.1, 7945.0], [4.2, 7945.0], [4.3, 7945.0], [4.4, 7945.0], [4.5, 7945.0], [4.6, 7988.0], [4.7, 7988.0], [4.8, 7988.0], [4.9, 7988.0], [5.0, 7988.0], [5.1, 7988.0], [5.2, 7988.0], [5.3, 7988.0], [5.4, 7988.0], [5.5, 7988.0], [5.6, 7988.0], [5.7, 7988.0], [5.8, 7988.0], [5.9, 7988.0], [6.0, 7988.0], [6.1, 8387.0], [6.2, 8387.0], [6.3, 8387.0], [6.4, 8387.0], [6.5, 8387.0], [6.6, 8387.0], [6.7, 8387.0], [6.8, 8388.0], [6.9, 8388.0], [7.0, 8388.0], [7.1, 8388.0], [7.2, 8388.0], [7.3, 8388.0], [7.4, 8388.0], [7.5, 8388.0], [7.6, 8910.0], [7.7, 8910.0], [7.8, 8910.0], [7.9, 8910.0], [8.0, 8910.0], [8.1, 8910.0], [8.2, 8910.0], [8.3, 9133.0], [8.4, 9133.0], [8.5, 9133.0], [8.6, 9133.0], [8.7, 9133.0], [8.8, 9133.0], [8.9, 9133.0], [9.0, 9133.0], [9.1, 9147.0], [9.2, 9147.0], [9.3, 9147.0], [9.4, 9147.0], [9.5, 9147.0], [9.6, 9147.0], [9.7, 9147.0], [9.8, 9213.0], [9.9, 9213.0], [10.0, 9213.0], [10.1, 9213.0], [10.2, 9213.0], [10.3, 9213.0], [10.4, 9213.0], [10.5, 9213.0], [10.6, 9421.0], [10.7, 9421.0], [10.8, 9421.0], [10.9, 9421.0], [11.0, 9421.0], [11.1, 9421.0], [11.2, 9421.0], [11.3, 9435.0], [11.4, 9435.0], [11.5, 9435.0], [11.6, 9435.0], [11.7, 9435.0], [11.8, 9435.0], [11.9, 9435.0], [12.0, 9435.0], [12.1, 9435.0], [12.2, 9435.0], [12.3, 9435.0], [12.4, 9435.0], [12.5, 9435.0], [12.6, 9435.0], [12.7, 9435.0], [12.8, 9441.0], [12.9, 9441.0], [13.0, 9441.0], [13.1, 9441.0], [13.2, 9441.0], [13.3, 9441.0], [13.4, 9441.0], [13.5, 9441.0], [13.6, 9506.0], [13.7, 9506.0], [13.8, 9506.0], [13.9, 9506.0], [14.0, 9506.0], [14.1, 9506.0], [14.2, 9506.0], [14.3, 9522.0], [14.4, 9522.0], [14.5, 9522.0], [14.6, 9522.0], [14.7, 9522.0], [14.8, 9522.0], [14.9, 9522.0], [15.0, 9522.0], [15.1, 9539.0], [15.2, 9539.0], [15.3, 9539.0], [15.4, 9539.0], [15.5, 9539.0], [15.6, 9539.0], [15.7, 9539.0], [15.8, 9582.0], [15.9, 9582.0], [16.0, 9582.0], [16.1, 9582.0], [16.2, 9582.0], [16.3, 9582.0], [16.4, 9582.0], [16.5, 9582.0], [16.6, 9613.0], [16.7, 9613.0], [16.8, 9613.0], [16.9, 9613.0], [17.0, 9613.0], [17.1, 9613.0], [17.2, 9613.0], [17.3, 9669.0], [17.4, 9669.0], [17.5, 9669.0], [17.6, 9669.0], [17.7, 9669.0], [17.8, 9669.0], [17.9, 9669.0], [18.0, 9669.0], [18.1, 9736.0], [18.2, 9736.0], [18.3, 9736.0], [18.4, 9736.0], [18.5, 9736.0], [18.6, 9736.0], [18.7, 9736.0], [18.8, 9737.0], [18.9, 9737.0], [19.0, 9737.0], [19.1, 9737.0], [19.2, 9737.0], [19.3, 9737.0], [19.4, 9737.0], [19.5, 9737.0], [19.6, 9738.0], [19.7, 9738.0], [19.8, 9738.0], [19.9, 9738.0], [20.0, 9738.0], [20.1, 9738.0], [20.2, 9738.0], [20.3, 9738.0], [20.4, 9934.0], [20.5, 9934.0], [20.6, 9934.0], [20.7, 9934.0], [20.8, 9934.0], [20.9, 9934.0], [21.0, 9934.0], [21.1, 11570.0], [21.2, 11570.0], [21.3, 11570.0], [21.4, 11570.0], [21.5, 11570.0], [21.6, 11570.0], [21.7, 11570.0], [21.8, 11570.0], [21.9, 11571.0], [22.0, 11571.0], [22.1, 11571.0], [22.2, 11571.0], [22.3, 11571.0], [22.4, 11571.0], [22.5, 11571.0], [22.6, 11663.0], [22.7, 11663.0], [22.8, 11663.0], [22.9, 11663.0], [23.0, 11663.0], [23.1, 11663.0], [23.2, 11663.0], [23.3, 11663.0], [23.4, 11663.0], [23.5, 11663.0], [23.6, 11663.0], [23.7, 11663.0], [23.8, 11663.0], [23.9, 11663.0], [24.0, 11663.0], [24.1, 11664.0], [24.2, 11664.0], [24.3, 11664.0], [24.4, 11664.0], [24.5, 11664.0], [24.6, 11664.0], [24.7, 11664.0], [24.8, 11664.0], [24.9, 11667.0], [25.0, 11667.0], [25.1, 11667.0], [25.2, 11667.0], [25.3, 11667.0], [25.4, 11667.0], [25.5, 11667.0], [25.6, 11667.0], [25.7, 11667.0], [25.8, 11667.0], [25.9, 11667.0], [26.0, 11667.0], [26.1, 11667.0], [26.2, 11667.0], [26.3, 11667.0], [26.4, 11875.0], [26.5, 11875.0], [26.6, 11875.0], [26.7, 11875.0], [26.8, 11875.0], [26.9, 11875.0], [27.0, 11875.0], [27.1, 12995.0], [27.2, 12995.0], [27.3, 12995.0], [27.4, 12995.0], [27.5, 12995.0], [27.6, 12995.0], [27.7, 12995.0], [27.8, 12995.0], [27.9, 14437.0], [28.0, 14437.0], [28.1, 14437.0], [28.2, 14437.0], [28.3, 14437.0], [28.4, 14437.0], [28.5, 14437.0], [28.6, 14639.0], [28.7, 14639.0], [28.8, 14639.0], [28.9, 14639.0], [29.0, 14639.0], [29.1, 14639.0], [29.2, 14639.0], [29.3, 14639.0], [29.4, 15032.0], [29.5, 15032.0], [29.6, 15032.0], [29.7, 15032.0], [29.8, 15032.0], [29.9, 15032.0], [30.0, 15032.0], [30.1, 15034.0], [30.2, 15034.0], [30.3, 15034.0], [30.4, 15034.0], [30.5, 15034.0], [30.6, 15034.0], [30.7, 15034.0], [30.8, 15034.0], [30.9, 15039.0], [31.0, 15039.0], [31.1, 15039.0], [31.2, 15039.0], [31.3, 15039.0], [31.4, 15039.0], [31.5, 15039.0], [31.6, 16577.0], [31.7, 16577.0], [31.8, 16577.0], [31.9, 16577.0], [32.0, 16577.0], [32.1, 16577.0], [32.2, 16577.0], [32.3, 16577.0], [32.4, 16577.0], [32.5, 16577.0], [32.6, 16577.0], [32.7, 16577.0], [32.8, 16577.0], [32.9, 16577.0], [33.0, 16577.0], [33.1, 16588.0], [33.2, 16588.0], [33.3, 16588.0], [33.4, 16588.0], [33.5, 16588.0], [33.6, 16588.0], [33.7, 16588.0], [33.8, 16588.0], [33.9, 16588.0], [34.0, 16588.0], [34.1, 16588.0], [34.2, 16588.0], [34.3, 16588.0], [34.4, 16588.0], [34.5, 16588.0], [34.6, 16588.0], [34.7, 16588.0], [34.8, 16588.0], [34.9, 16588.0], [35.0, 16588.0], [35.1, 16588.0], [35.2, 16588.0], [35.3, 16588.0], [35.4, 16589.0], [35.5, 16589.0], [35.6, 16589.0], [35.7, 16589.0], [35.8, 16589.0], [35.9, 16589.0], [36.0, 16589.0], [36.1, 16590.0], [36.2, 16590.0], [36.3, 16590.0], [36.4, 16590.0], [36.5, 16590.0], [36.6, 16590.0], [36.7, 16590.0], [36.8, 16590.0], [36.9, 16591.0], [37.0, 16591.0], [37.1, 16591.0], [37.2, 16591.0], [37.3, 16591.0], [37.4, 16591.0], [37.5, 16591.0], [37.6, 16687.0], [37.7, 16687.0], [37.8, 16687.0], [37.9, 16687.0], [38.0, 16687.0], [38.1, 16687.0], [38.2, 16687.0], [38.3, 16687.0], [38.4, 16687.0], [38.5, 16687.0], [38.6, 16687.0], [38.7, 16687.0], [38.8, 16687.0], [38.9, 16687.0], [39.0, 16687.0], [39.1, 16688.0], [39.2, 16688.0], [39.3, 16688.0], [39.4, 16688.0], [39.5, 16688.0], [39.6, 16688.0], [39.7, 16688.0], [39.8, 16688.0], [39.9, 16689.0], [40.0, 16689.0], [40.1, 16689.0], [40.2, 16689.0], [40.3, 16689.0], [40.4, 16689.0], [40.5, 16689.0], [40.6, 16689.0], [40.7, 16689.0], [40.8, 16689.0], [40.9, 16689.0], [41.0, 16689.0], [41.1, 16689.0], [41.2, 16689.0], [41.3, 16689.0], [41.4, 16690.0], [41.5, 16690.0], [41.6, 16690.0], [41.7, 16690.0], [41.8, 16690.0], [41.9, 16690.0], [42.0, 16690.0], [42.1, 16690.0], [42.2, 16692.0], [42.3, 16692.0], [42.4, 16692.0], [42.5, 16692.0], [42.6, 16692.0], [42.7, 16692.0], [42.8, 16692.0], [42.9, 16693.0], [43.0, 16693.0], [43.1, 16693.0], [43.2, 16693.0], [43.3, 16693.0], [43.4, 16693.0], [43.5, 16693.0], [43.6, 16693.0], [43.7, 16793.0], [43.8, 16793.0], [43.9, 16793.0], [44.0, 16793.0], [44.1, 16793.0], [44.2, 16793.0], [44.3, 16793.0], [44.4, 16794.0], [44.5, 16794.0], [44.6, 16794.0], [44.7, 16794.0], [44.8, 16794.0], [44.9, 16794.0], [45.0, 16794.0], [45.1, 16794.0], [45.2, 16795.0], [45.3, 16795.0], [45.4, 16795.0], [45.5, 16795.0], [45.6, 16795.0], [45.7, 16795.0], [45.8, 16795.0], [45.9, 16796.0], [46.0, 16796.0], [46.1, 16796.0], [46.2, 16796.0], [46.3, 16796.0], [46.4, 16796.0], [46.5, 16796.0], [46.6, 16796.0], [46.7, 16796.0], [46.8, 16796.0], [46.9, 16796.0], [47.0, 16796.0], [47.1, 16796.0], [47.2, 16796.0], [47.3, 16796.0], [47.4, 16796.0], [47.5, 16796.0], [47.6, 16796.0], [47.7, 16796.0], [47.8, 16796.0], [47.9, 16796.0], [48.0, 16796.0], [48.1, 16796.0], [48.2, 16803.0], [48.3, 16803.0], [48.4, 16803.0], [48.5, 16803.0], [48.6, 16803.0], [48.7, 16803.0], [48.8, 16803.0], [48.9, 16803.0], [49.0, 16803.0], [49.1, 16803.0], [49.2, 16803.0], [49.3, 16803.0], [49.4, 16803.0], [49.5, 16803.0], [49.6, 16803.0], [49.7, 16893.0], [49.8, 16893.0], [49.9, 16893.0], [50.0, 16893.0], [50.1, 16893.0], [50.2, 16893.0], [50.3, 16893.0], [50.4, 16893.0], [50.5, 16893.0], [50.6, 16893.0], [50.7, 16893.0], [50.8, 16893.0], [50.9, 16893.0], [51.0, 16893.0], [51.1, 16893.0], [51.2, 16893.0], [51.3, 16893.0], [51.4, 16893.0], [51.5, 16893.0], [51.6, 16893.0], [51.7, 16893.0], [51.8, 16893.0], [51.9, 16893.0], [52.0, 16893.0], [52.1, 16893.0], [52.2, 16893.0], [52.3, 16893.0], [52.4, 16893.0], [52.5, 16893.0], [52.6, 16893.0], [52.7, 16894.0], [52.8, 16894.0], [52.9, 16894.0], [53.0, 16894.0], [53.1, 16894.0], [53.2, 16894.0], [53.3, 16894.0], [53.4, 16894.0], [53.5, 16894.0], [53.6, 16894.0], [53.7, 16894.0], [53.8, 16894.0], [53.9, 16894.0], [54.0, 16894.0], [54.1, 16894.0], [54.2, 16895.0], [54.3, 16895.0], [54.4, 16895.0], [54.5, 16895.0], [54.6, 16895.0], [54.7, 16895.0], [54.8, 16895.0], [54.9, 16895.0], [55.0, 16895.0], [55.1, 16895.0], [55.2, 16895.0], [55.3, 16895.0], [55.4, 16895.0], [55.5, 16895.0], [55.6, 16895.0], [55.7, 16895.0], [55.8, 16895.0], [55.9, 16895.0], [56.0, 16895.0], [56.1, 16895.0], [56.2, 16895.0], [56.3, 16895.0], [56.4, 16897.0], [56.5, 16897.0], [56.6, 16897.0], [56.7, 16897.0], [56.8, 16897.0], [56.9, 16897.0], [57.0, 16897.0], [57.1, 16897.0], [57.2, 16897.0], [57.3, 16897.0], [57.4, 16897.0], [57.5, 16897.0], [57.6, 16897.0], [57.7, 16897.0], [57.8, 16897.0], [57.9, 16897.0], [58.0, 16897.0], [58.1, 16897.0], [58.2, 16897.0], [58.3, 16897.0], [58.4, 16897.0], [58.5, 16897.0], [58.6, 16897.0], [58.7, 16897.0], [58.8, 16897.0], [58.9, 16897.0], [59.0, 16897.0], [59.1, 16897.0], [59.2, 16897.0], [59.3, 16897.0], [59.4, 16898.0], [59.5, 16898.0], [59.6, 16898.0], [59.7, 16898.0], [59.8, 16898.0], [59.9, 16898.0], [60.0, 16898.0], [60.1, 16898.0], [60.2, 16898.0], [60.3, 16898.0], [60.4, 16898.0], [60.5, 16898.0], [60.6, 16898.0], [60.7, 16898.0], [60.8, 16898.0], [60.9, 16898.0], [61.0, 16899.0], [61.1, 16899.0], [61.2, 16899.0], [61.3, 16899.0], [61.4, 16899.0], [61.5, 16899.0], [61.6, 16899.0], [61.7, 16899.0], [61.8, 16899.0], [61.9, 16899.0], [62.0, 16899.0], [62.1, 16899.0], [62.2, 16899.0], [62.3, 16899.0], [62.4, 16899.0], [62.5, 16900.0], [62.6, 16900.0], [62.7, 16900.0], [62.8, 16900.0], [62.9, 16900.0], [63.0, 16900.0], [63.1, 16900.0], [63.2, 16901.0], [63.3, 16901.0], [63.4, 16901.0], [63.5, 16901.0], [63.6, 16901.0], [63.7, 16901.0], [63.8, 16901.0], [63.9, 16901.0], [64.0, 16901.0], [64.1, 16901.0], [64.2, 16901.0], [64.3, 16901.0], [64.4, 16901.0], [64.5, 16901.0], [64.6, 16901.0], [64.7, 16995.0], [64.8, 16995.0], [64.9, 16995.0], [65.0, 16995.0], [65.1, 16995.0], [65.2, 16995.0], [65.3, 16995.0], [65.4, 16995.0], [65.5, 16995.0], [65.6, 16995.0], [65.7, 16995.0], [65.8, 16995.0], [65.9, 16995.0], [66.0, 16995.0], [66.1, 16995.0], [66.2, 16995.0], [66.3, 16995.0], [66.4, 16995.0], [66.5, 16995.0], [66.6, 16995.0], [66.7, 16995.0], [66.8, 16995.0], [66.9, 16995.0], [67.0, 16995.0], [67.1, 16995.0], [67.2, 16995.0], [67.3, 16995.0], [67.4, 16995.0], [67.5, 16995.0], [67.6, 16995.0], [67.7, 17002.0], [67.8, 17002.0], [67.9, 17002.0], [68.0, 17002.0], [68.1, 17002.0], [68.2, 17002.0], [68.3, 17002.0], [68.4, 17002.0], [68.5, 17002.0], [68.6, 17002.0], [68.7, 17002.0], [68.8, 17002.0], [68.9, 17002.0], [69.0, 17002.0], [69.1, 17002.0], [69.2, 17096.0], [69.3, 17096.0], [69.4, 17096.0], [69.5, 17096.0], [69.6, 17096.0], [69.7, 17096.0], [69.8, 17096.0], [69.9, 17096.0], [70.0, 17101.0], [70.1, 17101.0], [70.2, 17101.0], [70.3, 17101.0], [70.4, 17101.0], [70.5, 17101.0], [70.6, 17101.0], [70.7, 17200.0], [70.8, 17200.0], [70.9, 17200.0], [71.0, 17200.0], [71.1, 17200.0], [71.2, 17200.0], [71.3, 17200.0], [71.4, 17200.0], [71.5, 17200.0], [71.6, 17200.0], [71.7, 17200.0], [71.8, 17200.0], [71.9, 17200.0], [72.0, 17200.0], [72.1, 17200.0], [72.2, 17202.0], [72.3, 17202.0], [72.4, 17202.0], [72.5, 17202.0], [72.6, 17202.0], [72.7, 17202.0], [72.8, 17202.0], [72.9, 17202.0], [73.0, 17203.0], [73.1, 17203.0], [73.2, 17203.0], [73.3, 17203.0], [73.4, 17203.0], [73.5, 17203.0], [73.6, 17203.0], [73.7, 17306.0], [73.8, 17306.0], [73.9, 17306.0], [74.0, 17306.0], [74.1, 17306.0], [74.2, 17306.0], [74.3, 17306.0], [74.4, 17306.0], [74.5, 17306.0], [74.6, 17306.0], [74.7, 17306.0], [74.8, 17306.0], [74.9, 17306.0], [75.0, 17306.0], [75.1, 17306.0], [75.2, 17408.0], [75.3, 17408.0], [75.4, 17408.0], [75.5, 17408.0], [75.6, 17408.0], [75.7, 17408.0], [75.8, 17408.0], [75.9, 17408.0], [76.0, 17408.0], [76.1, 17408.0], [76.2, 17408.0], [76.3, 17408.0], [76.4, 17408.0], [76.5, 17408.0], [76.6, 17408.0], [76.7, 17409.0], [76.8, 17409.0], [76.9, 17409.0], [77.0, 17409.0], [77.1, 17409.0], [77.2, 17409.0], [77.3, 17409.0], [77.4, 17409.0], [77.5, 17925.0], [77.6, 17925.0], [77.7, 17925.0], [77.8, 17925.0], [77.9, 17925.0], [78.0, 17925.0], [78.1, 17925.0], [78.2, 19413.0], [78.3, 19413.0], [78.4, 19413.0], [78.5, 19413.0], [78.6, 19413.0], [78.7, 19413.0], [78.8, 19413.0], [78.9, 19413.0], [79.0, 19862.0], [79.1, 19862.0], [79.2, 19862.0], [79.3, 19862.0], [79.4, 19862.0], [79.5, 19862.0], [79.6, 19862.0], [79.7, 20065.0], [79.8, 20065.0], [79.9, 20065.0], [80.0, 20065.0], [80.1, 20065.0], [80.2, 20065.0], [80.3, 20065.0], [80.4, 20065.0], [80.5, 20068.0], [80.6, 20068.0], [80.7, 20068.0], [80.8, 20068.0], [80.9, 20068.0], [81.0, 20068.0], [81.1, 20068.0], [81.2, 20068.0], [81.3, 20069.0], [81.4, 20069.0], [81.5, 20069.0], [81.6, 20069.0], [81.7, 20069.0], [81.8, 20069.0], [81.9, 20069.0], [82.0, 20070.0], [82.1, 20070.0], [82.2, 20070.0], [82.3, 20070.0], [82.4, 20070.0], [82.5, 20070.0], [82.6, 20070.0], [82.7, 20070.0], [82.8, 20071.0], [82.9, 20071.0], [83.0, 20071.0], [83.1, 20071.0], [83.2, 20071.0], [83.3, 20071.0], [83.4, 20071.0], [83.5, 20164.0], [83.6, 20164.0], [83.7, 20164.0], [83.8, 20164.0], [83.9, 20164.0], [84.0, 20164.0], [84.1, 20164.0], [84.2, 20164.0], [84.3, 20168.0], [84.4, 20168.0], [84.5, 20168.0], [84.6, 20168.0], [84.7, 20168.0], [84.8, 20168.0], [84.9, 20168.0], [85.0, 20170.0], [85.1, 20170.0], [85.2, 20170.0], [85.3, 20170.0], [85.4, 20170.0], [85.5, 20170.0], [85.6, 20170.0], [85.7, 20170.0], [85.8, 20170.0], [85.9, 20170.0], [86.0, 20170.0], [86.1, 20170.0], [86.2, 20170.0], [86.3, 20170.0], [86.4, 20170.0], [86.5, 20171.0], [86.6, 20171.0], [86.7, 20171.0], [86.8, 20171.0], [86.9, 20171.0], [87.0, 20171.0], [87.1, 20171.0], [87.2, 20171.0], [87.3, 20173.0], [87.4, 20173.0], [87.5, 20173.0], [87.6, 20173.0], [87.7, 20173.0], [87.8, 20173.0], [87.9, 20173.0], [88.0, 20174.0], [88.1, 20174.0], [88.2, 20174.0], [88.3, 20174.0], [88.4, 20174.0], [88.5, 20174.0], [88.6, 20174.0], [88.7, 20174.0], [88.8, 20174.0], [88.9, 20174.0], [89.0, 20174.0], [89.1, 20174.0], [89.2, 20174.0], [89.3, 20174.0], [89.4, 20174.0], [89.5, 20175.0], [89.6, 20175.0], [89.7, 20175.0], [89.8, 20175.0], [89.9, 20175.0], [90.0, 20175.0], [90.1, 20175.0], [90.2, 20175.0], [90.3, 20182.0], [90.4, 20182.0], [90.5, 20182.0], [90.6, 20182.0], [90.7, 20182.0], [90.8, 20182.0], [90.9, 20182.0], [91.0, 20270.0], [91.1, 20270.0], [91.2, 20270.0], [91.3, 20270.0], [91.4, 20270.0], [91.5, 20270.0], [91.6, 20270.0], [91.7, 20270.0], [91.8, 20274.0], [91.9, 20274.0], [92.0, 20274.0], [92.1, 20274.0], [92.2, 20274.0], [92.3, 20274.0], [92.4, 20274.0], [92.5, 20276.0], [92.6, 20276.0], [92.7, 20276.0], [92.8, 20276.0], [92.9, 20276.0], [93.0, 20276.0], [93.1, 20276.0], [93.2, 20276.0], [93.3, 20277.0], [93.4, 20277.0], [93.5, 20277.0], [93.6, 20277.0], [93.7, 20277.0], [93.8, 20277.0], [93.9, 20277.0], [94.0, 20374.0], [94.1, 20374.0], [94.2, 20374.0], [94.3, 20374.0], [94.4, 20374.0], [94.5, 20374.0], [94.6, 20374.0], [94.7, 20374.0], [94.8, 20376.0], [94.9, 20376.0], [95.0, 20376.0], [95.1, 20376.0], [95.2, 20376.0], [95.3, 20376.0], [95.4, 20376.0], [95.5, 20379.0], [95.6, 20379.0], [95.7, 20379.0], [95.8, 20379.0], [95.9, 20379.0], [96.0, 20379.0], [96.1, 20379.0], [96.2, 20379.0], [96.3, 20379.0], [96.4, 20379.0], [96.5, 20379.0], [96.6, 20379.0], [96.7, 20379.0], [96.8, 20379.0], [96.9, 20379.0], [97.0, 20477.0], [97.1, 20477.0], [97.2, 20477.0], [97.3, 20477.0], [97.4, 20477.0], [97.5, 20477.0], [97.6, 20477.0], [97.7, 20477.0], [97.8, 20578.0], [97.9, 20578.0], [98.0, 20578.0], [98.1, 20578.0], [98.2, 20578.0], [98.3, 20578.0], [98.4, 20578.0], [98.5, 20578.0], [98.6, 20578.0], [98.7, 20578.0], [98.8, 20578.0], [98.9, 20578.0], [99.0, 20578.0], [99.1, 20578.0], [99.2, 20578.0], [99.3, 20685.0], [99.4, 20685.0], [99.5, 20685.0], [99.6, 20685.0], [99.7, 20685.0], [99.8, 20685.0], [99.9, 20685.0], [100.0, 20685.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 6600.0, "maxY": 19.0, "series": [{"data": [[8300.0, 2.0], [8900.0, 1.0], [9200.0, 1.0], [9100.0, 2.0], [9500.0, 4.0], [9600.0, 2.0], [9400.0, 4.0], [9700.0, 3.0], [9900.0, 1.0], [11600.0, 5.0], [11500.0, 2.0], [11800.0, 1.0], [12900.0, 1.0], [14600.0, 1.0], [14400.0, 1.0], [15000.0, 3.0], [16600.0, 8.0], [17400.0, 3.0], [16500.0, 8.0], [16800.0, 19.0], [16700.0, 6.0], [16900.0, 7.0], [17300.0, 2.0], [17200.0, 4.0], [17000.0, 3.0], [17100.0, 1.0], [17900.0, 1.0], [19400.0, 1.0], [19800.0, 1.0], [20100.0, 10.0], [20200.0, 4.0], [20300.0, 4.0], [20400.0, 1.0], [20000.0, 5.0], [20500.0, 2.0], [20600.0, 1.0], [6600.0, 2.0], [6700.0, 1.0], [7900.0, 3.0], [7800.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 20600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 133.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 133.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 133.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.58912964E12, "maxY": 15.849056603773585, "series": [{"data": [[1.58912988E12, 1.0], [1.5891297E12, 5.375], [1.58912982E12, 14.259259259259256], [1.58912964E12, 1.0], [1.58912976E12, 15.849056603773585]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58912988E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 9534.5, "minX": 1.0, "maxY": 20070.0, "series": [{"data": [[1.0, 12819.333333333334], [2.0, 9534.5], [4.0, 10149.5], [8.0, 10015.333333333334], [16.0, 16874.09574468085], [10.0, 17782.333333333332], [12.0, 16899.0], [6.0, 16894.5], [3.0, 16589.0], [13.0, 18532.0], [7.0, 20070.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[13.090225563909772, 15505.248120300746]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 16.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5.2, "minX": 1.58912964E12, "maxY": 56844.95, "series": [{"data": [[1.58912988E12, 5.2], [1.5891297E12, 124.8], [1.58912982E12, 280.8], [1.58912964E12, 5.2], [1.58912976E12, 275.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58912988E12, 1052.4833333333333], [1.5891297E12, 25264.8], [1.58912982E12, 56844.95], [1.58912964E12, 1052.4833333333333], [1.58912976E12, 55793.066666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58912988E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 9084.458333333332, "minX": 1.58912964E12, "maxY": 19413.0, "series": [{"data": [[1.58912988E12, 19413.0], [1.5891297E12, 9084.458333333332], [1.58912982E12, 17925.277777777774], [1.58912964E12, 9539.0], [1.58912976E12, 15985.924528301888]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58912988E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 9084.458333333332, "minX": 1.58912964E12, "maxY": 19413.0, "series": [{"data": [[1.58912988E12, 19413.0], [1.5891297E12, 9084.458333333332], [1.58912982E12, 17925.259259259263], [1.58912964E12, 9536.0], [1.58912976E12, 15985.792452830188]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58912988E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.9583333333333333, "minX": 1.58912964E12, "maxY": 40.0, "series": [{"data": [[1.58912988E12, 2.0], [1.5891297E12, 1.9583333333333333], [1.58912982E12, 2.1111111111111116], [1.58912964E12, 40.0], [1.58912976E12, 2.50943396226415]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58912988E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6615.0, "minX": 1.58912964E12, "maxY": 20685.0, "series": [{"data": [[1.58912988E12, 19413.0], [1.5891297E12, 12995.0], [1.58912982E12, 20376.0], [1.58912964E12, 9539.0], [1.58912976E12, 20685.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58912988E12, 19413.0], [1.5891297E12, 6615.0], [1.58912982E12, 16577.0], [1.58912964E12, 9539.0], [1.58912976E12, 8387.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58912988E12, 19413.0], [1.5891297E12, 11663.5], [1.58912982E12, 20178.5], [1.58912964E12, 9539.0], [1.58912976E12, 20379.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58912988E12, 19413.0], [1.5891297E12, 12995.0], [1.58912982E12, 20376.0], [1.58912964E12, 9539.0], [1.58912976E12, 20685.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58912988E12, 19413.0], [1.5891297E12, 12662.25], [1.58912982E12, 20301.25], [1.58912964E12, 9539.0], [1.58912976E12, 20578.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58912988E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 9435.0, "minX": 1.0, "maxY": 16895.0, "series": [{"data": [[1.0, 9514.0], [2.0, 9597.5], [4.0, 9435.0], [3.0, 16895.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 9435.0, "minX": 1.0, "maxY": 16895.0, "series": [{"data": [[1.0, 9514.0], [2.0, 9597.5], [4.0, 9435.0], [3.0, 16895.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.58912964E12, "maxY": 1.0166666666666666, "series": [{"data": [[1.5891297E12, 0.5166666666666667], [1.58912982E12, 0.65], [1.58912964E12, 0.03333333333333333], [1.58912976E12, 1.0166666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58912982E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.58912964E12, "maxY": 0.9, "series": [{"data": [[1.58912988E12, 0.016666666666666666], [1.5891297E12, 0.4], [1.58912982E12, 0.9], [1.58912964E12, 0.016666666666666666], [1.58912976E12, 0.8833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58912988E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.58912964E12, "maxY": 0.9, "series": [{"data": [[1.58912988E12, 0.016666666666666666], [1.5891297E12, 0.4], [1.58912982E12, 0.9], [1.58912964E12, 0.016666666666666666], [1.58912976E12, 0.8833333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58912988E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.58912964E12, "maxY": 0.9, "series": [{"data": [[1.58912988E12, 0.016666666666666666], [1.5891297E12, 0.4], [1.58912982E12, 0.9], [1.58912964E12, 0.016666666666666666], [1.58912976E12, 0.8833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58912988E12, "title": "Total Transactions Per Second"}},
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

