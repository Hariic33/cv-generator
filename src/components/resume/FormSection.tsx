const FormSection: React.FC<{
    title: string;
    isVisible: boolean;
    onToggle: () => void;
    children: React.ReactNode;
  }> = ({ title, isVisible, onToggle, children }) => (
    <div className="flex mb-4">
      <p className="flex-1 form-header">
        {title}
        <button
          type="button"
          onClick={onToggle}
          className={isVisible ? 'button-toggle-active' : 'button-toggle'}
        >
          {isVisible ? '-' : '+'}
        </button>
      </p>
      {isVisible && children}
    </div>
  );

export default FormSection
