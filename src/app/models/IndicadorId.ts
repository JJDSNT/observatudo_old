public class AccountId implements Serializable {
    private String codigo_indicador;

    private String source_indicador;

    // default constructor

    public AccountId(String accountNumber, String accountType) {
        this.accountNumber = accountNumber;
        this.accountType = accountType;
    }

    // equals() and hashCode()
}