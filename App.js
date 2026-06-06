import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BLUE = '#0B3D91';
const ORANGE = '#FF6B00';
const BG = '#F4F7FB';
const TEXT = '#0F172A';
const MUTED = '#64748B';
const GREEN = '#16A34A';

const vehicles = [
  { name: 'Dzire', type: 'Sedan', seats: '4 Seats', price: 'Rs 12/km' },
  { name: 'Ertiga', type: 'MPV', seats: '6 Seats', price: 'Rs 16/km' },
  { name: 'Crysta', type: 'SUV', seats: '7 Seats', price: 'Rs 22/km' },
];

function Header({ title }) {
  return (
    <View style={styles.header}>
      <Ionicons name="menu" size={30} color={TEXT} />
      <Text style={styles.headerTitle}>{title}</Text>
      <Ionicons name="notifications-outline" size={28} color={TEXT} />
    </View>
  );
}

function WelcomeScreen({ onContinue }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.welcomeContent} showsVerticalScrollIndicator={false}>
        <View style={styles.logoBox}>
          <Text style={styles.logoText}>VT</Text>
          <Text style={styles.brandText}>VISHWAKARMA</Text>
          <Text style={styles.brandOrange}>TRAVELS</Text>
          <Text style={styles.tagline}>Safe. Reliable.</Text>
        </View>

        <View style={styles.heroCard}>
          <Text style={styles.heroTitle}>Reliable &</Text>
          <Text style={styles.heroTitle}>Comfortable Journey</Text>
          <Text style={styles.heroSub}>Outstation • Local • Airport Transfers</Text>
          <MaterialCommunityIcons name="car-estate" size={120} color="#FFFFFF" style={styles.heroIcon} />
        </View>

        <View style={styles.trustCard}>
          <View style={styles.trustItem}>
            <Ionicons name="shield-checkmark-outline" size={34} color={BLUE} />
            <Text style={styles.trustText}>Verified Drivers</Text>
          </View>
          <View style={styles.trustItem}>
            <Ionicons name="cash-outline" size={34} color={BLUE} />
            <Text style={styles.trustText}>Transparent Pricing</Text>
          </View>
          <View style={styles.trustItem}>
            <Ionicons name="thumbs-up-outline" size={34} color={BLUE} />
            <Text style={styles.trustText}>Clean & Comfortable</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={onContinue} activeOpacity={0.9}>
          <Text style={styles.primaryButtonText}>Continue Booking</Text>
        </TouchableOpacity>
        <Text style={styles.supportText}>24x7 Support • We are here for you</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function BookingScreen({ onBookNow, onVehicle }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.pageContent} showsVerticalScrollIndicator={false}>
        <Header title="Book Your Ride" />

        <View style={styles.bannerCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.bannerTitle}>Your Journey,</Text>
            <Text style={styles.bannerTitle}>Our Responsibility</Text>
            <Text style={styles.bannerSub}>Travel safe with Vishwakarma</Text>
          </View>
          <MaterialCommunityIcons name="car-side" size={82} color="#FFFFFF" />
        </View>

        <View style={styles.formCard}>
          <InfoRow icon="location" label="Pickup Location" value="Jugsalai, Jamshedpur" />
          <InfoRow icon="pin-outline" label="Drop Location" value="Tatanagar Railway Station" />
          <InfoRow icon="car-outline" label="Select Service" value="Outstation (One Way)" />
          <TouchableOpacity onPress={onVehicle} activeOpacity={0.8}>
            <InfoRow icon="car-sport-outline" label="Select Vehicle" value="Ertiga (6 Seater)" />
          </TouchableOpacity>

          <View style={styles.rowTwo}>
            <View style={styles.halfBox}>
              <Ionicons name="calendar-outline" size={34} color={ORANGE} />
              <View>
                <Text style={styles.label}>Date</Text>
                <Text style={styles.value}>Today</Text>
              </View>
            </View>
            <View style={styles.halfBox}>
              <Ionicons name="time-outline" size={34} color={ORANGE} />
              <View>
                <Text style={styles.label}>Time</Text>
                <Text style={styles.value}>10:00 AM</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.primaryButtonSmall} onPress={onBookNow} activeOpacity={0.9}>
            <Text style={styles.primaryButtonText}>Book Now  →</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actionGrid}>
          <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
            <Ionicons name="logo-whatsapp" size={46} color={GREEN} />
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
            <Ionicons name="document-text-outline" size={46} color={BLUE} />
            <Text style={styles.actionText}>My Booking</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <View style={styles.infoRow}>
      <Ionicons name={icon} size={34} color={ORANGE} />
      <View style={{ flex: 1 }}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}

