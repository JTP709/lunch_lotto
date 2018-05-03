package restaurantInfo.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@JsonIgnoreProperties(ignoreUnknown = true)
public class RestaurantInfo {

    private String id;
    private String name;
    private String url;
    private List<Categories> categories;
    private Location location;
    private String price;
    private List<String> photos;
    private String display_phone;
    private String alias;


    public RestaurantInfo() {

    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getUrl() { return url; }

    public List<String> getCategories() {
        return categories.stream()
                .map(category -> category.getTitle())
                .collect(Collectors.toList());
    }

    public Location getLocation() {
        return location;
    }

    public String getPrice() { return price; }

    public List<String> getPhotos(){
        return photos;
    }

    public String getDisplay_phone() {
        return display_phone;
    }

    public String getAlias() {
        return alias;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void setCategories(List<Categories> categories) {
        this.categories = categories;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public void setPhotos(List<String> photos) {
        this.photos = photos;
    }

    public void setDisplay_phone(String display_phone) {
        this.display_phone = display_phone;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }
}
