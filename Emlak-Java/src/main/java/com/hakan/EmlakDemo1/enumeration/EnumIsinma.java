package com.hakan.EmlakDemo1.enumeration;

import java.io.Serializable;

public enum EnumIsinma {

    Soba(0, "Sobalı"), Dogalgaz(1, "Dogalgaz"), Merkezi(2, "Merkezi Sistem");

    private Integer id;
    private String desc;

    EnumIsinma(Integer id, String desc) {
        this.id = id;
        this.desc = desc;
    }

    public static EnumIsinma getById(String desc) {
        for (EnumIsinma e : values()) {
            if (e.getDesc().equals(desc)) return e;
        }
        return null;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
}
