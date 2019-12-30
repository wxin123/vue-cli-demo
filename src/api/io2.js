const version = "INDEXEDDBVERSION";

// 打开数据库
function openDB(dbName) {
    localStorage.setItem(version, 1)
    let request = window.indexedDB.open(dbName, localStorage.getItem(version));
    request.onerror = function () {
        window.console.log('数据库打开报错');
    }
    request.onsuccess = function (event) {
        window.console.log('数据库打开成功');
        window.console.log(event.target);
    }
    request.onupgradeneeded = function (event) {
        window.console.log(event.target);
    }
}

// 删除数据库
function deleteDB(dbName) {
    window.indexedDB.deleteDatabase(dbName);
}

// 创建表
function createTable(dbName, tableName) {
    let ver = localStorage.getItem(version)
    ver++
    let request = window.indexedDB.open(dbName, ver);
    localStorage.setItem(version, ver)
    let db = null;
    request.onupgradeneeded = function (event) {
        db = event.target.result;
        window.console.log(db)
        if (!db.objectStoreNames.contains(tableName)) {
            db.createObjectStore(tableName, {keyPath: 'id', autoIncrement: true});
        }
    }
    request.onerror = function (event) {
        window.console.log(event, 'createTableError')
    }
}

// 插入数据
function insert(dbName, tableName, param, callback) {
    let request = window.indexedDB.open(dbName, localStorage.getItem(version) || 1);
    let db = null;
    request.onsuccess = function (event) {
        db = event.target.result;
        window.console.log(param)
        let transaction = db.transaction([tableName], 'readwrite');
        let objStore = transaction.objectStore(tableName);
        objStore.add(param);
        callback({
            status: 200,
            data: {},
            message: '成功',
        })
    }
    request.onerror = function (event) {
        window.console.log(event, 'insertError')
    }
}

// 删除数据
function deleteById(dbName, tableName, id, callback) {
    let request = window.indexedDB.open(dbName, localStorage.getItem(version) || 1);
    let db = null;
    request.onsuccess = function (event) {
        db = event.target.result;
        let transaction = db.transaction([tableName], 'readwrite');
        let objStore = transaction.objectStore(tableName);
        // 删除主键为1的数据
        let res = objStore.delete(id);
        // 加载主键为1的数据
        res.onsuccess = function () {
            callback({
                status: 200,
                data: {},
                message: '成功',
            })
        }
    }
    request.onerror = function (event) {
        window.console.log(event, 'deleteByIdError')
    }
}

// 更新数据
function update(dbName, tableName, param, callback) {
    let request = window.indexedDB.open(dbName, localStorage.getItem(version) || 1);
    let db;
    request.onsuccess = function (event) {
        db = event.target.result;
        let transaction = db.transaction([tableName], 'readwrite');
        let objStore = transaction.objectStore(tableName);
        let id = param.id
        // 更新数据
        objStore.put(param);
        // 获取主键为1的数据
        let req = objStore.get(id);
        // 加载主键为1的数据
        req.onsuccess = function (e) {
            let cursor = e.target.result;
            if (cursor) {
                callback({
                    status: 200,
                    data: cursor.value,
                    message: '成功',
                });
            } else {
                callback({
                    status: 200,
                    data: {},
                    message: '成功',
                });
            }
        }
    }
    request.onerror = function (event) {
        window.console.log(event, 'updateError')
    }
}

// 根据Id获取
function getById(dbName, tableName, id, callback) {
    let request = window.indexedDB.open(dbName, localStorage.getItem(version) || 1);
    let db = null;
    request.onsuccess = function (event) {
        db = event.target.result;
        let transaction = db.transaction([tableName], 'readwrite');
        let objStore = transaction.objectStore(tableName);
        // 读取数据
        let req = objStore.get(id);
        req.onsuccess = function () {
            callback({
                status: 200,
                data: req.result,
                message: '成功',
            })
        }
    }
    request.onerror = function (event) {
        window.console.log(event, 'getByIdError')
    }
}

// 获取列表
function getList(dbName, tableName, param, callback) {
    let request = window.indexedDB.open(dbName, localStorage.getItem(version) || 1);
    let db = null;
    let list = [];
    request.onsuccess = function (event) {
        db = event.target.result;
        let transaction = db.transaction([tableName], 'readwrite');
        let objStore = transaction.objectStore(tableName);
        window.console.log((param.pageNumber - 1) * param.pageSize + 1, param.pageSize * param.pageNumber)
        let range = IDBKeyRange.bound((param.pageNumber - 1) * param.pageSize , param.pageSize * param.pageNumber, true, false);
        // 使用流标 openCursor
        window.console.log(objStore.keyPath)
        objStore.openCursor(range, 'next').onsuccess = function (e) {
            let cursor = e.target.result;
            if (cursor) {
                list.push(cursor.value);
                cursor.continue();
            } else {
                let countRequest = objStore.count();
                countRequest.onsuccess = function () {
                    window.console.log(countRequest.result);
                    callback({
                        status: 200,
                        data: {
                            list: list,
                            count: countRequest.result
                        },
                        message: '成功'
                    })
                }
            }
        }
    }
    request.onerror = function (event) {
        window.console.log(event, 'getListError')
    }
}

export default {
    openDB,
    deleteDB,
    createTable,
    insert,
    deleteById,
    getById,
    getList,
    update
}
