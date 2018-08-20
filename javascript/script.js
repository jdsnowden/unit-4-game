$(document).ready(function () {

    // Init animations when a hero is selected


    //Create hero stat variables
    var warriorAttk = 10
    var warriorDef = 210

    var monkAttk = 8
    var monkDef = 260

    var mageAttk = 15
    var mageDef = 180

    var balrogHealth = 75
    var balrogCounterAttack = 15

    var leviathanHealth = 100
    var leviathanCounterAttack = 18

    var stoneDragonHealth = 200
    var stoneDragonCounterAttack = 20

    var audioElement1 = document.createElement("audio");
    audioElement1.setAttribute("src", "assets/mp3/greatFlame.mp3");

    var audioElement2 = document.createElement("audio");
    audioElement2.setAttribute("src", "assets/mp3/waterLord.mp3");

    var audioElement3 = document.createElement("audio");
    audioElement3.setAttribute("src", "assets/mp3/rockKing.mp3");


    $("#warrior-button").click(function () {
        $("#balrogModal").modal()
        audioElement1.play()
    })

    $("#attackButton").click(function () {
        $("#warriorHealth").text("Warrior Health " + warriorDef)
        $("#enemyHealth").text("Enemy Health " + balrogHealth)
        balrogHealth -= warriorAttk
        if (balrogHealth >= 0) {
            warriorDef -= balrogCounterAttack
            if (warriorDef <= 0) {
                alert("You Died")
                location.reload(false)
            } else {
                warriorAttk += 6
            }
        } else {
            alert("Enemy had been defeated!")
            audioElement1.pause()
            $('#balrogModal').modal('toggle')
            $("#leviathanModal").modal()
            audioElement2.play()
        }
    })

    $("#leviathanButton").click(function () {
        $("#warrior2Health").text("Warrior Health " + warriorDef)
        $("#enemy2Health").text("Enemy Health " + leviathanHealth)
        leviathanHealth -= warriorAttk
        if (leviathanHealth >= 0) {
            warriorDef -= leviathanCounterAttack
            if (warriorDef <= 0) {
                alert("You Died")
                location.reload(false)
            } else {
                warriorAttk += 6
            }
        } else {
            alert("Enemy had been defeated!")
            audioElement2.pause()
            $('#leviathanModal').modal('toggle')
            $("#dragonModal").modal()
            audioElement3.play()
        }
    })

    $("#dragonButton").click(function () {
        $("#warrior3Health").text("Warrior Health " + warriorDef)
        $("#enemy3Health").text("Enemy Health " + stoneDragonHealth)
        stoneDragonHealth -= warriorAttk
        if (stoneDragonHealth >= 0) {
            warriorDef -= stoneDragonCounterAttack
            if (warriorDef <= 0) {
                alert("You Died")
                location.reload(false)
            } else {
                warriorAttk += 6
            }
        } else {
            alert("You have survived the dungeon press 'ok' to collect your prize!")
            audioElement3.pause()
            location.reload(false)
            window.open("https://www.youtube.com/watch?v=wqzLoXjFT34")
        }
    })

    $("#mage-button").click(function () {
        $("#balrogModal2").modal()
        audioElement1.play()
    })

    $("#attackButton2").click(function () {
        $("#warrior4Health").text("Mage Health " + mageDef)
        $("#enemy4Health").text("Enemy Health " + balrogHealth)
        balrogHealth -= mageAttk
        if (balrogHealth >= 0) {
            mageDef -= balrogCounterAttack
            if (mageDef <= 0) {
                alert("You Died")
                location.reload(false)
            } else {
                mageAttk += 8
            }
        } else {
            alert("Enemy had been defeated!")
            audioElement1.pause()
            $('#balrogModal2').modal('toggle')
            $("#leviathanModal2").modal()
            audioElement2.play()
        }
    })

    $("#leviathanButton2").click(function () {
        $("#warrior5Health").text("Mage Health " + mageDef)
        $("#enemy5Health").text("Enemy Health " + leviathanHealth)
        leviathanHealth -= mageAttk
        if (leviathanHealth >= 0) {
            mageDef -= leviathanCounterAttack
            if (mageDef <= 0) {
                alert("You Died")
                location.reload(false)
            } else {
                mageAttk += 8
            }
        } else {
            alert("Enemy had been defeated!")
            audioElement2.pause()
            $('#leviathanModal2').modal('toggle')
            $("#dragonModal2").modal()
            audioElement3.play()
        }
    })



    $("#dragonButton2").click(function () {
        $("#warrior6Health").text("Mage Health " + mageDef)
        $("#enemy6Health").text("Enemy Health " + stoneDragonHealth)
        stoneDragonHealth -= mageAttk
        if (stoneDragonHealth >= 0) {
            mageDef -= stoneDragonCounterAttack
            if (warriorDef <= 0) {
                alert("You Died")
                location.reload(false)
            } else {
                mageAttk += 12
            }
        } else {
            alert("You have survived the dungeon press 'ok' to collect your prize!")
            audioElement3.pause()
            location.reload(false)
            window.open("https://www.youtube.com/watch?v=wqzLoXjFT34")
        }
    })

    $("#monk-button").click(function () {
        $("#balrogModal3").modal()
        audioElement1.play()
    })

    $("#attackButton3").click(function () {
        $("#warrior7Health").text("Monk Health " + monkDef)
        $("#enemy7Health").text("Enemy Health " + balrogHealth)
        balrogHealth -= monkAttk
        if (balrogHealth >= 0) {
            monkDef -= balrogCounterAttack
            if (warriorDef <= 0) {
                alert("You Died")
                location.reload(false)
            } else {
                monkAttk += 5
            }
        } else {
            alert("Enemy had been defeated!")
            audioElement1.pause()
            $('#balrogModal3').modal('toggle')
            $("#leviathanModal3").modal()
            audioElement2.play()
        }
    })

    $("#leviathanButton3").click(function () {
        $("#warrior8Health").text("Monk Health " + monkDef)
        $("#enemy8Health").text("Enemy Health " + leviathanHealth)
        leviathanHealth -= monkAttk
        if (leviathanHealth >= 0) {
            monkDef -= leviathanCounterAttack
            if (monkDef <= 0) {
                alert("You Died")
                location.reload(false)
            } else {
                monkAttk += 5
            }
        } else {
            alert("Enemy had been defeated!")
            audioElement2.pause()
            $('#leviathanModal3').modal('toggle')
            $("#dragonModal3").modal()
            audioElement3.play()
        }
    })

    $("#dragonButton3").click(function () {
        $("#warrior9Health").text("Monk Health " + monkDef)
        $("#enemy9Health").text("Enemy Health " + stoneDragonHealth)
        stoneDragonHealth -= monkAttk
        if (stoneDragonHealth >= 0) {
            monkDef -= stoneDragonCounterAttack
            if (monkDef <= 0) {
                alert("You Died")
                location.reload(false)
            } else {
                monkAttk += 6
            }
        } else {
            alert("You have survived the dungeon press 'ok' to collect your prize!")
            audioElement3.pause()
            location.reload(false)
            window.open("https://www.youtube.com/watch?v=wqzLoXjFT34")
        }
    })


})
