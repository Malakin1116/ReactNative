import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface BudgetProps {
  totalIncome: number;
  totalCosts: number;
  budget: number;
  handleProfilePress: () => void;
}

const Budget: React.FC<BudgetProps> = ({ totalIncome, totalCosts, budget, handleProfilePress }) => {
  return (
    <View style={styles.budgetSection}>
      <View style={styles.budgetContainer}>
        <Text style={styles.budgetText}>
          Budget: 0 + {totalIncome} - {totalCosts} = {budget}$
        </Text>
        <View style={styles.budgetIndicator}>
          <View
            style={[
              styles.budgetBar,
              {
                width: `${Math.min(Math.abs(budget) / 1000 * 100, 100)}%`,
                backgroundColor: budget >= 0 ? '#4CAF50' : '#ff4d4d',
              },
            ]}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.iconButton} onPress={handleProfilePress}>
        <Text style={styles.iconText}>👤</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Budget;