// 1.黑白图像
function blackWhite(imageData) {
    var d = imageData.data;
    for (var i = 0; i < d.length; i += 4) {
        avg = Math.floor((d[i] + d[i + 1] + d[i + 2]) / 3);
        d[i] = avg;
        d[i + 1] = avg;
        d[i + 2] = avg;
    }
}

//2.二值滤镜 原理：将当前像素的RGB值得最大值和最小值求平均值并作为新的RGB值。
function clear(imageData) {
    var d = imageData.data;
    for (var i = 0; i < d.length; i += 4) {
        var c = (Math.max(d[i] + d[i + 1] + d[i + 2]) + Math.min(d[i] + d[i + 1] + d[i + 2]) / 2) - 200;
        d[i] = c
        d[i + 1] = c;
        d[i + 2] = c;
    }
}

// 3.图像反转
function toggle(imageData) {
    var data = imageData.data;

    for (var i = 0, len = data.length; i < len; i += 4) {
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1]
        data[i + 2] = 255 - data[i + 2];
    }
}
// 4.滤波
/*函数第一个参数是 canvas上的 imageData 对象 
第二个参数是传入矩阵所对应的数组，如果是下面这样的矩阵 
    a b c 
        d e f 
        g h i 
    则传入第二个的参数应为 [a,b,c,d,e,f,g,h,i] 
*/
function matrix(imageData, array) {

    var w = imageData.width, h = imageData.height;
    var data1 = new Array();
    var data2 = new Array();
    var data1 = imageData.data;
    var data2 = imageData.data;
    var a = array;
    for (var i = 0; i < h; i++) {  // 行
        for (var j = 0; j < w; j++) {  // 列
            for (var k = 0; k < 3; k++) {
                var num = (i * w + j) * 4 + k;
                var numUp = ((i - 1) * w + j) * 4 + k;
                var numDown = ((i + 1) * w + j) * 4 + k;
                data1[num] = -(a[0] * data2[numUp - 4] + a[1] * data2[numUp] + a[2] * data2[numUp + 4]
                    + a[3] * data2[num - 4] + a[4] * data2[num] + a[5] * data2[num + 4]
                    + a[6] * data2[numDown - 4] + a[7] * data2[numDown] + a[8] * data2[numDown + 4]);
            }
        }
    }
}
// 5.复古
function sepia(imageData) {
    var d = imageData.data;
    for (var i = 0; i < d.length; i += 4) {
        var r = d[i];
        var g = d[i + 1];
        var b = d[i + 2];
        d[i] = (r * 0.393) + (g * 0.769) + (b * 0.189);

    }
}
// 6.红色蒙版
// 红色通道取平均值,绿色通道和蓝色通道都设为0

function myRed(imageData) {
    var d = imageData.data;
    for (var i = 0; i < d.length; i += 4) {
        var r = d[i];
        var g = d[i + 1];
        var b = d[i + 2];
        d[i] = (r + g + b) / 3;
        d[i + 1] = 0;
        d[i + 2] = 0;
    }
}
// 7.增加亮度
function brightness(imageData, delta) {
    var d = imageData.data;
    for (var i = 0; i < d.length; i += 4) {
        d[i] += delta;
        d[i + 1] += delta;
        d[i + 2] += delta;
    }
}

// 8.浮雕
function carve(imageData) {
    var w = imageData.width, h = imageData.height;
    var data = imageData.data;

    for (var i = h; i > 0; i--) {  // 行
        for (var j = w; j > 0; j--) {  // 列
            for (var k = 0; k < 3; k++) {
                var num = (i * w + j) * 4 + k;
                var numUp = ((i - 1) * w + j) * 4 + k;
                var numDown = ((i + 1) * w + j) * 4 + k;
                data[num] = data[num] - data[numUp - 4] + 128;
            }
        }
    }
}

// 9.雾化
/*function fog(imageData){
    var w = imageData.width, var data = imageData.data;
    for (var i=h; i>0; i--) {  // 行
        for (var j=w; j>0; j--) {  // 列
            var num = (i*w + j)*4;
            if (Math.random()<0.5) {
                data[num] = 255;
                data[num+1] = 255;
                data[num+2] = 255;
            }
        }
    }
}*/

// 10.毛玻璃效果
// 原理：用当前点四周一定范围内任意一点的颜色来替代当前点颜色，最常用的是随机的采用相邻点进行替代。
function spread(canvasData) {
    var w = canvasData.width, h = canvasData.height;

    for (var i = 0; i < h; i++) {
        for (var j = 0; j < w; j++) {
            for (var k = 0; k < 3; k++) {
                // Index of the pixel in the array  
                var num = (i * w + j) * 4 + k;

                var rand = Math.floor(Math.random() * 10) % 3;
                var num2 = ((i + rand) * w + (j + rand)) * 4 + k;

                canvasData.data[num] = canvasData.data[num2]
                //canvasData.data[idx + 3] = 255; // Alpha channel    
                // add black border  
                //if(x < 4 || y < 4 || x > (canvasData.width - 4) || y > (canvasData.height - 4)) {  
                //	canvasData.data[num] = 0;  
                //}  
            }
        }
    }
}
// 11.马赛克
// 将图像分成大小一致的图像块，每一个图像块都是一个正方形，
// 并且在这个正方形中所有像素值都相等。我们可以将这个正方形看作是一个模板窗口，
// 模板中对应的所有图像像素值都等于该模板的左上角第一个像素的像素值，
// 这样的效果就是马赛克效果，而正方形模板的大小则决定了马赛克块的大小，即图像马赛克化的程度。
function mosaic(imageData, size) {
    var w = imageData.width, h = imageData.height;
    var data = imageData.data;

    for (var i = 1; i < h - 1; i += size) {
        for (var j = 1; j < w - 1; j += size) {

            var num = (i * w + j) * 4;
            for (var dx = 0; dx < size; dx++) {
                for (var dy = 0; dy < size; dy++) {
                    var x = i + dx;
                    var y = j + dy;
                    var p1 = (x * w + y) * 4;

                    data[p1 + 0] = data[num + 0];
                    data[p1 + 1] = data[num + 1];
                    data[p1 + 2] = data[num + 2];
                }
            }
        }
    }
}

//12.模糊滤镜 算法原理：将当前像素的周边像素的RGB值各自的平均值作为新的RGB值。

function myBlur(imageData, array) {

    var w = imageData.width, h = imageData.height;
    var data1 = new Array();
    var data2 = new Array();
    var data1 = imageData.data;
    var data2 = imageData.data;
    var a = array;
    for (var i = 0; i < h; i++) {  // 行
        for (var j = 0; j < w; j++) {  // 列
            for (var k = 0; k < 3; k++) {
                var num = (i * w + j) * 4 + k;
                var numUp = ((i - 1) * w + j) * 4 + k;
                var numDown = ((i + 1) * w + j) * 4 + k;
                // 对另开内存的data1的改变为什么会反应到data中
                data1[num] = (data2[numUp - 4] + data2[numUp] + data2[numUp + 4]
                    + data2[num - 4] + data2[num] + data2[num + 4]
                    + data2[numDown - 4] + data2[numDown] + data2[numDown + 4]) / 9;
            }
        }
    }
}

// 13.二值化
function noor(imageData) {
    var d = imageData.data;
    for (var i = 0; i < d.length; i += 4) {
        for (var j = 0; j < 3; j++) {
            if (d[i + j] < 127) {
                d[i + j] = 0;
            } else {
                d[i + j] = 255;
            }
        }
    }
}