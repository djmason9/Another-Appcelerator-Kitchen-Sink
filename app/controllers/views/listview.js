function fetchData() {
    // You would usually fetch your remote data here
    setTimeout(function() {
        $.refresh.endRefreshing();
    }, 1000);
}

function handleListViewClick(e) {
    if (OS_IOS){
        this.deselectItem(e.sectionIndex, e.itemIndex);
    }
}