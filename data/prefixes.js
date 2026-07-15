/*
 * German vehicle registration (Kfz-Kennzeichen) prefix data.
 *
 * Source: Wikipedia, "Liste der Kfz-Kennzeichen in Deutschland"
 *   https://de.wikipedia.org/wiki/Liste_der_Kfz-Kennzeichen_in_Deutschland
 *   (page content as of "Stand 1. Dezember 2023", the currently issuable
 *   distinguishing signs, including signs reissued since the 2012
 *   "Kennzeichenliberalisierung").
 * Historical (status: "historical") entries -- prefixes that are no longer
 * issued and are not already covered by a current entry above -- are from
 * Wikipedia, "Liste der deutschen Kfz-Kennzeichen, die nicht mehr ausgegeben
 * werden":
 *   https://de.wikipedia.org/wiki/Liste_der_deutschen_Kfz-Kennzeichen,_die_nicht_mehr_ausgegeben_werden
 *
 * Dataset last reviewed against the sources above: 2026-07-15.
 *
 * Structure: PLATE_PREFIXES maps each prefix (uppercase letters, 1-4 chars)
 * to an array of one or more entries, since a prefix can be shared by more
 * than one district/city or reused for more than one purpose. Each entry:
 *   place  - city/district/authority name
 *   state  - German federal state (Bundesland), or "Germany (federal)" for
 *            nationwide/federal reserved signs
 *   type   - "kreisfreie Stadt" (independent city), "Landkreis" (district),
 *            "Städteregion" / "Regionalverband" (city-region), "Stadtstaat"
 *            (city-state), "Sonderzeichen" (special/reserved sign), or
 *            "historical" (no longer issued)
 *   status - "current" or "historical"
 *   note   - optional free-text clarification
 *   uncertain - true if the entry could not be fully verified against the
 *            source and should be treated with caution / reviewed further
 *
 * To correct or extend this data: edit the object below directly. Keep
 * prefix keys uppercase. If you add a new prefix, keep the array format
 * even for a single entry. Re-run a JSON validator (e.g. paste the object
 * body into a JSON linter) after hand-editing, since this file is loaded
 * directly by the browser with no build step to catch typos.
 */