function VehicleScreen({ onConfirm }) {
  const [selected, setSelected] = useState('Crysta');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.pageContent} showsVerticalScrollIndicator={false}>
        <Header title="Select Vehicle" />
        <View style={styles.tabs}>
          {['All', 'Sedan', 'SUV', 'MPV'].map((tab) => (
            <TouchableOpacity key={tab} style={[styles.tab, tab === 'All' && styles.activeTab]} activeOpacity={0.85}>
              <Text style={[styles.tabText, tab === 'All' && styles.activeTabText]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {vehicles.map((vehicle) => {
          const isSelected = selected === vehicle.name;
          return (
            <TouchableOpacity
              key={vehicle.name}
              style={[styles.vehicleCard, isSelected && styles.vehicleCardSelected]}
              onPress={() => setSelected(vehicle.name)}
              activeOpacity={0.85}
            >
              <MaterialCommunityIcons name="car-side" size={86} color={BLUE} />
              <View style={{ flex: 1 }}>
                <Text style={styles.vehicleName}>{vehicle.name}</Text>
                <Text style={styles.vehicleMeta}>{vehicle.type} • {vehicle.seats} • AC</Text>
                <Text style={styles.vehicleDesc}>Comfortable ride for your journey</Text>
                <Text style={styles.vehiclePrice}>{vehicle.price}</Text>
              </View>
              <Text style={styles.selectText}>Select</Text>
            </TouchableOpacity>
          );
        })}

        <View style={styles.noticeBox}>
          <Ionicons name="shield-checkmark" size={36} color={BLUE} />
          <Text style={styles.noticeText}>All vehicles are verified, insured & sanitized.</Text>
        </View>

        <TouchableOpacity style={styles.primaryButtonSmall} onPress={onConfirm} activeOpacity={0.9}>
          <Text style={styles.primaryButtonText}>Confirm Vehicle</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function ConfirmationScreen({ onHome }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.pageContent} showsVerticalScrollIndicator={false}>
        <View style={styles.confirmHero}>
          <View style={styles.checkCircle}>
            <Ionicons name="checkmark" size={82} color={BLUE} />
          </View>
          <Text style={styles.confirmTitle}>Booking Confirmed!</Text>
          <Text style={styles.confirmSub}>Your trip is all set. Safe journey.</Text>
        </View>

        <View style={styles.confirmCard}>
          <Text style={styles.sectionLabel}>Booking ID</Text>
          <Text style={styles.bookingId}>VT2506151020</Text>

          <Text style={styles.sectionLabel}>Driver Details</Text>
          <View style={styles.driverRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>RK</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.driverName}>Ramesh Kumar ⭐ 4.8</Text>
              <Text style={styles.driverMeta}>10+ Years Experience</Text>
              <Text style={styles.driverMeta}>+91 98765 43210</Text>
            </View>
            <Ionicons name="call" size={44} color={GREEN} />
          </View>

          <Text style={styles.sectionLabel}>Trip & Vehicle Details</Text>
          <Text style={styles.tripTitle}>Crysta • White • AC</Text>
          <Text style={styles.driverMeta}>Jugsalai → Tatanagar Railway Station</Text>
          <Text style={styles.amount}>Total Amount  Rs 2,040</Text>

          <TouchableOpacity style={styles.callButton} activeOpacity={0.9}>
            <Text style={styles.callButtonText}>Call Driver</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.outlineButton} onPress={onHome} activeOpacity={0.9}>
            <Text style={styles.outlineButtonText}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  const [screen, setScreen] = useState('welcome');

  return (
    <SafeAreaProvider>
      {screen === 'welcome' && <WelcomeScreen onContinue={() => setScreen('booking')} />}
      {screen === 'booking' && (
        <BookingScreen onBookNow={() => setScreen('confirmed')} onVehicle={() => setScreen('vehicle')} />
      )}
      {screen === 'vehicle' && <VehicleScreen onConfirm={() => setScreen('booking')} />}
      {screen === 'confirmed' && <ConfirmationScreen onHome={() => setScreen('welcome')} />}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BG,
  },
  welcomeContent: {
    padding: 18,
    paddingBottom: 42,
  },
  pageContent: {
    padding: 18,
    paddingBottom: 38,
  },
  logoBox: {
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 24,
  },
  logoText: {
    fontSize: 72,
    fontWeight: '900',
    color: BLUE,
  },
  brandText: {
    fontSize: 36,
    fontWeight: '900',
    color: BLUE,
    letterSpacing: 1,
  },
  brandOrange: {
    fontSize: 30,
    fontWeight: '900',
    color: ORANGE,
  },
  tagline: {
    marginTop: 14,
    fontSize: 24,
    fontWeight: '800',
    color: MUTED,
  },
  heroCard: {
    backgroundColor: BLUE,
    borderRadius: 28,
    padding: 28,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 43,
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  heroSub: {
    marginTop: 18,
    fontSize: 20,
    fontWeight: '800',
    color: '#EAF2FF',
    textAlign: 'center',
  },
  heroIcon: {
    marginTop: 32,
  },
  trustCard: {
    marginTop: 24,
    padding: 18,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  trustItem: {
    flex: 1,
    alignItems: 'center',
  },
  trustText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '800',
    color: TEXT,
    textAlign: 'center',
  },
  primaryButton: {
    marginTop: 28,
    height: 78,
    borderRadius: 18,
    backgroundColor: ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonSmall: {
    marginTop: 24,
    height: 72,
    borderRadius: 18,
    backgroundColor: ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '900',
  },
  supportText: {
    marginTop: 20,
    color: MUTED,
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
  },
  header: {
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 29,
    fontWeight: '900',
    color: TEXT,
  },
  bannerCard: {
    marginTop: 16,
    borderRadius: 24,
    padding: 24,
    backgroundColor: BLUE,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 33,
    fontWeight: '900',
  },
  bannerSub: {
    marginTop: 14,
    color: '#EAF2FF',
    fontSize: 22,
    fontWeight: '800',
  },
  formCard: {
    marginTop: 24,
    padding: 22,
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingVertical: 19,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  label: {
    fontSize: 18,
    fontWeight: '800',
    color: MUTED,
  },
  value: {
    marginTop: 6,
    fontSize: 25,
    fontWeight: '900',
    color: TEXT,
  },
  rowTwo: {
    flexDirection: 'row',
    gap: 12,
  },
  halfBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  actionGrid: {
    marginTop: 24,
    flexDirection: 'row',
    gap: 16,
  },
  actionCard: {
    flex: 1,
    height: 132,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    marginTop: 12,
    fontSize: 24,
    fontWeight: '900',
    color: TEXT,
  },
  tabs: {
    marginTop: 18,
    flexDirection: 'row',
    gap: 14,
  },
  tab: {
    flex: 1,
    height: 62,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: BLUE,
  },
  tabText: {
    fontSize: 21,
    fontWeight: '900',
    color: BLUE,
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  vehicleCard: {
    marginTop: 18,
    padding: 22,
    minHeight: 150,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  vehicleCardSelected: {
    borderColor: ORANGE,
    borderWidth: 3,
  },
  vehicleName: {
    fontSize: 32,
    fontWeight: '900',
    color: TEXT,
  },
  vehicleMeta: {
    marginTop: 8,
    fontSize: 21,
    fontWeight: '800',
    color: MUTED,
  },
  vehicleDesc: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: '800',
    color: MUTED,
  },
  vehiclePrice: {
    marginTop: 14,
    fontSize: 27,
    fontWeight: '900',
    color: BLUE,
  },
  selectText: {
    color: ORANGE,
    fontSize: 21,
    fontWeight: '900',
  },
  noticeBox: {
    marginTop: 22,
    padding: 18,
    borderRadius: 22,
    backgroundColor: '#EAF2FF',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  noticeText: {
    flex: 1,
    fontSize: 21,
    fontWeight: '900',
    color: BLUE,
  },
  confirmHero: {
    marginTop: 28,
    padding: 30,
    borderRadius: 28,
    backgroundColor: BLUE,
    alignItems: 'center',
  },
  checkCircle: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: '#22C55E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmTitle: {
    marginTop: 22,
    fontSize: 36,
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  confirmSub: {
    marginTop: 14,
    fontSize: 22,
    fontWeight: '800',
    color: '#EAF2FF',
    textAlign: 'center',
  },
  confirmCard: {
    marginTop: 24,
    padding: 24,
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
  },
  sectionLabel: {
    marginTop: 16,
    fontSize: 21,
    fontWeight: '900',
    color: BLUE,
  },
  bookingId: {
    marginTop: 10,
    fontSize: 26,
    fontWeight: '900',
    color: TEXT,
  },
  driverRow: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  avatar: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: '#DCEBFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 22,
    fontWeight: '900',
    color: BLUE,
  },
  driverName: {
    fontSize: 25,
    fontWeight: '900',
    color: TEXT,
  },
  driverMeta: {
    marginTop: 6,
    fontSize: 19,
    fontWeight: '800',
    color: MUTED,
  },
  tripTitle: {
    marginTop: 10,
    fontSize: 26,
    fontWeight: '900',
    color: TEXT,
  },
  amount: {
    marginTop: 28,
    fontSize: 32,
    fontWeight: '900',
    color: BLUE,
    textAlign: 'right',
  },
  callButton: {
    marginTop: 28,
    height: 72,
    borderRadius: 18,
    backgroundColor: GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  callButtonText: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '900',
  },
  outlineButton: {
    marginTop: 18,
    height: 72,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineButtonText: {
    color: BLUE,
    fontSize: 24,
    fontWeight: '900',
  },
});
