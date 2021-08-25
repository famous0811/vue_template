module.exports={
    css:{
        loaderOptions:{
            sass:{
                prependData:`
                @import "@/style/styleAsset.scss";
                `
            }
        }
    }
}