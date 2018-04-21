package restaurantInfo.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Location {
    private String address1;
    private String city;
    private String zip_code;
    private String state;
    private List<String> display_address;

    public Location(){

    }

    public String getAddress1(){
        return this.address1;
    }

    public String getCity(){
        return this.city;
    }

    public String getZip_code(){
        return this.zip_code;
    }

    public String getState(){
        return this.state;
    }

    public List<String> getDisplay_address() {
        return display_address;
    }

    public void setAddress1(String address1) {
        this.address1 = address1;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setZip_code(String zip_code) {
        this.zip_code = zip_code;
    }

    public void setState(String state) {
        this.state = state;
    }

    public void setDisplay_address(List<String> display_address) {
        this.display_address = display_address;
    }
}

/*
address1": "600 Vine St",
        "address2": "",
        "address3": "",
        "city": "Cincinnati",
        "zip_code": "45202",
        "country": "US",
        "state": "OH",
        "display_address": [
            "600 Vine St",
            "Cincinnati, OH 45202"
        ],
        "cross_streets": ""
 */