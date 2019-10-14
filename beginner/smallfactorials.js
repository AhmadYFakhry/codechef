function smallFacotrial(n) {
    if(n === 1) return 1;
    return n * smallFacotrial(n - 1);
}