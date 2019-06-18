function test() {
    return true;
}
document.ondragstart = test;
document.onselectstart = test;
document.oncontextmenu = test;
document.oncopy = test;
