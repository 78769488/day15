/**
 * Created by Administrator on 2017/4/14.
 */
// alert(123)
function ShowCity() {
    document.getElementById("dorpdown-box").classList.remove('hide');
}
function HideCity() {
    document.getElementById("dorpdown-box").classList.add('hide');
}
function SetMyCity(name) {
    document.getElementById('myCity').innerText = name;
}
function CountDown() {
    var hour = document.getElementById("hour").innerText;
    var minute = document.getElementById("minute").innerText;
    var second = document.getElementById("second").innerText;
    var i_hour = 0;
    var i_minute = 0;
    var i_second = 0;
    // 定义本声秒杀结束时间
    var endtime = '15:00:00';
    var endtime_hour = endtime.split(":")[0];
    var endtime_minute = endtime.split(":")[1];
    var endtime_second = endtime.split(":")[2];
    // 获取当前时间
    var tody = new Date();
    var current_hour = tody.getHours();
    var current_minute = tody.getMinutes();
    var current_second = tody.getSeconds();

    // 获取剩余时间
    var surplus_hour = parseInt(endtime_hour) - parseInt(current_hour);
    var surplus_minute = parseInt(endtime_minute) - parseInt(current_minute);
    var surplus_second = parseInt(endtime_second) - parseInt(current_second);

    if (second === '00'){
        if (minute === '00'){
            if (hour === '00'){
                // 时、分、秒都为00， 秒杀开始
                console.log("秒杀开始了");
                alert("秒杀开始了");
            }
        }else {

        }
        // 时、分、秒都为00， 秒杀开始
        console.log("秒杀开始了");
        alert("秒杀开始了");
    }else {
        //时、分为00，秒-1
        i_second = parseInt(second) -1 ;
        document.getElementById('second').innerText = String(i_second);
    }



    if (hour==='00'){
        if (minute === '00'){
            if (second === '00'){
                // 时、分、秒都为00， 秒杀开始
                console.log("秒杀开始了");
                alert("秒杀开始了");
            }else {
                //时、分为00，秒-1
                i_second = parseInt(second) -1 ;
                document.getElementById('second').innerText = String(i_second);
            }
        }else {
            // 时=0，分!=0
            if (second === '00'){
                // 秒=00，设置秒=59，分 -1
                document.getElementById('second').innerText = '59';
                i_minute = parseInt(minute) -1;
                document.getElementById('minute').innerText = String(i_minute)
            }else {
                i_second = parseInt(second) -1 ;
                document.getElementById('second').innerText = String(i_second);
            }
        }

    }else {

    }
}
setInterval("CountDown()", 1000)