export const helper = {
    setInitialTitleImageOpacity: () => {
        var image1 = document.getElementById('titleImage1')
        var image2 = document.getElementById('titleImage2')

        image1.style.opacity = '100%';
        image2.style.opacity = '0%';
    },
    updateTitleImagesOpacity: (offset) => {
        var image1 = document.getElementById('titleImage1')
        var image2 = document.getElementById('titleImage2')
        if(offset !== 0){
            image1.style.opacity = `${100 - (offset / 7)}%`
            image2.style.opacity = `${(offset / 7)}%`
        }
        else {
            image1.style.opacity = '100%';
            image2.style.opacity = '0%';
        }
    }
}
