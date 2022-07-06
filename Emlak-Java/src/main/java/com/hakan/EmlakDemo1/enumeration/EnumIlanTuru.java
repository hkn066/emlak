package com.hakan.EmlakDemo1.enumeration;


public enum EnumIlanTuru {
    SATILIK(0, "SATILIK"), KIRALIK(1, "KIRALIK");

    private Integer id;
    private String desc;

    EnumIlanTuru(Integer id, String desc) {
        this.id = id;
        this.desc = desc;
    }

    public static EnumIlanTuru getById(String desc) {
        for (EnumIlanTuru e : values()) {
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

