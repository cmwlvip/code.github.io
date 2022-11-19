/*
    单元格点击
    1、获取到所有元素的单元格列表
    2、遍历单元格列表，给每一个单元格添加事件
    3、给被点击的单元格添加类名 x
 */

/*
    切换玩家 
    1、创建一个储存当前玩家的变量（currentPlayer），默认值为x
    2、将添加单元格时写死的类名x，替换为变量
    3、切换到另一个玩家：在添加类名（下棋完成一步）后，根据当前当前玩家，得到另一个玩家
*/

/*
    使用枚举修改当前玩家
    1、创建字符串枚举（Player），提供x和o两个成员
    2、将成员X的值设置为：‘x’（类名）；将成员O的值设置为：‘o’（类名）
    3、将变量（currentPlayer）的类型设置为Player枚举类型,默认值为Player.X
    4、将所有用到x和o的地方全部用枚举成员代替
*/

/*
    判断平局

    1、创建变量（step），默认值为0
    2、玩家下棋后让step加 1
    3、在判赢的代码后面，判断step是否等于9
    4、如果等于9 说明是平局，不再执行后续代码
*/
/*
    展示获胜信息
    1、拿到相关的DOM元素
    2、展示获胜信息面板（通过style属性）
    3，展示获胜信息
*/
/*
    重新开始
    1、获取到重新开始按钮，并绑定事件
    2、在点击事件中重置游戏数据
    3、隐藏获胜信息，清空棋盘，移除单元格事件，重新给单元格绑定点击事件
    4、重置下棋次数，重置默认玩家X，重置下棋提示
*/

enum Player{
    X='x',
    O='o'
}
let cells=document.querySelectorAll('.cell')
//let gameBord=document.querySelector('#bord')
let  hover = document.getElementsByName('')//hover 棋牌变换 X ，O  这样就能获取
// console.log(hover)
let message=document.querySelector('#message')as HTMLDivElement
let winner=document.querySelector('#winner')as HTMLParagraphElement
let restart=document.querySelector('#restart')as HTMLButtonElement
console.log(cells)
//console.log(gameBord)
let currentPlayer:Player
let step:number

startGame()
//重新开始
restart.addEventListener('click',startGame)
    
    
// cells.forEach(function(item){
//     //console.log(item)
//     let cell=item as HTMLDivElement
//     cell.addEventListener('click',clickCell,{once:true})
// })

//棋盘中单元格的click事件处理程序

function clickCell(event:MouseEvent){
    let target=event.target as HTMLDivElement //类型断言
    target.classList.add('no-hover',currentPlayer)
    //调用判赢函数，判断是否获胜
    let isWin=checkWin(currentPlayer)
    if(isWin)
    {
        message.style.display='block'
        winner.innerText=currentPlayer+' won！！！'
        console.log('当前玩家获胜了',currentPlayer)
        return
    }
    step++
    if(step===9)
    {
        message.style.display='block'
        winner.innerText='平局'
        console.log('平局')
        return
    }
    
    //根据当前当前玩家，得到另一个玩家
    currentPlayer=currentPlayer===Player.X?Player.O:Player.X
    //处理下一步提示
    checkHover()
    //gameBord.classList.remove('x','o')
    //gameBord.classList.add(currentPlayer)
    
}

let winArry=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
// console.log(winArry[0])
// console.log(winArry[1][1])

//实现判赢函数
function checkWin(player:Player):boolean{
        /*
        实现判赢函数

        1、使用some方法遍历数组，并使用some方法的返回值作为函数返回值
        2、在some方法的回调函数中，获取每种获胜情况对应的3 个单元格
        3、判断这三个单元格是否同时包含当前玩家类名
        4、如果包含，玩家获胜，返回true停止循环，
        否则继续下一次循环
         */
        let isWin=winArry.some(function(item,idex){
            // 获取每种获胜情况对应的3 个单元格
            // console.log(item)
            // let cell1=cells[item[0]]
            // let cell2=cells[item[1]]
            // let cell3=cells[item[2]]
            // console.log(cell1,cell2,cell3)
            if(
                cells[item[0]].classList.contains(player)&&
                cells[item[1]].classList.contains(player)&&
                cells[item[2]].classList.contains(player)
            ){
                return true
            }
            return false
    })
    return isWin
}
  //处理下一步提示
function checkHover() {
    // for (let i = 0; i < hover.length; i++) {
    //     cells[i].setAttribute('hover', currentPlayer)
    // }
    cells.forEach(function(item,index){
        item.setAttribute('hover', currentPlayer)
    })
}
//重新开始函数
function startGame(){
    currentPlayer=Player.X
    step=0
    message.style.display='none'
    cells.forEach(function(item){
    let cell=item as HTMLDivElement
    cell.classList.remove(Player.X,Player.O,'no-hover')
    cell.removeEventListener('click',clickCell)
    cell.addEventListener('click',clickCell,{once:true})
    checkHover()
    })
}