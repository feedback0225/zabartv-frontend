import { Title } from '@/UI/Title/Title'
import classNames from 'classnames'
import styles from './Policy.module.scss'

export const Policy = () => {
    return (
        <section className={styles.section}>
            <div className={classNames('container', styles.container)}>
                <div className={styles.content}>
                    <Title size='large' className={styles.title}>Политика конфиденциальности</Title>
                    <div className={styles.desc}>
                        <p>1. Настоящая Политика конфиденциальности (политика обработки персональных данных Пользователей) (далее – «Политика») распространяет свое действие в отношении всей информации, которую Общество с ограниченной ответственностью «М3» (юридическое лицо, созданное на территории Российской Федерации, ОГРН 1187746527099, ИНН 9731003250, зарегистрировано по адресу: г. Москва, Территория инновационного центра Сколково, ул. Луговая, д. 4, корп. 5, эт. 3, пом. 3-7), являющееся правообладателем, владельцем и администратором онлайн-сервиса MORE.TV может получить от Пользователей при использовании ими Сервиса и/или обращении в службу поддержки Сервиса.</p>
                        <p>2. Настоящая Политика является юридически обязательным документом для всех Пользователей Сервиса. Каждый Пользователь обязуется ознакомиться с настоящей Политикой до момента начала использования Сервиса.</p>
                        <p>3. Любое использование Пользователем Сервиса означает полное безоговорочное согласие Пользователя с настоящей Политикой и всеми указанными в ней условиями обработки его персональной информации и данных. В случае несогласия с условиями Политики Пользователь обязан воздержаться от использования Сервиса.</p>
                    </div>
                    <Title level='h2' size='small' className={styles.subtitle}>2. Для целей настоящего документа используются следующие термины:</Title>
                    <div className={styles.desc}>
                        <p>2.1. М3 – общество с ограниченной ответственностью «М3» (юридическое лицо, созданное на территории Российской Федерации, ОГРН 1187746527099, ИНН 9731003250, зарегистрированное) по адресу: г. Москва, Территория инновационного центра Сколково, ул. Луговая, д. 4, корп. 5, эт. 3, пом. 3-7, и являющееся оператором персональных данных по смыслу Федерального закона «О персональных данных» от 27.07.2006 г. № 152-ФЗ и самостоятельно организующие и (или) осуществляющие обработку персональных данных Пользователей, а также определяющие цели обработки персональных данных Пользователей, состав персональных данных Пользователей, подлежащих обработке, действия (операции), совершаемые с персональными данными Пользователей в соответствии с настоящей Политикой.</p>
                        <p>2.2. Сервис – онлайн-сервис MORE.TV, размещенный в сети Интернет, принадлежащий М3 мультимедийный продукт, представляющий собой сложный объект авторского права, объединенный общим наименованием и оформлением в виде интерактивной совокупности аудиовизуальных произведений, формируемый М3 по своему усмотрению, доступ к которому предоставляется Пользователям в сети Интернет по адресу: https://more.tv, а также посредством различных пользовательских устройств, в том числе: SMART TV, мобильных устройств (телефон / планшет), персональных компьютеров (стационарных / мобильных) и тд. после установки на такие устройства специального программного обеспечения. Доступ Пользователей к Сервису осуществляется на условиях Пользовательского соглашения.</p>
                        <p>2.3 Пользователь – дееспособное физическое лицо, самостоятельно осуществившее акцепт Пользовательского соглашения в соответствии с его условиями и использующее функциональные возможности Сервиса.</p>
                        <p>2.4 Пользовательское соглашение – соглашение, регламентирующее взаимоотношения Пользователя Сервиса и М3, размещенное по адресу: https://more.tv/useragreement. 2.5 Услуги – деятельность М3 по обеспечению доступа Пользователей к функциональным возможностям Сервиса и просмотру контента.</p>
                        <p>2.6 Персональные данные / Данные – информация, которую Пользователи передают или могут передавать М3 в процессе использования Сервиса, в соответствии с условиями настоящей Политики.</p>
                        <p>2.7 Обработка данных – любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с Данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение данных.</p>
                        <p>2.8 Иные термины, не определённые настоящей Политикой, подлежат толкованию в соответствии с Пользовательским соглашением, а в случае отсутствия их определения в Пользовательском соглашении – в соответствии с обычаями деловой этики и общепринятым в соответствующей сфере деятельности значением, а также положениями действующего законодательства Российской Федерации.</p>
                        <p>2.9 Все определения настоящей Политики сформулированы лишь для удобства и не могут повлиять на юридическую значимость отдельных положений Политики.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}