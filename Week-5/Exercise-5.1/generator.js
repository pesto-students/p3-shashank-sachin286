// Generator
function doTask1() {
  return console.log("doTask1");
}

function doTask2() {
  return console.log("doTask2");
}

function doTask3() {
  return console.log("doTask3");
}

function* doAllTasks() {
  try {
    console.log("inside generator func");
    yield doTask1();
    yield doTask2();
    yield doTask3();
  } catch (e) {
    console.log(e.message);
  }
}

const doTasks = doAllTasks();
doTasks.next();
doTasks.next();
doTasks.next();

async function doAllTasksAsynAwait() {
  try {
    console.log("insdie async func");
    await doTask1();
    await doTask2();
    await doTask3();
  } catch (e) {
    console.log(e.message);
  }
}

doAllTasksAsynAwait();
