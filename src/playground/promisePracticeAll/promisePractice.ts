// 模拟异步请求
function fetchData(url: String) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const data = { id: 1, name: 'John Doe' };
                resolve(data); // 模拟成功情况
            } catch (error) {
                reject(error); // 模拟失败情况
            }
        }, 1000); // 模拟1秒的网络延迟
    });
}

// 使用 async/await 处理异步操作
async function getData() {
    try {
        console.log('开始获取数据...');
        
        // 暂停执行，等待 fetchData 返回的 Promise 完成
        const data = await fetchData('https://api.example.com/data');
        
        // 恢复执行，输出获取的数据
        console.log('获取的数据:', data);
    } catch (error) {
        // 捕获异常，处理失败情况
        console.error('获取数据失败:', error);
    }
}

// 调用异步函数
getData();

// 外部代码继续执行
console.log('外部代码继续执行...');





// 最终的输出顺序将是：

// 开始获取数据...
// 外部代码继续执行...
// 获取的数据: { id: 1, name: 'John Doe' }