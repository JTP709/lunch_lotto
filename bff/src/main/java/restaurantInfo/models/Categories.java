package restaurantInfo.models;

public class Categories {

    private String alias;
    private String title;

    public Categories(){

    }

    public String getAlias(){
        return this.alias;
    }

    public String getTitle(){
        return this.title;
    }

    public void setAlias(String alias){
        this.alias=alias;
    }

    public void setTitle(String title){
        this.title=title;
    }
}