const PLATE_PREFIXES = {
  "A": [
    {
      "place": "Augsburg",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Landkreis Augsburg",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "AA": [
    {
      "place": "Ostalbkreis",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "AB": [
    {
      "place": "Aschaffenburg",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Landkreis Aschaffenburg",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ABG": [
    {
      "place": "Landkreis Altenburger Land",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ABI": [
    {
      "place": "Landkreis Anhalt-Bitterfeld",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "AC": [
    {
      "place": "Städteregion Aachen",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Städteregion"
    }
  ],
  "AE": [
    {
      "place": "Vogtlandkreis",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "AH": [
    {
      "place": "Kreis Borken",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "AIB": [
    {
      "place": "Landkreis München",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Rosenheim",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "AIC": [
    {
      "place": "Landkreis Aichach-Friedberg",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "AK": [
    {
      "place": "Landkreis Altenkirchen (Westerwald)",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "AL": [
    {
      "note": "Superseded by MK",
      "place": "Altena",
      "state": "North Rhine-Westphalia",
      "status": "historical",
      "type": "historical"
    }
  ],
  "ALF": [
    {
      "place": "Landkreis Hildesheim",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ALS": [
    {
      "note": "Superseded by VB",
      "place": "Alsfeld, seit 1972 Vogelsbergkreis",
      "state": "Hesse",
      "status": "historical",
      "type": "historical"
    }
  ],
  "ALZ": [
    {
      "place": "Landkreis Aschaffenburg",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "AM": [
    {
      "place": "Amberg",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "AN": [
    {
      "place": "Ansbach",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Landkreis Ansbach",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ANA": [
    {
      "place": "Erzgebirgskreis",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ANG": [
    {
      "place": "Landkreis Uckermark",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ANK": [
    {
      "place": "Landkreis Vorpommern-Greifswald ohne die Stadt Greifswald",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "AP": [
    {
      "place": "Landkreis Weimarer Land",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "APD": [
    {
      "place": "Landkreis Weimarer Land",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "AR": [
    {
      "note": "Superseded by HSK",
      "place": "Arnsberg",
      "state": "North Rhine-Westphalia",
      "status": "historical",
      "type": "historical"
    }
  ],
  "ARN": [
    {
      "place": "Ilm-Kreis",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ART": [
    {
      "place": "Kyffhäuserkreis",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "AS": [
    {
      "place": "Landkreis Amberg-Sulzbach",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ASD": [
    {
      "note": "Superseded by EL",
      "place": "Aschendorf → Aschendorf-Hümmling",
      "state": "Lower Saxony",
      "status": "historical",
      "type": "historical"
    }
  ],
  "ASL": [
    {
      "place": "Salzlandkreis",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ASZ": [
    {
      "place": "Erzgebirgskreis",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "AT": [
    {
      "place": "Landkreis Vorpommern-Greifswald ohne die Stadt Greifswald",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "AU": [
    {
      "place": "Erzgebirgskreis",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "AUR": [
    {
      "place": "Landkreis Aurich",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "AW": [
    {
      "place": "Landkreis Ahrweiler",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "AZ": [
    {
      "place": "Landkreis Alzey-Worms",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "AZE": [
    {
      "place": "Landkreis Anhalt-Bitterfeld",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "AÖ": [
    {
      "place": "Landkreis Altötting",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "B": [
    {
      "place": "Berlin",
      "state": "Berlin",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Berlin Senate & House of Representatives (reserved)",
      "state": "Berlin",
      "status": "current",
      "type": "Sonderzeichen"
    },
    {
      "place": "Berlin — diplomatic corps (reserved)",
      "state": "Berlin",
      "status": "current",
      "type": "Sonderzeichen"
    }
  ],
  "BA": [
    {
      "place": "Bamberg",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Landkreis Bamberg",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BAD": [
    {
      "place": "Baden-Baden",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "BAR": [
    {
      "place": "Landkreis Barnim",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BB": [
    {
      "place": "Landkreis Böblingen",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BBG": [
    {
      "place": "Salzlandkreis",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BBL": [
    {
      "place": "Brandenburg state government, parliament & police (reserved)",
      "state": "Brandenburg",
      "status": "current",
      "type": "Sonderzeichen"
    }
  ],
  "BC": [
    {
      "place": "Landkreis Biberach",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BCH": [
    {
      "place": "Neckar-Odenwald-Kreis",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BD": [
    {
      "place": "Federal institutions (Bundestag, Bundesrat, federal government, ministries, etc.)",
      "state": "Germany (federal)",
      "status": "current",
      "type": "Sonderzeichen"
    }
  ],
  "BE": [
    {
      "place": "Kreis Warendorf",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BED": [
    {
      "place": "Landkreis Mittelsachsen",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BEI": [
    {
      "note": "Superseded by EI",
      "place": "Beilngries",
      "state": "Bavaria",
      "status": "historical",
      "type": "historical"
    }
  ],
  "BEL": [
    {
      "place": "Landkreis Potsdam-Mittelmark",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BER": [
    {
      "place": "Landkreis Barnim",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BF": [
    {
      "place": "Kreis Steinfurt",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BG": [
    {
      "note": "Superseded by BP",
      "place": "Bundesgrenzschutz",
      "state": "Germany (federal)",
      "status": "historical",
      "type": "historical"
    }
  ],
  "BGD": [
    {
      "place": "Landkreis Berchtesgadener Land",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BGL": [
    {
      "place": "Landkreis Berchtesgadener Land",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BH": [
    {
      "place": "Ortenaukreis",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Rastatt",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BI": [
    {
      "place": "Bielefeld",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "BID": [
    {
      "place": "Landkreis Marburg-Biedenkopf",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BIN": [
    {
      "place": "Landkreis Mainz-Bingen",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BIR": [
    {
      "place": "Landkreis Birkenfeld",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BIT": [
    {
      "place": "Eifelkreis Bitburg-Prüm",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BIW": [
    {
      "place": "Landkreis Bautzen",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BK": [
    {
      "place": "Rems-Murr-Kreis",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Schwäbisch Hall",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Börde",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BKS": [
    {
      "place": "Landkreis Bernkastel-Wittlich",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BL": [
    {
      "place": "Zollernalbkreis",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BLB": [
    {
      "place": "Kreis Siegen-Wittgenstein",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BLK": [
    {
      "place": "Burgenlandkreis",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BM": [
    {
      "place": "Rhein-Erft-Kreis",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BN": [
    {
      "place": "Bonn",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Bonn — diplomatic corps (reserved)",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Sonderzeichen"
    }
  ],
  "BNA": [
    {
      "place": "Landkreis Leipzig",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BO": [
    {
      "place": "Bochum",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "BOG": [
    {
      "place": "Landkreis Straubing-Bogen",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BOH": [
    {
      "place": "Kreis Borken",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BOR": [
    {
      "place": "Kreis Borken",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BOT": [
    {
      "place": "Bottrop",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "BP": [
    {
      "place": "Federal Police (Bundespolizei)",
      "state": "Germany (federal)",
      "status": "current",
      "type": "Sonderzeichen"
    }
  ],
  "BR": [
    {
      "place": "Landkreis Karlsruhe",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BRA": [
    {
      "place": "Landkreis Wesermarsch",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BRB": [
    {
      "place": "Brandenburg an der Havel",
      "state": "Brandenburg",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "BRG": [
    {
      "place": "Landkreis Jerichower Land",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BRI": [
    {
      "note": "Superseded by HSK",
      "place": "Brilon",
      "state": "North Rhine-Westphalia",
      "status": "historical",
      "type": "historical"
    }
  ],
  "BRK": [
    {
      "place": "Landkreis Bad Kissingen",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BRL": [
    {
      "place": "Landkreis Goslar",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BRV": [
    {
      "place": "Landkreis Rotenburg (Wümme)",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BS": [
    {
      "place": "Braunschweig",
      "state": "Lower Saxony",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "BSB": [
    {
      "place": "Landkreis Osnabrück",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BSK": [
    {
      "place": "Landkreis Oder-Spree",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BT": [
    {
      "place": "Bayreuth",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Landkreis Bayreuth",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BTF": [
    {
      "place": "Landkreis Anhalt-Bitterfeld",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BU": [
    {
      "note": "Superseded by H",
      "place": "Burgdorf",
      "state": "Lower Saxony",
      "status": "historical",
      "type": "historical"
    }
  ],
  "BUL": [
    {
      "place": "Landkreis Amberg-Sulzbach",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Schwandorf",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BW": [
    {
      "place": "Federal Waterways & Shipping Administration",
      "state": "Germany (federal)",
      "status": "current",
      "type": "Sonderzeichen"
    }
  ],
  "BWL": [
    {
      "place": "Baden-Württemberg state government, parliament & police (reserved)",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Sonderzeichen"
    }
  ],
  "BYL": [
    {
      "place": "Bavaria state government & parliament (reserved)",
      "state": "Bavaria",
      "status": "current",
      "type": "Sonderzeichen"
    }
  ],
  "BZ": [
    {
      "place": "Landkreis Bautzen",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BZA": [
    {
      "note": "Superseded by LD",
      "place": "Bergzabern",
      "state": "Rhineland-Palatinate",
      "status": "historical",
      "type": "historical"
    }
  ],
  "BÖ": [
    {
      "place": "Landkreis Börde",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BÜD": [
    {
      "place": "Wetteraukreis",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BÜR": [
    {
      "place": "Kreis Paderborn",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BÜS": [
    {
      "place": "Gemeinde Büsingen am Hochrhein (Gemeinde im Landkreis Konstanz, deutsche Exklave in der Schweiz)",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "BÜZ": [
    {
      "place": "Landkreis Rostock",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "C": [
    {
      "place": "Chemnitz",
      "state": "Saxony",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "CA": [
    {
      "place": "Landkreis Oberspreewald-Lausitz",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "CAS": [
    {
      "place": "Kreis Recklinghausen",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "CB": [
    {
      "place": "Cottbus",
      "state": "Brandenburg",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "CE": [
    {
      "place": "Landkreis Celle",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "CHA": [
    {
      "place": "Landkreis Cham",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "CLP": [
    {
      "place": "Landkreis Cloppenburg",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "CLZ": [
    {
      "place": "Landkreis Goslar",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "CO": [
    {
      "place": "Coburg und Landkreis Coburg (→ Zweckverband Zulassungsstelle Coburg)",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "COC": [
    {
      "place": "Landkreis Cochem-Zell",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "COE": [
    {
      "place": "Kreis Coesfeld",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "CR": [
    {
      "place": "Landkreis Schwäbisch Hall",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "CUX": [
    {
      "place": "Landkreis Cuxhaven",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "CW": [
    {
      "place": "Landkreis Calw",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "D": [
    {
      "place": "Düsseldorf",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "DA": [
    {
      "place": "Landkreis Darmstadt-Dieburg und Stadt Darmstadt",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "DAH": [
    {
      "place": "Landkreis Dachau",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "DAN": [
    {
      "place": "Landkreis Lüchow-Dannenberg",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "DAU": [
    {
      "place": "Landkreis Vulkaneifel",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "DB": [
    {
      "note": "No federal state on record for this institutional/non-geographic code; needs review.",
      "place": "Deutsche Bundesbahn",
      "state": "Uncertain — review needed",
      "status": "historical",
      "type": "historical",
      "uncertain": true
    }
  ],
  "DBR": [
    {
      "place": "Landkreis Rostock",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "DD": [
    {
      "place": "Dresden",
      "state": "Saxony",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Saxony state police (reserved)",
      "state": "Saxony",
      "status": "current",
      "type": "Sonderzeichen"
    }
  ],
  "DE": [
    {
      "place": "Dessau-Roßlau",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "DEG": [
    {
      "place": "Landkreis Deggendorf",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "DEL": [
    {
      "place": "Delmenhorst",
      "state": "Lower Saxony",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "DGF": [
    {
      "place": "Landkreis Dingolfing-Landau",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "DH": [
    {
      "place": "Landkreis Diepholz",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "DI": [
    {
      "place": "Landkreis Darmstadt-Dieburg",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "DIL": [
    {
      "place": "Lahn-Dill-Kreis",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "DIN": [
    {
      "place": "Kreis Wesel",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "DIZ": [
    {
      "place": "Rhein-Lahn-Kreis",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "DKB": [
    {
      "place": "Landkreis Ansbach",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "DL": [
    {
      "place": "Landkreis Mittelsachsen",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "DLG": [
    {
      "place": "Landkreis Dillingen an der Donau",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "DM": [
    {
      "place": "Landkreis Mecklenburgische Seenplatte ohne die Stadt Neubrandenburg",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "DN": [
    {
      "place": "Kreis Düren",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "DO": [
    {
      "place": "Dortmund",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "DON": [
    {
      "place": "Landkreis Donau-Ries",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "DS": [
    {
      "place": "Schwarzwald-Baar-Kreis",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "DT": [
    {
      "place": "Kreis Lippe",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "DU": [
    {
      "place": "Duisburg",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "DUD": [
    {
      "place": "Landkreis Göttingen ohne die Stadt Göttingen",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "DW": [
    {
      "place": "Landkreis Sächsische Schweiz-Osterzgebirge",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "DZ": [
    {
      "place": "Landkreis Nordsachsen",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "DÜW": [
    {
      "place": "Landkreis Bad Dürkheim",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "E": [
    {
      "place": "Essen",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "EA": [
    {
      "place": "Wartburgkreis",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "EB": [
    {
      "place": "Landkreis Nordsachsen",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "EBE": [
    {
      "place": "Landkreis Ebersberg",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "EBN": [
    {
      "place": "Landkreis Haßberge",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "EBS": [
    {
      "place": "Landkreis Bayreuth",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Forchheim",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Kulmbach",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ECK": [
    {
      "place": "Kreis Rendsburg-Eckernförde",
      "state": "Schleswig-Holstein",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ED": [
    {
      "place": "Landkreis Erding",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "EE": [
    {
      "place": "Landkreis Elbe-Elster",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "EF": [
    {
      "place": "Erfurt",
      "state": "Thuringia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "EG": [
    {
      "place": "Landkreis Rottal-Inn",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "EH": [
    {
      "place": "Landkreis Oder-Spree",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "EHI": [
    {
      "note": "Superseded by UL",
      "place": "Ehingen",
      "state": "Baden-Württemberg",
      "status": "historical",
      "type": "historical"
    }
  ],
  "EI": [
    {
      "place": "Landkreis Eichstätt",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "EIC": [
    {
      "place": "Landkreis Eichsfeld",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "EIH": [
    {
      "note": "Superseded by EI",
      "place": "kreisfreie Stadt Eichstätt und Landkreis Eichstätt",
      "state": "Bavaria",
      "status": "historical",
      "type": "historical"
    }
  ],
  "EIL": [
    {
      "place": "Landkreis Mansfeld-Südharz",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "EIN": [
    {
      "place": "Landkreis Northeim",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "EIS": [
    {
      "place": "Saale-Holzland-Kreis",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "EL": [
    {
      "place": "Landkreis Emsland",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "EM": [
    {
      "place": "Landkreis Emmendingen",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "EMD": [
    {
      "place": "Emden",
      "state": "Lower Saxony",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "EMS": [
    {
      "place": "Rhein-Lahn-Kreis",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "EN": [
    {
      "place": "Ennepe-Ruhr-Kreis",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ER": [
    {
      "place": "Erlangen",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "ERB": [
    {
      "place": "Odenwaldkreis",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ERH": [
    {
      "place": "Landkreis Erlangen-Höchstadt",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ERK": [
    {
      "place": "Kreis Heinsberg",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ERZ": [
    {
      "place": "Erzgebirgskreis",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ES": [
    {
      "place": "Landkreis Esslingen",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ESA": [
    {
      "note": "Superseded by WAK",
      "place": "Eisenach",
      "state": "Thuringia",
      "status": "historical",
      "type": "historical"
    }
  ],
  "ESB": [
    {
      "place": "Landkreis Amberg-Sulzbach",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Bayreuth",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Neustadt an der Waldnaab",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Nürnberger Land",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ESW": [
    {
      "place": "Werra-Meißner-Kreis",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "EU": [
    {
      "place": "Kreis Euskirchen",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "EUT": [
    {
      "note": "Superseded by OH",
      "place": "Eutin",
      "state": "Schleswig-Holstein",
      "status": "historical",
      "type": "historical"
    }
  ],
  "EW": [
    {
      "place": "Landkreis Barnim",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "F": [
    {
      "place": "Frankfurt am Main",
      "state": "Hesse",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "FAL": [
    {
      "note": "Superseded by HK",
      "place": "Fallingbostel, ab 1977 Soltau-Fallingbostel",
      "state": "Lower Saxony",
      "status": "historical",
      "type": "historical"
    }
  ],
  "FB": [
    {
      "place": "Wetteraukreis",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "FD": [
    {
      "place": "Landkreis Fulda",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "FDB": [
    {
      "place": "Landkreis Aichach-Friedberg",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "FDS": [
    {
      "place": "Landkreis Freudenstadt",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "FEU": [
    {
      "place": "Landkreis Ansbach",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "FF": [
    {
      "place": "Frankfurt (Oder)",
      "state": "Brandenburg",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "FFB": [
    {
      "place": "Landkreis Fürstenfeldbruck",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "FG": [
    {
      "place": "Landkreis Mittelsachsen",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "FH": [
    {
      "note": "Superseded by MTK",
      "place": "Frankfurt-Höchst → Main-Taunus-Kreis",
      "state": "Hesse",
      "status": "historical",
      "type": "historical"
    }
  ],
  "FI": [
    {
      "place": "Landkreis Elbe-Elster",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "FKB": [
    {
      "place": "Landkreis Waldeck-Frankenberg",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "FL": [
    {
      "place": "Flensburg",
      "state": "Schleswig-Holstein",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "FLÖ": [
    {
      "place": "Landkreis Mittelsachsen",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "FN": [
    {
      "place": "Bodenseekreis",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "FO": [
    {
      "place": "Landkreis Forchheim",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "FOR": [
    {
      "place": "Landkreis Spree-Neiße",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "FR": [
    {
      "place": "Freiburg im Breisgau",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Landkreis Breisgau-Hochschwarzwald",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "FRG": [
    {
      "place": "Landkreis Freyung-Grafenau",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "FRI": [
    {
      "place": "Landkreis Friesland",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "FRW": [
    {
      "place": "Landkreis Märkisch-Oderland",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "FS": [
    {
      "place": "Landkreis Freising",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "FT": [
    {
      "place": "Frankenthal (Pfalz)",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "FTL": [
    {
      "place": "Landkreis Sächsische Schweiz-Osterzgebirge",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "FW": [
    {
      "place": "Landkreis Oder-Spree",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "FZ": [
    {
      "place": "Schwalm-Eder-Kreis",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "FÜ": [
    {
      "place": "Fürth",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Landkreis Fürth (sonst)*",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "FÜS": [
    {
      "place": "Landkreis Ostallgäu",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "G": [
    {
      "place": "Gera",
      "state": "Thuringia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "GA": [
    {
      "place": "Altmarkkreis Salzwedel",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GAN": [
    {
      "place": "Landkreis Northeim",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GAP": [
    {
      "place": "Landkreis Garmisch-Partenkirchen",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GC": [
    {
      "place": "Landkreis Zwickau",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GD": [
    {
      "place": "Ostalbkreis",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GDB": [
    {
      "place": "Landkreis Nordwestmecklenburg ohne die Stadt Wismar",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GE": [
    {
      "place": "Gelsenkirchen",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "GEL": [
    {
      "place": "Kreis Kleve",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GEM": [
    {
      "note": "Superseded by MSP",
      "place": "Gemünden am Main",
      "state": "Bavaria",
      "status": "historical",
      "type": "historical"
    }
  ],
  "GEO": [
    {
      "place": "Landkreis Haßberge",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Schweinfurt",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GER": [
    {
      "place": "Landkreis Germersheim",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GF": [
    {
      "place": "Landkreis Gifhorn",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GG": [
    {
      "place": "Kreis Groß-Gerau",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GHA": [
    {
      "place": "Landkreis Leipzig",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GHC": [
    {
      "place": "Landkreis Wittenberg",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GI": [
    {
      "place": "Landkreis Gießen",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GK": [
    {
      "place": "Kreis Heinsberg",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GL": [
    {
      "place": "Rheinisch-Bergischer Kreis",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GLA": [
    {
      "place": "Kreis Recklinghausen",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GM": [
    {
      "place": "Oberbergischer Kreis",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GMN": [
    {
      "place": "Landkreis Vorpommern-Rügen ohne die Stadt Stralsund",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GN": [
    {
      "place": "Main-Kinzig-Kreis",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GNT": [
    {
      "place": "Landkreis Jerichower Land",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GOA": [
    {
      "place": "Rhein-Hunsrück-Kreis",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GOH": [
    {
      "place": "Rhein-Lahn-Kreis",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GP": [
    {
      "place": "Landkreis Göppingen",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GR": [
    {
      "place": "Landkreis Görlitz",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GRA": [
    {
      "place": "Landkreis Freyung-Grafenau",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GRH": [
    {
      "place": "Landkreis Meißen",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GRI": [
    {
      "place": "Landkreis Rottal-Inn",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GRM": [
    {
      "place": "Landkreis Leipzig",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GRS": [
    {
      "note": "Superseded by OHV",
      "place": "Gransee",
      "state": "Brandenburg",
      "status": "historical",
      "type": "historical"
    }
  ],
  "GRZ": [
    {
      "place": "Landkreis Greiz",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GS": [
    {
      "place": "Landkreis Goslar",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GT": [
    {
      "place": "Kreis Gütersloh",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GTH": [
    {
      "place": "Landkreis Gotha",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GUB": [
    {
      "place": "Landkreis Spree-Neiße",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GUN": [
    {
      "place": "Landkreis Weißenburg-Gunzenhausen",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GV": [
    {
      "place": "Rhein-Kreis Neuss",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GVM": [
    {
      "place": "Landkreis Nordwestmecklenburg ohne die Stadt Wismar",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GW": [
    {
      "place": "Landkreis Vorpommern-Greifswald ohne die Stadt Greifswald",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GZ": [
    {
      "place": "Landkreis Günzburg",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GÖ": [
    {
      "place": "Landkreis Göttingen",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "GÜ": [
    {
      "place": "Landkreis Rostock",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "H": [
    {
      "place": "Region Hannover",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Regionalverband"
    }
  ],
  "HA": [
    {
      "place": "Hagen",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "HAB": [
    {
      "place": "Landkreis Bad Kissingen",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HAL": [
    {
      "place": "Halle (Saale)",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "HAM": [
    {
      "place": "Hamm",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "HAS": [
    {
      "place": "Landkreis Haßberge",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HB": [
    {
      "place": "Bremen, Senat und Bürgerschaft",
      "state": "Bremen",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Bremerhaven (X-9999)",
      "state": "Bremen",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "HBN": [
    {
      "place": "Landkreis Hildburghausen",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HBS": [
    {
      "place": "Landkreis Harz",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HC": [
    {
      "place": "Landkreis Mittelsachsen",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HCH": [
    {
      "place": "Landkreis Freudenstadt",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Zollernalbkreis",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HD": [
    {
      "place": "Heidelberg",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Rhein-Neckar-Kreis",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HDH": [
    {
      "place": "Landkreis Heidenheim",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HDL": [
    {
      "place": "Landkreis Börde",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HE": [
    {
      "place": "Landkreis Helmstedt",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HEB": [
    {
      "place": "Landkreis Nürnberger Land",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HEF": [
    {
      "place": "Landkreis Hersfeld-Rotenburg",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HEI": [
    {
      "place": "Kreis Dithmarschen",
      "state": "Schleswig-Holstein",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HEL": [
    {
      "place": "Hesse state government & parliament (reserved)",
      "state": "Hesse",
      "status": "current",
      "type": "Sonderzeichen"
    }
  ],
  "HER": [
    {
      "place": "Herne",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "HET": [
    {
      "place": "Landkreis Mansfeld-Südharz",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HF": [
    {
      "place": "Kreis Herford",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HG": [
    {
      "place": "Hochtaunuskreis",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HGN": [
    {
      "place": "Landkreis Ludwigslust-Parchim",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HGW": [
    {
      "place": "Greifswald (große kreisangehörige Stadt im Landkreis Vorpommern-Greifswald)",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "HH": [
    {
      "note": "Official name: Freie und Hansestadt Hamburg. Also used by the Senate and Bürgerschaft (state parliament).",
      "place": "Hamburg",
      "state": "Hamburg",
      "status": "current",
      "type": "Stadtstaat"
    }
  ],
  "HHM": [
    {
      "place": "Burgenlandkreis",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HI": [
    {
      "place": "Landkreis Hildesheim",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HIG": [
    {
      "place": "Landkreis Eichsfeld",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HIP": [
    {
      "place": "Landkreis Roth",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HK": [
    {
      "place": "Landkreis Heidekreis",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HL": [
    {
      "place": "Lübeck",
      "state": "Schleswig-Holstein",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "HM": [
    {
      "place": "Landkreis Hameln-Pyrmont",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HMÜ": [
    {
      "place": "Landkreis Göttingen ohne die Stadt Göttingen",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HN": [
    {
      "place": "Heilbronn",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Landkreis Heilbronn",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HO": [
    {
      "place": "Hof",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Landkreis Hof",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HOG": [
    {
      "place": "Landkreis Kassel",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HOH": [
    {
      "place": "Landkreis Haßberge",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HOL": [
    {
      "place": "Landkreis Holzminden",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HOM": [
    {
      "place": "Saarpfalz-Kreis ohne die Stadt St. Ingbert",
      "state": "Saarland",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HOR": [
    {
      "place": "Landkreis Freudenstadt",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HOT": [
    {
      "place": "Landkreis Zwickau",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HP": [
    {
      "place": "Landkreis Bergstraße",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HR": [
    {
      "place": "Schwalm-Eder-Kreis",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HRO": [
    {
      "place": "Rostock",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "HS": [
    {
      "place": "Kreis Heinsberg",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HSK": [
    {
      "place": "Hochsauerlandkreis",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HST": [
    {
      "place": "Stralsund (große kreisangehörige Stadt im Landkreis Vorpommern-Rügen)",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "HU": [
    {
      "place": "Hanau",
      "state": "Hesse",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Main-Kinzig-Kreis",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HUS": [
    {
      "note": "Superseded by NF",
      "place": "Husum",
      "state": "Schleswig-Holstein",
      "status": "historical",
      "type": "historical"
    }
  ],
  "HV": [
    {
      "place": "Landkreis Stendal",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HVL": [
    {
      "place": "Landkreis Havelland",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HW": [
    {
      "note": "Superseded by W",
      "place": "Halle",
      "state": "North Rhine-Westphalia",
      "status": "historical",
      "type": "historical"
    }
  ],
  "HWI": [
    {
      "place": "Wismar (große kreisangehörige Stadt im Landkreis Nordwestmecklenburg)",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "HX": [
    {
      "place": "Kreis Höxter",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HY": [
    {
      "place": "Landkreis Bautzen",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HZ": [
    {
      "place": "Landkreis Harz",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HÖS": [
    {
      "place": "Landkreis Erlangen-Höchstadt",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "HÜN": [
    {
      "note": "Superseded by FD",
      "place": "Hünfeld",
      "state": "Hesse",
      "status": "historical",
      "type": "historical"
    }
  ],
  "IGB": [
    {
      "place": "St. Ingbert (Mittelstadt im Saarpfalz-Kreis)",
      "state": "Saarland",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "IK": [
    {
      "place": "Ilm-Kreis",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "IL": [
    {
      "place": "Ilm-Kreis",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ILL": [
    {
      "place": "Landkreis Neu-Ulm",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "IN": [
    {
      "place": "Ingolstadt",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "IS": [
    {
      "note": "Superseded by MK",
      "place": "kreisfreie Stadt Iserlohn und Kreis Iserlohn",
      "state": "North Rhine-Westphalia",
      "status": "historical",
      "type": "historical"
    }
  ],
  "IZ": [
    {
      "place": "Kreis Steinburg",
      "state": "Schleswig-Holstein",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "J": [
    {
      "place": "Jena",
      "state": "Thuringia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "JB": [
    {
      "place": "Landkreis Teltow-Fläming",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "JE": [
    {
      "place": "Landkreis Wittenberg",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "JEV": [
    {
      "note": "Superseded by FRI",
      "place": "Jever → Landkreis Friesland",
      "state": "Lower Saxony",
      "status": "historical",
      "type": "historical"
    }
  ],
  "JL": [
    {
      "place": "Landkreis Jerichower Land",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "JÜL": [
    {
      "place": "Kreis Düren",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "K": [
    {
      "place": "Cologne (Köln)",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "KA": [
    {
      "place": "Karlsruhe",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Landkreis Karlsruhe",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KAR": [
    {
      "note": "Superseded by MSP",
      "place": "Karlstadt, ab 1974 Main-Spessart",
      "state": "Bavaria",
      "status": "historical",
      "type": "historical"
    }
  ],
  "KB": [
    {
      "place": "Landkreis Waldeck-Frankenberg",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KC": [
    {
      "place": "Landkreis Kronach",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KE": [
    {
      "place": "Kempten (Allgäu)",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "KEH": [
    {
      "place": "Landkreis Kelheim",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KEL": [
    {
      "place": "Ortenaukreis",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KEM": [
    {
      "place": "Landkreis Bayreuth",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Tirschenreuth",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KF": [
    {
      "place": "Kaufbeuren",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "KG": [
    {
      "place": "Landkreis Bad Kissingen",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KH": [
    {
      "place": "Landkreis Bad Kreuznach",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KI": [
    {
      "place": "Kiel",
      "state": "Schleswig-Holstein",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "KIB": [
    {
      "place": "Donnersbergkreis",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KK": [
    {
      "place": "Kreis Viersen",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KL": [
    {
      "place": "Kaiserslautern",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Landkreis Kaiserslautern",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KLE": [
    {
      "place": "Kreis Kleve",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KLZ": [
    {
      "place": "Altmarkkreis Salzwedel",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KM": [
    {
      "place": "Landkreis Bautzen",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KN": [
    {
      "place": "Landkreis Konstanz ohne die Gemeinde Büsingen am Hochrhein",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KO": [
    {
      "place": "Koblenz",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "KR": [
    {
      "place": "Krefeld",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "KRU": [
    {
      "place": "Landkreis Günzburg",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KS": [
    {
      "place": "Landkreis Kassel und Stadt Kassel",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KT": [
    {
      "place": "Landkreis Kitzingen",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KU": [
    {
      "place": "Landkreis Kulmbach",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KUS": [
    {
      "place": "Landkreis Kusel",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KW": [
    {
      "place": "Landkreis Dahme-Spreewald",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KY": [
    {
      "place": "Landkreis Ostprignitz-Ruppin",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KYF": [
    {
      "place": "Kyffhäuserkreis",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KÖN": [
    {
      "place": "Landkreis Rhön-Grabfeld",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KÖT": [
    {
      "place": "Landkreis Anhalt-Bitterfeld",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KÖZ": [
    {
      "place": "Landkreis Cham",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "KÜN": [
    {
      "place": "Hohenlohekreis",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "L": [
    {
      "place": "Leipzig",
      "state": "Saxony",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Landkreis Leipzig",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LA": [
    {
      "place": "Landshut",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Landkreis Landshut",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LAN": [
    {
      "place": "Landkreis Dingolfing-Landau",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LAT": [
    {
      "note": "Superseded by VB",
      "place": "Lauterbach, ab 1972 Vogelsbergkreis",
      "state": "Hesse",
      "status": "historical",
      "type": "historical"
    }
  ],
  "LAU": [
    {
      "place": "Landkreis Nürnberger Land",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LB": [
    {
      "place": "Landkreis Ludwigsburg",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LBS": [
    {
      "place": "Saale-Orla-Kreis",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LBZ": [
    {
      "place": "Landkreis Ludwigslust-Parchim",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LC": [
    {
      "place": "Landkreis Dahme-Spreewald",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LD": [
    {
      "place": "Landau in der Pfalz",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "LDK": [
    {
      "place": "Lahn-Dill-Kreis",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LDS": [
    {
      "place": "Landkreis Dahme-Spreewald",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LE": [
    {
      "place": "Kreis Lippe",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LEO": [
    {
      "place": "Landkreis Böblingen",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LER": [
    {
      "place": "Landkreis Leer",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LEV": [
    {
      "place": "Leverkusen",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "LF": [
    {
      "place": "Landkreis Altötting",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Berchtesgadener Land",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Traunstein",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LG": [
    {
      "place": "Landkreis Lüneburg",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LH": [
    {
      "place": "Kreis Coesfeld",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Kreis Unna",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LI": [
    {
      "place": "Landkreis Lindau (Bodensee)",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LIB": [
    {
      "place": "Landkreis Elbe-Elster",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LIF": [
    {
      "place": "Landkreis Lichtenfels",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LIN": [
    {
      "note": "Superseded by EL",
      "place": "Lingen",
      "state": "Lower Saxony",
      "status": "historical",
      "type": "historical"
    }
  ],
  "LIP": [
    {
      "place": "Kreis Lippe",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LK": [
    {
      "place": "Kreis Minden-Lübbecke",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LL": [
    {
      "place": "Landkreis Landsberg am Lech",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LM": [
    {
      "place": "Landkreis Limburg-Weilburg",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LN": [
    {
      "place": "Landkreis Dahme-Spreewald",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LOH": [
    {
      "note": "Superseded by MSP",
      "place": "Lohr am Main",
      "state": "Bavaria",
      "status": "historical",
      "type": "historical"
    }
  ],
  "LOS": [
    {
      "place": "Landkreis Oder-Spree",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LP": [
    {
      "place": "Kreis Soest",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LR": [
    {
      "place": "Ortenaukreis",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LRO": [
    {
      "place": "Landkreis Rostock",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LS": [
    {
      "note": "Superseded by MK",
      "place": "Lüdenscheid → Märkischer Kreis",
      "state": "North Rhine-Westphalia",
      "status": "historical",
      "type": "historical"
    }
  ],
  "LSA": [
    {
      "place": "Saxony-Anhalt state government, parliament & police (reserved)",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Sonderzeichen"
    }
  ],
  "LSN": [
    {
      "place": "Saxony state government & parliament (reserved)",
      "state": "Saxony",
      "status": "current",
      "type": "Sonderzeichen"
    }
  ],
  "LSZ": [
    {
      "place": "Unstrut-Hainich-Kreis",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LU": [
    {
      "place": "Ludwigshafen am Rhein",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "LUK": [
    {
      "place": "Landkreis Teltow-Fläming",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LUP": [
    {
      "place": "Landkreis Ludwigslust-Parchim",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LWL": [
    {
      "place": "Landkreis Ludwigslust-Parchim",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LÖ": [
    {
      "place": "Landkreis Lörrach",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LÖB": [
    {
      "place": "Landkreis Görlitz",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "LÜD": [
    {
      "note": "Superseded by MK",
      "place": "kreisfreie Stadt Lüdenscheid, ab 1969 Kreis Lüdenscheid",
      "state": "North Rhine-Westphalia",
      "status": "historical",
      "type": "historical"
    }
  ],
  "LÜN": [
    {
      "place": "Kreis Unna",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "M": [
    {
      "place": "Munich (München)",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Landkreis München",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MA": [
    {
      "place": "Mannheim",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "MAB": [
    {
      "place": "Erzgebirgskreis",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MAI": [
    {
      "place": "Landkreis Kelheim",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Landshut",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MAK": [
    {
      "place": "Landkreis Wunsiedel im Fichtelgebirge",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MAL": [
    {
      "place": "Landkreis Landshut",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Straubing-Bogen",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MAR": [
    {
      "note": "Superseded by MSP",
      "place": "Marktheidenfeld",
      "state": "Bavaria",
      "status": "historical",
      "type": "historical"
    }
  ],
  "MB": [
    {
      "place": "Landkreis Miesbach",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MC": [
    {
      "place": "Landkreis Mecklenburgische Seenplatte ohne die Stadt Neubrandenburg",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MD": [
    {
      "place": "Magdeburg",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "ME": [
    {
      "place": "Kreis Mettmann",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MED": [
    {
      "place": "Kreis Dithmarschen",
      "state": "Schleswig-Holstein",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MEG": [
    {
      "place": "Schwalm-Eder-Kreis",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MEI": [
    {
      "place": "Landkreis Meißen",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MEK": [
    {
      "place": "Erzgebirgskreis",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MEL": [
    {
      "place": "Landkreis Osnabrück",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MEP": [
    {
      "note": "Superseded by EL",
      "place": "Meppen",
      "state": "Lower Saxony",
      "status": "historical",
      "type": "historical"
    }
  ],
  "MER": [
    {
      "place": "Saalekreis",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MES": [
    {
      "note": "Superseded by HSK",
      "place": "Meschede, ab 1975 Hochsauerlandkreis",
      "state": "North Rhine-Westphalia",
      "status": "historical",
      "type": "historical"
    }
  ],
  "MET": [
    {
      "place": "Landkreis Rhön-Grabfeld",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MG": [
    {
      "place": "Mönchengladbach",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "MGH": [
    {
      "place": "Main-Tauber-Kreis",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MGN": [
    {
      "place": "Landkreis Schmalkalden-Meiningen",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MH": [
    {
      "place": "Mülheim an der Ruhr",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "MHL": [
    {
      "place": "Unstrut-Hainich-Kreis",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MI": [
    {
      "place": "Kreis Minden-Lübbecke",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MIL": [
    {
      "place": "Landkreis Miltenberg",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MK": [
    {
      "place": "Märkischer Kreis",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MKK": [
    {
      "place": "Main-Kinzig-Kreis",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ML": [
    {
      "place": "Landkreis Mansfeld-Südharz",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MM": [
    {
      "place": "Memmingen",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "MN": [
    {
      "place": "Landkreis Unterallgäu",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MO": [
    {
      "place": "Kreis Wesel",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MOD": [
    {
      "place": "Landkreis Ostallgäu",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MOL": [
    {
      "place": "Landkreis Märkisch-Oderland",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MON": [
    {
      "place": "Städteregion Aachen",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Städteregion"
    },
    {
      "place": "Kreis Düren",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MOS": [
    {
      "place": "Neckar-Odenwald-Kreis",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MQ": [
    {
      "place": "Saalekreis",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MR": [
    {
      "place": "Landkreis Marburg-Biedenkopf",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MS": [
    {
      "place": "Münster",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "MSE": [
    {
      "place": "Landkreis Mecklenburgische Seenplatte ohne die Stadt Neubrandenburg",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MSH": [
    {
      "place": "Landkreis Mansfeld-Südharz",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MSP": [
    {
      "place": "Landkreis Main-Spessart",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MST": [
    {
      "place": "Landkreis Mecklenburgische Seenplatte ohne die Stadt Neubrandenburg",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MT": [
    {
      "note": "Superseded by WW",
      "place": "Montabaur → Unterwesterwaldkreis, ab 1974 Westerwaldkreis",
      "state": "Rhineland-Palatinate",
      "status": "historical",
      "type": "historical"
    }
  ],
  "MTK": [
    {
      "place": "Main-Taunus-Kreis",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MTL": [
    {
      "place": "Landkreis Leipzig",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MU": [
    {
      "place": "Landkreis München",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MUC": [
    {
      "place": "Munich (München)",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "MVL": [
    {
      "place": "Mecklenburg-Vorpommern state government, parliament & police (reserved)",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Sonderzeichen"
    }
  ],
  "MW": [
    {
      "place": "Landkreis Mittelsachsen",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MY": [
    {
      "place": "Landkreis Mayen-Koblenz",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MYK": [
    {
      "place": "Landkreis Mayen-Koblenz",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MZ": [
    {
      "place": "Mainz",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Landkreis Mainz-Bingen",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MZG": [
    {
      "place": "Landkreis Merzig-Wadern",
      "state": "Saarland",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MÜ": [
    {
      "place": "Landkreis Mühldorf am Inn",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MÜB": [
    {
      "place": "Landkreis Bayreuth",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Hof",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MÜL": [
    {
      "place": "Landkreis Breisgau-Hochschwarzwald",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "MÜN": [
    {
      "note": "Superseded by RT",
      "place": "Münsingen",
      "state": "Baden-Württemberg",
      "status": "historical",
      "type": "historical"
    }
  ],
  "MÜR": [
    {
      "place": "Landkreis Mecklenburgische Seenplatte ohne die Stadt Neubrandenburg",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "N": [
    {
      "place": "Nuremberg (Nürnberg)",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Landkreis Nürnberger Land",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NAB": [
    {
      "place": "Landkreis Amberg-Sulzbach",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Schwandorf",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NAI": [
    {
      "place": "Landkreis Hof",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NAU": [
    {
      "place": "Landkreis Havelland",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NB": [
    {
      "place": "Neubrandenburg (große kreisangehörige Stadt im Landkreis Mecklenburgische Seenplatte)",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "ND": [
    {
      "place": "Landkreis Neuburg-Schrobenhausen",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NDH": [
    {
      "place": "Landkreis Nordhausen",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NE": [
    {
      "place": "Rhein-Kreis Neuss",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NEA": [
    {
      "place": "Landkreis Neustadt an der Aisch-Bad Windsheim",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NEB": [
    {
      "place": "Burgenlandkreis",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NEC": [
    {
      "place": "Coburg und Landkreis Coburg (→ Zweckverband Zulassungsstelle Coburg)",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "NEN": [
    {
      "place": "Landkreis Schwandorf",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NES": [
    {
      "place": "Landkreis Rhön-Grabfeld",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NEU": [
    {
      "place": "Landkreis Breisgau-Hochschwarzwald",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NEW": [
    {
      "place": "Landkreis Neustadt an der Waldnaab",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NF": [
    {
      "place": "Kreis Nordfriesland",
      "state": "Schleswig-Holstein",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NH": [
    {
      "place": "Landkreis Sonneberg",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NI": [
    {
      "place": "Landkreis Nienburg/Weser",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NIB": [
    {
      "note": "Superseded by NF",
      "place": "Niebüll → Südtondern",
      "state": "Schleswig-Holstein",
      "status": "historical",
      "type": "historical"
    }
  ],
  "NK": [
    {
      "place": "Landkreis Neunkirchen",
      "state": "Saarland",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NL": [
    {
      "place": "Lower Saxony state government & parliament (reserved)",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Sonderzeichen"
    }
  ],
  "NM": [
    {
      "place": "Landkreis Neumarkt in der Oberpfalz",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NMB": [
    {
      "place": "Burgenlandkreis",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NMS": [
    {
      "place": "Neumünster",
      "state": "Schleswig-Holstein",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "NOH": [
    {
      "place": "Landkreis Grafschaft Bentheim",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NOL": [
    {
      "place": "Landkreis Görlitz",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NOM": [
    {
      "place": "Landkreis Northeim",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NOR": [
    {
      "place": "Landkreis Aurich",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NP": [
    {
      "place": "Landkreis Ostprignitz-Ruppin",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NR": [
    {
      "place": "Landkreis Neuwied",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NRW": [
    {
      "place": "North Rhine-Westphalia state government, parliament & police (reserved)",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Sonderzeichen"
    }
  ],
  "NRÜ": [
    {
      "note": "Superseded by H",
      "place": "Neustadt am Rübenberge",
      "state": "Lower Saxony",
      "status": "historical",
      "type": "historical"
    }
  ],
  "NT": [
    {
      "place": "Landkreis Esslingen",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NU": [
    {
      "place": "Landkreis Neu-Ulm",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NVP": [
    {
      "place": "Landkreis Vorpommern-Rügen ohne die Stadt Stralsund",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NW": [
    {
      "place": "Neustadt an der Weinstraße",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "NWM": [
    {
      "place": "Landkreis Nordwestmecklenburg ohne die Stadt Wismar",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NY": [
    {
      "place": "Landkreis Görlitz",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NZ": [
    {
      "place": "Landkreis Mecklenburgische Seenplatte ohne die Stadt Neubrandenburg",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "NÖ": [
    {
      "place": "Landkreis Donau-Ries",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "OA": [
    {
      "place": "Landkreis Oberallgäu",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "OAL": [
    {
      "place": "Landkreis Ostallgäu",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "OB": [
    {
      "place": "Oberhausen",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "OBB": [
    {
      "place": "Landkreis Miltenberg",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "OBG": [
    {
      "place": "Landkreis Stendal",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "OC": [
    {
      "place": "Landkreis Börde",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "OCH": [
    {
      "place": "Landkreis Würzburg",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "OD": [
    {
      "place": "Kreis Stormarn",
      "state": "Schleswig-Holstein",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "OE": [
    {
      "place": "Kreis Olpe",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "OF": [
    {
      "place": "Landkreis Offenbach und Stadt Offenbach am Main",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "OG": [
    {
      "place": "Ortenaukreis",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "OH": [
    {
      "place": "Kreis Ostholstein",
      "state": "Schleswig-Holstein",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "OHA": [
    {
      "place": "Landkreis Göttingen ohne die Stadt Göttingen",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "OHV": [
    {
      "place": "Landkreis Oberhavel",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "OHZ": [
    {
      "place": "Landkreis Osterholz",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "OK": [
    {
      "place": "Landkreis Börde",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "OL": [
    {
      "place": "Oldenburg",
      "state": "Lower Saxony",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Landkreis Oldenburg",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "OLD": [
    {
      "note": "Superseded by OH",
      "place": "Oldenburg in Holstein",
      "state": "Schleswig-Holstein",
      "status": "historical",
      "type": "historical"
    }
  ],
  "OP": [
    {
      "place": "Leverkusen",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "OPR": [
    {
      "place": "Landkreis Ostprignitz-Ruppin",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "OR": [
    {
      "note": "Superseded by OHV",
      "place": "Oranienburg",
      "state": "Brandenburg",
      "status": "historical",
      "type": "historical"
    }
  ],
  "OS": [
    {
      "place": "Osnabrück",
      "state": "Lower Saxony",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Landkreis Osnabrück",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "OSL": [
    {
      "place": "Landkreis Oberspreewald-Lausitz",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "OTT": [
    {
      "note": "Superseded by CUX",
      "place": "Otterndorf → Land Hadeln",
      "state": "Lower Saxony",
      "status": "historical",
      "type": "historical"
    }
  ],
  "OTW": [
    {
      "place": "Landkreis Neunkirchen",
      "state": "Saarland",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "OVI": [
    {
      "place": "Landkreis Schwandorf",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "OVL": [
    {
      "place": "Vogtlandkreis",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "OVP": [
    {
      "note": "Superseded by VG",
      "place": "Ostvorpommern",
      "state": "Mecklenburg-Vorpommern",
      "status": "historical",
      "type": "historical"
    }
  ],
  "OZ": [
    {
      "place": "Landkreis Nordsachsen",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "P": [
    {
      "place": "Potsdam",
      "state": "Brandenburg",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "PA": [
    {
      "place": "Passau",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Landkreis Passau",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "PAF": [
    {
      "place": "Landkreis Pfaffenhofen an der Ilm",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "PAN": [
    {
      "place": "Landkreis Rottal-Inn",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "PAR": [
    {
      "place": "Landkreis Kelheim",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Neumarkt in der Oberpfalz",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "PB": [
    {
      "place": "Kreis Paderborn",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "PCH": [
    {
      "place": "Landkreis Ludwigslust-Parchim",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "PE": [
    {
      "place": "Landkreis Peine",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "PEG": [
    {
      "place": "Landkreis Bayreuth",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Forchheim",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Nürnberger Land",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "PER": [
    {
      "note": "Superseded by PR",
      "place": "Perleberg",
      "state": "Brandenburg",
      "status": "historical",
      "type": "historical"
    }
  ],
  "PF": [
    {
      "place": "Pforzheim",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Enzkreis",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "PI": [
    {
      "place": "Kreis Pinneberg",
      "state": "Schleswig-Holstein",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "PIR": [
    {
      "place": "Landkreis Sächsische Schweiz-Osterzgebirge",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "PK": [
    {
      "note": "Superseded by PR",
      "place": "Pritzwalk",
      "state": "Brandenburg",
      "status": "historical",
      "type": "historical"
    }
  ],
  "PL": [
    {
      "place": "Vogtlandkreis",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "PLÖ": [
    {
      "place": "Kreis Plön",
      "state": "Schleswig-Holstein",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "PM": [
    {
      "place": "Landkreis Potsdam-Mittelmark",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "PN": [
    {
      "place": "Saale-Orla-Kreis",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "PR": [
    {
      "place": "Landkreis Prignitz",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "PRÜ": [
    {
      "place": "Eifelkreis Bitburg-Prüm",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "PS": [
    {
      "place": "Pirmasens",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Landkreis Südwestpfalz",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "PW": [
    {
      "place": "Landkreis Vorpommern-Greifswald ohne die Stadt Greifswald",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "PZ": [
    {
      "place": "Landkreis Uckermark",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "QFT": [
    {
      "place": "Saalekreis",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "QLB": [
    {
      "place": "Landkreis Harz",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "R": [
    {
      "place": "Regensburg",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Landkreis Regensburg",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "RA": [
    {
      "place": "Landkreis Rastatt",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "RC": [
    {
      "place": "Vogtlandkreis",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "RD": [
    {
      "place": "Kreis Rendsburg-Eckernförde",
      "state": "Schleswig-Holstein",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "RDG": [
    {
      "place": "Landkreis Vorpommern-Rügen ohne die Stadt Stralsund",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "RE": [
    {
      "place": "Kreis Recklinghausen",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "REG": [
    {
      "place": "Landkreis Regen",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "REH": [
    {
      "place": "Landkreis Hof",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Wunsiedel im Fichtelgebirge",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "REI": [
    {
      "place": "Landkreis Berchtesgadener Land",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "RG": [
    {
      "place": "Landkreis Meißen",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "RH": [
    {
      "place": "Landkreis Roth",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "RI": [
    {
      "place": "Landkreis Schaumburg",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "RID": [
    {
      "place": "Landkreis Kelheim",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "RIE": [
    {
      "place": "Landkreis Meißen",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "RL": [
    {
      "place": "Landkreis Mittelsachsen",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "RM": [
    {
      "place": "Landkreis Mecklenburgische Seenplatte ohne die Stadt Neubrandenburg",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "RN": [
    {
      "place": "Landkreis Havelland",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "RO": [
    {
      "place": "Rosenheim",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Landkreis Rosenheim",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ROD": [
    {
      "place": "Landkreis Cham",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Schwandorf",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ROF": [
    {
      "place": "Landkreis Hersfeld-Rotenburg",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ROH": [
    {
      "note": "Superseded by ROW",
      "place": "Rotenburg in Hannover",
      "state": "Lower Saxony",
      "status": "historical",
      "type": "historical"
    }
  ],
  "ROK": [
    {
      "place": "Donnersbergkreis",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ROL": [
    {
      "place": "Landkreis Kelheim",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Landshut",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ROS": [
    {
      "place": "Landkreis Rostock",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ROT": [
    {
      "place": "Landkreis Ansbach",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ROW": [
    {
      "place": "Landkreis Rotenburg (Wümme)",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "RP": [
    {
      "place": "Rhein-Pfalz-Kreis",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "RPL": [
    {
      "place": "Rhineland-Palatinate state government, parliament & police (reserved)",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Sonderzeichen"
    }
  ],
  "RS": [
    {
      "place": "Remscheid",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "RSL": [
    {
      "place": "Dessau-Roßlau",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "RT": [
    {
      "place": "Landkreis Reutlingen",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "RU": [
    {
      "place": "Landkreis Saalfeld-Rudolstadt",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "RV": [
    {
      "place": "Landkreis Ravensburg",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "RW": [
    {
      "place": "Landkreis Rottweil",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "RWL": [
    {
      "note": "Superseded by NRW",
      "place": "Rheinland, Westfalen, Landesregierung und Landtag → Nordrhein-Westfalen, Landesregierung und Landtag",
      "state": "North Rhine-Westphalia",
      "status": "historical",
      "type": "historical"
    }
  ],
  "RY": [
    {
      "note": "Superseded by MG",
      "place": "kreisfreie Stadt Rheydt",
      "state": "North Rhine-Westphalia",
      "status": "historical",
      "type": "historical"
    }
  ],
  "RZ": [
    {
      "place": "Kreis Herzogtum Lauenburg",
      "state": "Schleswig-Holstein",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "RÜD": [
    {
      "place": "Rheingau-Taunus-Kreis",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "RÜG": [
    {
      "place": "Landkreis Vorpommern-Rügen ohne die Stadt Stralsund",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "S": [
    {
      "place": "Stuttgart",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "SAB": [
    {
      "place": "Landkreis Trier-Saarburg",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SAD": [
    {
      "place": "Landkreis Schwandorf",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SAL": [
    {
      "place": "Saarland state government, parliament & police (reserved)",
      "state": "Saarland",
      "status": "current",
      "type": "Sonderzeichen"
    }
  ],
  "SAN": [
    {
      "place": "Landkreis Hof",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Kronach",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Kulmbach",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SAW": [
    {
      "place": "Altmarkkreis Salzwedel",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SB": [
    {
      "place": "Regionalverband Saarbrücken ohne die Stadt Völklingen",
      "state": "Saarland",
      "status": "current",
      "type": "Regionalverband"
    }
  ],
  "SBG": [
    {
      "place": "Landkreis Vorpommern-Greifswald ohne die Stadt Greifswald",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SBK": [
    {
      "place": "Salzlandkreis",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SC": [
    {
      "place": "Schwabach",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "SCZ": [
    {
      "place": "Saale-Orla-Kreis",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SDH": [
    {
      "place": "Kyffhäuserkreis",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SDL": [
    {
      "place": "Landkreis Stendal",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SDT": [
    {
      "place": "Landkreis Uckermark",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SE": [
    {
      "place": "Kreis Segeberg",
      "state": "Schleswig-Holstein",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SEB": [
    {
      "place": "Landkreis Sächsische Schweiz-Osterzgebirge",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SEE": [
    {
      "place": "Landkreis Märkisch-Oderland",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SEF": [
    {
      "place": "Landkreis Neustadt an der Aisch-Bad Windsheim",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SEL": [
    {
      "place": "Landkreis Wunsiedel im Fichtelgebirge",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SF": [
    {
      "note": "Superseded by OA",
      "place": "Sonthofen, ab 1972 Oberallgäu",
      "state": "Bavaria",
      "status": "historical",
      "type": "historical"
    }
  ],
  "SFA": [
    {
      "note": "Superseded by HK",
      "place": "Soltau-Fallingbostel",
      "state": "Lower Saxony",
      "status": "historical",
      "type": "historical"
    }
  ],
  "SFB": [
    {
      "place": "Landkreis Oberspreewald-Lausitz",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SFT": [
    {
      "place": "Salzlandkreis",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SG": [
    {
      "place": "Solingen",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "SGH": [
    {
      "place": "Landkreis Mansfeld-Südharz",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SH": [
    {
      "place": "Schleswig-Holstein state government, parliament & police (reserved)",
      "state": "Schleswig-Holstein",
      "status": "current",
      "type": "Sonderzeichen"
    }
  ],
  "SHA": [
    {
      "place": "Landkreis Schwäbisch Hall",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SHG": [
    {
      "place": "Landkreis Schaumburg",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SHK": [
    {
      "place": "Saale-Holzland-Kreis",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SHL": [
    {
      "place": "Suhl",
      "state": "Thuringia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "SI": [
    {
      "place": "Kreis Siegen-Wittgenstein",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SIG": [
    {
      "place": "Landkreis Sigmaringen",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SIM": [
    {
      "place": "Rhein-Hunsrück-Kreis",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SK": [
    {
      "place": "Saalekreis",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SL": [
    {
      "place": "Kreis Schleswig-Flensburg",
      "state": "Schleswig-Holstein",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SLE": [
    {
      "place": "Kreis Düren",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Kreis Euskirchen",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SLF": [
    {
      "place": "Landkreis Saalfeld-Rudolstadt",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SLG": [
    {
      "place": "Landkreis Ravensburg",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Sigmaringen",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SLK": [
    {
      "place": "Salzlandkreis",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SLN": [
    {
      "place": "Landkreis Altenburger Land",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SLS": [
    {
      "place": "Landkreis Saarlouis",
      "state": "Saarland",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SLZ": [
    {
      "place": "Wartburgkreis",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SLÜ": [
    {
      "place": "Main-Kinzig-Kreis",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SM": [
    {
      "place": "Landkreis Schmalkalden-Meiningen",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SMÜ": [
    {
      "place": "Landkreis Augsburg",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SN": [
    {
      "place": "Schwerin",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "SNH": [
    {
      "note": "Superseded by HD",
      "place": "Sinsheim",
      "state": "Baden-Württemberg",
      "status": "historical",
      "type": "historical"
    }
  ],
  "SO": [
    {
      "place": "Kreis Soest",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SOB": [
    {
      "place": "Landkreis Neuburg-Schrobenhausen",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SOG": [
    {
      "place": "Landkreis Weilheim-Schongau",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SOK": [
    {
      "place": "Saale-Orla-Kreis",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SOL": [
    {
      "note": "Superseded by HK",
      "place": "Soltau",
      "state": "Lower Saxony",
      "status": "historical",
      "type": "historical"
    }
  ],
  "SON": [
    {
      "place": "Landkreis Sonneberg",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SP": [
    {
      "place": "Speyer",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "SPB": [
    {
      "place": "Landkreis Spree-Neiße",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SPN": [
    {
      "place": "Landkreis Spree-Neiße",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SPR": [
    {
      "note": "Superseded by H",
      "place": "Springe",
      "state": "Lower Saxony",
      "status": "historical",
      "type": "historical"
    }
  ],
  "SR": [
    {
      "place": "Landkreis Straubing-Bogen",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Straubing",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "SRB": [
    {
      "place": "Landkreis Märkisch-Oderland",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SRO": [
    {
      "place": "Saale-Holzland-Kreis",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ST": [
    {
      "place": "Kreis Steinfurt",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "STA": [
    {
      "place": "Landkreis Starnberg",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "STB": [
    {
      "place": "Landkreis Ludwigslust-Parchim",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "STD": [
    {
      "place": "Landkreis Stade",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "STE": [
    {
      "place": "Landkreis Lichtenfels",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "STH": [
    {
      "note": "Superseded by SHG",
      "place": "Stadthagen → Schaumburg-Lippe",
      "state": "Lower Saxony",
      "status": "historical",
      "type": "historical"
    }
  ],
  "STL": [
    {
      "place": "Erzgebirgskreis",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "STO": [
    {
      "place": "Landkreis Konstanz",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Sigmaringen",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SU": [
    {
      "place": "Rhein-Sieg-Kreis",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SUL": [
    {
      "place": "Landkreis Amberg-Sulzbach",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SW": [
    {
      "place": "Schweinfurt",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Landkreis Schweinfurt",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SWA": [
    {
      "place": "Rheingau-Taunus-Kreis",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SY": [
    {
      "place": "Landkreis Diepholz",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SZ": [
    {
      "place": "Salzgitter",
      "state": "Lower Saxony",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "SZB": [
    {
      "place": "Erzgebirgskreis",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SÄK": [
    {
      "place": "Landkreis Waldshut",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SÖM": [
    {
      "place": "Landkreis Sömmerda",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "SÜW": [
    {
      "place": "Landkreis Südliche Weinstraße",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "TBB": [
    {
      "place": "Main-Tauber-Kreis",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "TDO": [
    {
      "place": "Landkreis Nordsachsen",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "TE": [
    {
      "place": "Kreis Steinfurt",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "TET": [
    {
      "place": "Landkreis Rostock",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "TF": [
    {
      "place": "Landkreis Teltow-Fläming",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "TG": [
    {
      "place": "Landkreis Nordsachsen",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "THL": [
    {
      "place": "Thuringia state government & parliament (reserved)",
      "state": "Thuringia",
      "status": "current",
      "type": "Sonderzeichen"
    }
  ],
  "THW": [
    {
      "place": "Federal Agency for Technical Relief (THW)",
      "state": "Germany (federal)",
      "status": "current",
      "type": "Sonderzeichen"
    }
  ],
  "TIR": [
    {
      "place": "Landkreis Tirschenreuth",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "TO": [
    {
      "place": "Landkreis Nordsachsen",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "TP": [
    {
      "place": "Landkreis Uckermark",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "TR": [
    {
      "place": "Landkreis Trier-Saarburg und Stadt Trier",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "TS": [
    {
      "place": "Landkreis Traunstein",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "TT": [
    {
      "place": "Bodenseekreis",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "TUT": [
    {
      "place": "Landkreis Tuttlingen",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "TÖL": [
    {
      "place": "Landkreis Bad Tölz-Wolfratshausen",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "TÖN": [
    {
      "note": "Superseded by NF",
      "place": "Tönning → Eiderstedt",
      "state": "Schleswig-Holstein",
      "status": "historical",
      "type": "historical"
    }
  ],
  "TÜ": [
    {
      "place": "Landkreis Tübingen",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "UE": [
    {
      "place": "Landkreis Uelzen",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "UEM": [
    {
      "place": "Landkreis Vorpommern-Greifswald ohne die Stadt Greifswald",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "UER": [
    {
      "note": "Superseded by VG",
      "place": "Uecker-Randow",
      "state": "Mecklenburg-Vorpommern",
      "status": "historical",
      "type": "historical"
    }
  ],
  "UFF": [
    {
      "place": "Landkreis Neustadt an der Aisch-Bad Windsheim",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "UH": [
    {
      "place": "Unstrut-Hainich-Kreis",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "UL": [
    {
      "place": "Ulm",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Alb-Donau-Kreis",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "UM": [
    {
      "place": "Landkreis Uckermark",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "UN": [
    {
      "place": "Kreis Unna",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "USI": [
    {
      "place": "Hochtaunuskreis",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "V": [
    {
      "place": "Vogtlandkreis",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "VAI": [
    {
      "place": "Landkreis Ludwigsburg",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "VB": [
    {
      "place": "Vogelsbergkreis",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "VEC": [
    {
      "place": "Landkreis Vechta",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "VER": [
    {
      "place": "Landkreis Verden",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "VG": [
    {
      "place": "Landkreis Vorpommern-Greifswald",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "VIB": [
    {
      "place": "Landkreis Landshut",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Mühldorf a.Inn",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Rottal-Inn",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "VIE": [
    {
      "place": "Kreis Viersen",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "VIT": [
    {
      "place": "Landkreis Regen",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "VK": [
    {
      "place": "Völklingen (Mittelstadt im Regionalverband Saarbrücken)",
      "state": "Saarland",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "VL": [
    {
      "note": "Superseded by VS",
      "place": "Villingen",
      "state": "Baden-Württemberg",
      "status": "historical",
      "type": "historical"
    }
  ],
  "VOF": [
    {
      "note": "Superseded by PA",
      "place": "Vilshofen",
      "state": "Bavaria",
      "status": "historical",
      "type": "historical"
    }
  ],
  "VOH": [
    {
      "place": "Landkreis Neustadt an der Waldnaab",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "VR": [
    {
      "place": "Landkreis Vorpommern-Rügen ohne die Stadt Stralsund",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "VS": [
    {
      "place": "Schwarzwald-Baar-Kreis",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "W": [
    {
      "place": "Wuppertal",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "WA": [
    {
      "place": "Landkreis Waldeck-Frankenberg",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WAF": [
    {
      "place": "Kreis Warendorf",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WAK": [
    {
      "place": "Wartburgkreis",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WAN": [
    {
      "place": "Herne",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "WAR": [
    {
      "place": "Kreis Höxter",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WAT": [
    {
      "place": "Bochum",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "WB": [
    {
      "place": "Landkreis Wittenberg",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WBS": [
    {
      "place": "Landkreis Eichsfeld",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WD": [
    {
      "note": "Superseded by GT",
      "place": "Wiedenbrück",
      "state": "North Rhine-Westphalia",
      "status": "historical",
      "type": "historical"
    }
  ],
  "WDA": [
    {
      "place": "Landkreis Zwickau",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WE": [
    {
      "place": "Weimar",
      "state": "Thuringia",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "WEB": [
    {
      "note": "Superseded by WW",
      "place": "Westerburg → Oberwesterwaldkreis",
      "state": "Rhineland-Palatinate",
      "status": "historical",
      "type": "historical"
    }
  ],
  "WEG": [
    {
      "note": "Superseded by PA",
      "place": "Wegscheid",
      "state": "Bavaria",
      "status": "historical",
      "type": "historical"
    }
  ],
  "WEL": [
    {
      "place": "Landkreis Limburg-Weilburg",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WEM": [
    {
      "note": "Superseded by CUX",
      "place": "Wesermünde",
      "state": "Lower Saxony",
      "status": "historical",
      "type": "historical"
    }
  ],
  "WEN": [
    {
      "place": "Weiden in der Oberpfalz",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "WER": [
    {
      "place": "Landkreis Augsburg",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Dillingen an der Donau",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WES": [
    {
      "place": "Kreis Wesel",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WF": [
    {
      "place": "Landkreis Wolfenbüttel",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WG": [
    {
      "place": "Landkreis Ravensburg",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WHV": [
    {
      "place": "Wilhelmshaven",
      "state": "Lower Saxony",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "WI": [
    {
      "place": "Wiesbaden",
      "state": "Hesse",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "WIL": [
    {
      "place": "Landkreis Bernkastel-Wittlich",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WIS": [
    {
      "place": "Landkreis Nordwestmecklenburg ohne die Stadt Wismar",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WIT": [
    {
      "place": "Ennepe-Ruhr-Kreis",
      "state": "North Rhine-Westphalia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WIZ": [
    {
      "place": "Werra-Meißner-Kreis",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WK": [
    {
      "place": "Landkreis Ostprignitz-Ruppin",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WL": [
    {
      "place": "Landkreis Harburg",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WLG": [
    {
      "place": "Landkreis Vorpommern-Greifswald ohne die Stadt Greifswald",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WM": [
    {
      "place": "Landkreis Weilheim-Schongau",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WMS": [
    {
      "place": "Landkreis Börde",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WN": [
    {
      "place": "Rems-Murr-Kreis",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WND": [
    {
      "place": "Landkreis St. Wendel",
      "state": "Saarland",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WO": [
    {
      "place": "Worms",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "WOB": [
    {
      "place": "Wolfsburg",
      "state": "Lower Saxony",
      "status": "current",
      "type": "kreisfreie Stadt"
    }
  ],
  "WOH": [
    {
      "place": "Landkreis Kassel",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WOL": [
    {
      "place": "Landkreis Freudenstadt",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Ortenaukreis",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WOR": [
    {
      "place": "Landkreis Bad Tölz-Wolfratshausen",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis München",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Starnberg",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WOS": [
    {
      "place": "Landkreis Freyung-Grafenau",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WR": [
    {
      "place": "Landkreis Harz",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WRN": [
    {
      "place": "Landkreis Mecklenburgische Seenplatte ohne die Stadt Neubrandenburg",
      "state": "Mecklenburg-Vorpommern",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WS": [
    {
      "place": "Landkreis Mühldorf a.Inn",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Rosenheim",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WSF": [
    {
      "place": "Burgenlandkreis",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WST": [
    {
      "place": "Landkreis Ammerland",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WSW": [
    {
      "place": "Landkreis Görlitz",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WT": [
    {
      "place": "Landkreis Waldshut",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WTL": [
    {
      "place": "Landkreis Osnabrück",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WTM": [
    {
      "place": "Landkreis Wittmund",
      "state": "Lower Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WUG": [
    {
      "place": "Landkreis Weißenburg-Gunzenhausen",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WUN": [
    {
      "place": "Landkreis Wunsiedel im Fichtelgebirge",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WUR": [
    {
      "place": "Landkreis Leipzig",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WW": [
    {
      "place": "Westerwaldkreis",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WZ": [
    {
      "place": "Lahn-Dill-Kreis",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WZL": [
    {
      "place": "Landkreis Börde",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WÜ": [
    {
      "place": "Würzburg",
      "state": "Bavaria",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Landkreis Würzburg",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "WÜM": [
    {
      "place": "Landkreis Cham",
      "state": "Bavaria",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "X": [
    {
      "place": "International (NATO) headquarters in Germany",
      "state": "Germany (federal)",
      "status": "current",
      "type": "Sonderzeichen"
    }
  ],
  "Y": [
    {
      "place": "German Armed Forces (Bundeswehr)",
      "state": "Germany (federal)",
      "status": "current",
      "type": "Sonderzeichen"
    }
  ],
  "Z": [
    {
      "place": "Landkreis Zwickau",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ZE": [
    {
      "place": "Landkreis Anhalt-Bitterfeld",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ZEL": [
    {
      "place": "Landkreis Cochem-Zell",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ZI": [
    {
      "place": "Landkreis Görlitz",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ZIG": [
    {
      "place": "Schwalm-Eder-Kreis",
      "state": "Hesse",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ZP": [
    {
      "place": "Erzgebirgskreis",
      "state": "Saxony",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ZR": [
    {
      "place": "Landkreis Greiz",
      "state": "Thuringia",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ZS": [
    {
      "place": "Landkreis Teltow-Fläming",
      "state": "Brandenburg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ZW": [
    {
      "place": "Zweibrücken",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "kreisfreie Stadt"
    },
    {
      "place": "Landkreis Südwestpfalz",
      "state": "Rhineland-Palatinate",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ZZ": [
    {
      "place": "Burgenlandkreis",
      "state": "Saxony-Anhalt",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ÖHR": [
    {
      "place": "Hohenlohekreis",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ],
  "ÜB": [
    {
      "place": "Bodenseekreis",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Ravensburg",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    },
    {
      "place": "Landkreis Sigmaringen",
      "state": "Baden-Württemberg",
      "status": "current",
      "type": "Landkreis"
    }
  ]
};

const PLATE_DATA_SOURCE =
  "Wikipedia: \u201cListe der Kfz-Kennzeichen in Deutschland\u201d and " +
  "\u201cListe der deutschen Kfz-Kennzeichen, die nicht mehr ausgegeben werden\u201d.";
const PLATE_DATA_REVIEWED = "2026-07-15";
