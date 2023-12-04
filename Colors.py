import streamlit as st
import json

# Fonction pour sauvegarder les préférences de couleur
def save_color_preferences(colors):
    preferences = {"colors": colors}
    with open("color_preferences.json", "w") as file:
        json.dump(preferences, file)

# Fonction pour charger les préférences de couleur
def load_color_preferences():
    try:
        with open("color_preferences.json", "r") as file:
            preferences = json.load(file)
            return preferences.get("colors", {})
    except FileNotFoundError:
        return {}

# Chargement des préférences de couleur
color_preferences = load_color_preferences()

# Utilisation des couleurs dans l'application Streamlit
color1 = st.color_picker("Choisissez la première couleur", color_preferences.get("color1", "#0E1117"))
color2 = st.color_picker("Choisissez la deuxième couleur", color_preferences.get("color2", "#FAFAFA"))

# Utilisez les couleurs dans l'application
st.write(f"La première couleur est {color1}")
st.write(f"La deuxième couleur est {color2}")

# Sauvegarde des préférences de couleur
save_color_preferences({"color1": color1, "color2": color2})
