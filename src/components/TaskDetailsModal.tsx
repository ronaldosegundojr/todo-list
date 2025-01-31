import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { Picker } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { theme } from '../theme';

interface TaskDetailsModalProps {
  visible: boolean;
  task: any;
  onSave: (updatedTask: any) => void;
  onClose: () => void;
  allTasks: any[];
}

const TaskDetailsModal: React.FC<TaskDetailsModalProps> = ({ 
  visible, 
  task, 
  onSave, 
  onClose,
  allTasks
}) => {
  const [formData, setFormData] = useState(task);
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Detalhes da Task</Text>

          <TextInput
            style={styles.input}
            placeholder="Título"
            placeholderTextColor={theme.colors.completedText}
            value={formData.title}
            onChangeText={(text) => setFormData({...formData, title: text})}
          />

          <Picker
            selectedValue={formData.priority}
            onValueChange={(value) => setFormData({...formData, priority: value})}
            style={styles.picker}
            dropdownIconColor={theme.colors.text}
            itemStyle={styles.pickerItem}
          >
            <Picker.Item label="Selecione Prioridade" value={"null"} />
            <Picker.Item label="Urgente" value="urgent" />
            <Picker.Item label="Importante" value="important" />
            <Picker.Item label="Lembrar" value="remember" />
            <Picker.Item label="Sem Urgência" value="no-urgency" />
          </Picker>

          <TouchableOpacity 
            style={styles.dateButton}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={styles.dateButtonText}>
              {formData.dueDate 
                ? new Date(formData.dueDate).toLocaleDateString() 
                : "Selecionar Data"}
            </Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={formData.dueDate ? new Date(formData.dueDate) : new Date()}
              mode="date"
              display="default"
              onChange={(event, date) => {
                setShowDatePicker(false);
                date && setFormData({...formData, dueDate: date.toISOString()});
              }}
            />
          )}

          <Picker
            selectedValue={formData.type}
            onValueChange={(value) => setFormData({...formData, type: value})}
            style={styles.picker}
            dropdownIconColor={theme.colors.text}
            itemStyle={styles.pickerItem}
          >
            <Picker.Item label="Selecione Tipo" value={null} />
            <Picker.Item label="Profissional" value="professional" />
            <Picker.Item label="Pessoal" value="personal" />
            <Picker.Item label="Saúde" value="health" />
            <Picker.Item label="Educacional" value="educational" />
            <Picker.Item label="Projetos" value="projects" />
            <Picker.Item label="Outros" value="others" />
          </Picker>

          <TextInput
            style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
            placeholder="Detalhes"
            placeholderTextColor={theme.colors.completedText}
            multiline
            value={formData.details}
            onChangeText={(text) => setFormData({...formData, details: text})}
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity 
              style={[styles.button, styles.saveButton]}
              onPress={() => onSave(formData)}
            >
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    //padding: theme.spacing.m,
    paddingVertical: '2rem',
    paddingHorizontal: '50rem',
  },
  modalContent: {
    backgroundColor: theme.colors.inputBackground,
    borderRadius: theme.radii.l,
    padding: theme.spacing.l,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  modalTitle: {
    color: theme.colors.primary,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: theme.spacing.l,
    textAlign: 'center',
  },
  input: {
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    borderRadius: theme.radii.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    borderWidth: 1,
    borderColor: theme.colors.border,
    fontSize: 16,
  },
  picker: {
    backgroundColor: theme.colors.selectorBackground,
    borderRadius: theme.radii.m,
    marginBottom: theme.spacing.m,
    borderWidth: 1,
    color: theme.colors.text,
    borderColor: theme.colors.border,
    paddingVertical: '0.5rem',
    paddingHorizontal: '1rem',
  },
  pickerItem: {
    color: theme.colors.text,
    backgroundColor: theme.colors.background,
    fontSize: 16,
  },
  dateButton: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.m,
    borderRadius: theme.radii.m,
    marginBottom: theme.spacing.m,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  dateButtonText: {
    color: theme.colors.text,
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.m,
    marginTop: theme.spacing.m,
  },
  button: {
    flex: 1,
    padding: theme.spacing.m,
    borderRadius: theme.radii.m,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  saveButton: {
    backgroundColor: theme.colors.primary,
  },
  cancelButton: {
    backgroundColor: theme.colors.danger,
  },
  buttonText: {
    color: theme.colors.text,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TaskDetailsModal;