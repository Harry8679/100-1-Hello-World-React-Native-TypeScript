import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

// TypeScript : on type les props du composant
type InfoCardProps = {
  label: string;
  value: string;
};

// Composant réutilisable — bonne habitude dès le départ
function InfoCard({ label, value }: InfoCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardLabel}>{label}</Text>
      <Text style={styles.cardValue}>{value}</Text>
    </View>
  );
}

// Composant principal
export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      {/* Contrôle la barre de statut (heure, batterie...) */}
      <StatusBar style="light" />

      <View style={styles.content}>

        {/* Emoji comme logo simple */}
        <Text style={styles.emoji}>📱</Text>

        {/* Titre principal */}
        <Text style={styles.title}>Hello, World! 👋</Text>

        {/* Sous-titre */}
        <Text style={styles.subtitle}>
          Mon premier projet{"\\n"}React Native
        </Text>

        {/* Séparateur */}
        <View style={styles.divider} />

        {/* Réutilisation du composant InfoCard */}
        <InfoCard label="Technologie" value="React Native" />
        <InfoCard label="Langage"     value="TypeScript" />
        <InfoCard label="SDK"         value="Expo 54" />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d1a',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  emoji: {
    fontSize: 56,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#f0ebe0',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#6b6355',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 28,
  },
  divider: {
    width: 40,
    height: 1,
    backgroundColor: '#2a2a35',
    marginBottom: 24,
  },
  card: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a25',
  },
  cardLabel: {
    fontSize: 14,
    color: '#4a4555',
  },
  cardValue: {
    fontSize: 14,
    color: '#8b83f7',
  },
});